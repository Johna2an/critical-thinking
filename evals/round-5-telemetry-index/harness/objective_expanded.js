// Deterministic objective scorecard for the 10 complete conditions (reasoning). No LLM. Offline.
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval/expanded';
const ans=JSON.parse(fs.readFileSync(dir+'/reasoning_complete.json','utf8'));
const CONDS=JSON.parse(fs.readFileSync(dir+'/complete_conditions.json','utf8'));
const clean=s=>(s||'').replace(/<\/?(answer|invoke|parameter|antml)[^>]*>/gi,'').replace(/&lt;\/?(answer|invoke|parameter)[^&]*&gt;/gi,'').replace(/(?:source skill file|relevant files applied)[^\n]*/gi,'').trim();
const BIASES=['confirmation bias','base rate','base-rate','survivorship','anchoring','anchor','sunk cost','reverse causation','reverse causality','confound','selection bias','selection effect','motivated reasoning','attribute substitution','question substitution','regression to the mean','availability','recency','overconfiden','goodhart','premortem','pre-mortem','steelman','steel-man','disconfirm','file drawer','publication bias','healthy-user','optimism bias','planning fallacy','correlation is not','correlation does not','denominator','reference class','outside view','post hoc','equivocation','false dichotomy','cherry-pick','opportunity cost','second-order','second order','margin of safety','inversion'];
function quant(t){let c=0;c+=(t.match(/\b\d{1,3}(?:\.\d+)?\s*%/g)||[]).length;c+=(t.match(/\b0\.\d+\b/g)||[]).length;c+=(t.match(/~\s*\d/g)||[]).length;c+=(t.match(/\bprobabilit|\bodds\b|\blikelihood\b|\bconfidence\b/gi)||[]).length;return c;}
function bias(t){const l=t.toLowerCase();let s=new Set();for(const b of BIASES)if(l.includes(b))s.add(b.replace(/[-\s]/g,''));return s.size;}
function fals(t){return (t.match(/falsif|disconfirm|would change my mind|what would (make|prove|move|change)|refut|test(s)? that would|kill (criteri|test|switch)|change my mind/gi)||[]).length;}
function act(t){const tail=t.slice(-700).toLowerCase();return (tail.match(/verdict|recommend|bottom line|my answer|i would|should (take|pass|decline|buy|not|avoid)|do not|don't|conclusion|net:|default:|in short/gi)||[]).length;}
function halluc(t){let c=0;c+=(t.match(/\bet al\.?/gi)||[]).length;c+=(t.match(/\bstudy by\b|\baccording to a \d+/gi)||[]).length;return c;}
function factP1(t){let parts=0,ok=0;const pt=t.match(/(\d{2,4})\s*(?:piano )?tuners|piano tuners[^.]*?(\d{2,4})/i);if(pt){parts++;const n=+(pt[1]||pt[2]);if(n>=40&&n<=400)ok++;}const st=t.match(/(\d{1,2})\s*%[^.]*?(engineer|stem|science)|(engineer|stem|science)[^.]*?(\d{1,2})\s*%/i);if(st){parts++;const n=+(st[1]||st[4]);if(n>=15&&n<=35)ok++;}return parts?ok/parts*10:null;}
// LENGTH-NORMALIZED: count metrics expressed as density per 1000 words (removes the canonical-vs-fresh length confound).
// quantification & bias-naming are count-based -> density. falsifier presence-based (length-robust) -> light density. actionability tail-based -> length-robust, kept raw.
const dens=(c,words)=>c/Math.max(words/1000,0.15);
const N={quant:d=>Math.min(d,16)/16*10, bias:d=>Math.min(d,11)/11*10, fals:c=>c===0?0:Math.min(2+c*3,10), act:c=>c===0?2:Math.min(4+c*2,10)};
const per=[];
for(const a of ans){const t=clean(a.answer);if(!t)continue;const w=t.split(/\s+/).length;const fa=a.problemId===1?factP1(t):null;
  per.push({condition:a.condition,problemId:a.problemId,words:w,
    quantification:+N.quant(dens(quant(t),w)).toFixed(2),
    bias_naming:+N.bias(dens(bias(t),w)).toFixed(2),
    falsifier:+N.fals(fals(t)).toFixed(2),
    actionability:+N.act(act(t)).toFixed(2),
    hallucination:halluc(t),factual_acc:fa});}
const mean=x=>x.length?x.reduce((a,b)=>a+b,0)/x.length:NaN;
const DIMS=['quantification','bias_naming','falsifier','actionability'];
const perArm={};
for(const c of CONDS){const r=per.filter(x=>x.condition===c);perArm[c]={n:r.length};
  for(const d of DIMS)perArm[c][d]=+mean(r.map(x=>x[d])).toFixed(2);
  perArm[c].objective_composite=+mean(DIMS.map(d=>mean(r.map(x=>x[d])))).toFixed(2);
  perArm[c].hallucination=+mean(r.map(x=>x.hallucination)).toFixed(2);
  const fa=r.map(x=>x.factual_acc).filter(v=>v!==null);perArm[c].factual_acc=fa.length?+mean(fa).toFixed(1):null;}
fs.writeFileSync(dir+'/objective_expanded.json',JSON.stringify({perArm,per_answer:per,dims:DIMS},null,2));
console.log('OBJECTIVE SCORECARD (10 conditions, deterministic 0-10):');
console.log('cond'.padEnd(20)+DIMS.map(d=>d.slice(0,9).padStart(10)).join('')+'   COMPOSITE  factual');
CONDS.slice().sort((a,b)=>perArm[b].objective_composite-perArm[a].objective_composite).forEach(c=>{const p=perArm[c];console.log(c.padEnd(20)+DIMS.map(d=>String(p[d]).padStart(10)).join('')+'     '+String(p.objective_composite).padStart(5)+'    '+(p.factual_acc===null?'n/a':p.factual_acc));});
