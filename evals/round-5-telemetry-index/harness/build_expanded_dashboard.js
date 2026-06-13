// Final 15-condition Skill Intelligence Index: judged quality + objective + cost, with quality-vs-cost frontiers. Offline.
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval';
const TOK=JSON.parse(fs.readFileSync(dir+'/expanded/token_expanded.json','utf8'));
const OBJ=JSON.parse(fs.readFileSync(dir+'/expanded/objective_expanded.json','utf8'));
const JQ=JSON.parse(fs.readFileSync(dir+'/expanded/judge_quality_15.json','utf8'));
const CONDS=Object.keys(OBJ.perArm);
const PIN=10/1e6,POUT=50/1e6;
const f=(x,d=2)=>x==null||Number.isNaN(x)?'n/a':(+x).toFixed(d);
const META={
 ours:{label:'ours (critical-thinking)',scope:'general',col:'#2f7d4f'},
 'cc-thinking':{label:'cc-thinking',scope:'general',col:'#b4452f'},
 'thinking-partner':{label:'thinking-partner',scope:'general',col:'#2f5d8a'},
 'skills-for-humanity':{label:'skills-for-humanity',scope:'general',col:'#7a4f9a'},
 balanced:{label:'balanced',scope:'general',col:'#1f8a8a'},
 'cyperx84-mm':{label:'cyperx84 mental-models',scope:'general',col:'#c77d20'},
 'first-principles':{label:'first-principles',scope:'narrow',col:'#9a9a55'},
 'devils-advocate':{label:'devils-advocate',scope:'narrow',col:'#c0556f'},
 'sequential-thinking':{label:'sequential-thinking',scope:'narrow',col:'#557a9a'},
 'systems-thinking':{label:'systems-thinking',scope:'narrow',col:'#6f9a55'},
 'socratic-debate':{label:'socratic-debate',scope:'general',col:'#9a5577'},
 'expert-persona':{label:'expert-persona (1-line prompt)',scope:'reference',col:'#b0903a'},
 'plain-cot':{label:'plain chain-of-thought',scope:'reference',col:'#999999'},
 'self-critique':{label:'self-critique prompt',scope:'reference',col:'#8a6a9a'},
 'gsd-critical-thinking':{label:'gsd critical-thinking',scope:'general',col:'#3a8f6a'},
 'kdense-sci-critical':{label:'kdense scientific-CT',scope:'general',col:'#6a4f9a'},
 'conducty-dialectic':{label:'conducty-dialectic',scope:'general',col:'#9a7755'},
 'argumentation-framework':{label:'argumentation-framework',scope:'narrow',col:'#557799'},
 baseline:{label:'baseline (no skill)',scope:'reference',col:'#8a8a8a'},
};
const short=c=>({ours:'ours','cc-thinking':'cc-think','thinking-partner':'think-ptr','skills-for-humanity':'s4h',balanced:'balanced','cyperx84-mm':'cyperx84','first-principles':'1st-prin','devils-advocate':'devils','sequential-thinking':'seq','systems-thinking':'systems','socratic-debate':'socratic','expert-persona':'expert-1ln','plain-cot':'cot','self-critique':'self-crit',baseline:'base'}[c]||c);
const cost={};
for(const c of CONDS){const t=TOK.per_arm[c];const usd=t.in*PIN+t.out*POUT;const load=TOK.load[c].realistic;const usdC=(load*0.1+180)*PIN+t.out*POUT;
  cost[c]={in:t.in,out:t.out,operate:t.operate,load,full:TOK.load[c].full,usd:+usd.toFixed(4),usdCached:+usdC.toFixed(4)};}
const jq=c=>JQ.perArm[c].composite, obj=c=>OBJ.perArm[c].objective_composite;
const valQpK=c=>jq(c)/(cost[c].operate/1000), valQpUsd=c=>jq(c)/(cost[c].usd||1e-6);

// ---- SVG helpers ----
function hbars(data,{w=640,bh=22,gap=8,pad=180,max,fmt=v=>v}){max=max||Math.max(...data.map(d=>d.v))*1.1;const h=data.length*(bh+gap)+8;let s=`<svg viewBox="0 0 ${w} ${h}" class="chart">`;data.forEach((d,i)=>{const y=i*(bh+gap)+4;const bw=(w-pad-95)*(d.v/max);s+=`<text x="${pad-8}" y="${y+bh/2+4}" text-anchor="end" class="lbl">${d.label}</text><rect x="${pad}" y="${y}" width="${Math.max(bw,1)}" height="${bh}" rx="3" fill="${d.color}"/><text x="${pad+bw+6}" y="${y+bh/2+4}" class="val">${fmt(d.v)}</text>`;});return s+'</svg>';}
function stacked(data,{w=640,bh=22,gap=10,pad=180,max}){max=max||Math.max(...data.map(d=>d.parts.reduce((a,b)=>a+b.v,0)))*1.1;const h=data.length*(bh+gap)+8;let s=`<svg viewBox="0 0 ${w} ${h}" class="chart">`;data.forEach((d,i)=>{const y=i*(bh+gap)+4;let x=pad;const tot=d.parts.reduce((a,b)=>a+b.v,0);s+=`<text x="${pad-8}" y="${y+bh/2+4}" text-anchor="end" class="lbl">${d.label}</text>`;d.parts.forEach(p=>{const bw=(w-pad-95)*(p.v/max);s+=`<rect x="${x}" y="${y}" width="${Math.max(bw,0.5)}" height="${bh}" fill="${p.color}"><title>${p.name}: ${Math.round(p.v)}</title></rect>`;x+=bw;});s+=`<text x="${x+6}" y="${y+bh/2+4}" class="val">${Math.round(tot)}</text>`;});return s+'</svg>';}
function scatter(pts,{w=640,h=460,padL=66,padB=54,padT=18,padR=22,xlab='',ylab='',xlog=false,xmax,frontier=true}){
  const xs=pts.map(p=>p.x),ys=pts.map(p=>p.y);let x0=xlog?Math.max(Math.min(...xs)*0.8,400):Math.min(...xs)*0.9;let x1=xmax||Math.max(...xs)*1.05;let ymin=Math.min(...ys)-0.3,ymax=Math.max(...ys)+0.3;
  const X=v=>xlog?padL+(w-padL-padR)*(Math.log10(Math.max(v,1))-Math.log10(x0))/(Math.log10(x1)-Math.log10(x0)):padL+(w-padL-padR)*(v-x0)/((x1-x0)||1);
  const Y=v=>(h-padB)-(h-padB-padT)*(v-ymin)/((ymax-ymin)||1);
  let s=`<svg viewBox="0 0 ${w} ${h}" class="chart">`;
  s+=`<line x1="${padL}" y1="${h-padB}" x2="${w-padR}" y2="${h-padB}" class="axis"/><line x1="${padL}" y1="${padT}" x2="${padL}" y2="${h-padB}" class="axis"/>`;
  for(let g=0;g<=4;g++){const yv=ymin+(ymax-ymin)*g/4;const yy=Y(yv);s+=`<line x1="${padL}" y1="${yy}" x2="${w-padR}" y2="${yy}" class="grid"/><text x="${padL-8}" y="${yy+4}" text-anchor="end" class="tick">${yv.toFixed(1)}</text>`;}
  const xt=xlog?[x0,1000,5000,x1]:[x0,(x0+x1)/2,x1];xt.forEach(v=>{s+=`<text x="${X(v)}" y="${h-padB+18}" text-anchor="middle" class="tick">${v>=1000?(v/1000).toFixed(v>=10000?0:1)+'k':(v<1?'$'+v.toFixed(2):Math.round(v))}</text>`;});
  if(frontier){const sorted=pts.slice().sort((a,b)=>a.x-b.x);const fr=[];let by=-1e9;for(const p of sorted){if(p.y>=by){fr.push(p);by=p.y;}}for(let i=0;i<fr.length-1;i++)s+=`<line x1="${X(fr[i].x)}" y1="${Y(fr[i].y)}" x2="${X(fr[i+1].x)}" y2="${Y(fr[i+1].y)}" stroke="#b4452f" stroke-width="1.4" stroke-dasharray="4 3"/>`;pts.forEach(p=>p.dom=!fr.includes(p));}
  pts.forEach(p=>{const r=p.r||7;s+=`<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="${r}" fill="${p.color}" fill-opacity="${p.dom?0.42:0.92}" stroke="#fff" stroke-width="1.3"><title>${p.label}</title></circle><text x="${X(p.x)}" y="${Y(p.y)-r-3}" text-anchor="middle" class="pt">${p.short}</text>`;});
  s+=`<text x="${w/2}" y="${h-4}" text-anchor="middle" class="axlab">${xlab}</text><text x="13" y="${h/2}" text-anchor="middle" class="axlab" transform="rotate(-90 13 ${h/2})">${ylab}</text>`;
  return s+'</svg>';
}
const css=`:root{--ink:#1a1a1a;--mut:#6b6b6b;--line:#e6e3dd;--bg:#faf8f4;--card:#fff;--accent:#b4452f;--good:#2f7d4f;--mono:Consolas,Menlo,monospace}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif}.wrap{max-width:1060px;margin:0 auto;padding:42px 24px 90px}header{border-bottom:3px solid var(--accent);padding-bottom:16px}.kick{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:700}h1{font-size:27px;margin:9px 0 5px;font-weight:760;letter-spacing:-.01em}.sub{color:var(--mut);font-size:14.5px}h2{font-size:19px;margin:38px 0 6px;font-weight:730}h3{font-size:13.5px;margin:14px 0 4px;font-weight:700}p{margin:8px 0}.small{font-size:12.5px;color:var(--mut)}.prov{background:#fbf3e8;border:1px solid #ecdcc2;border-radius:10px;padding:11px 15px;font-size:12.5px;color:#6b5836;margin:14px 0}.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:15px 17px;margin:13px 0}.chart{width:100%;height:auto;display:block}.lbl{font-size:11px;fill:#444}.val{font-size:10.5px;fill:#333;font-family:var(--mono)}.tick{font-size:10.5px;fill:#888}.axis{stroke:#bbb}.grid{stroke:#eee}.pt{font-size:10px;fill:#333;font-weight:600}.axlab{font-size:11.5px;fill:#888}table{border-collapse:collapse;width:100%;font-size:12.5px;margin:9px 0}th,td{padding:6px 8px;border-bottom:1px solid var(--line);text-align:left}th{font-size:10.5px;text-transform:uppercase;letter-spacing:.04em;color:var(--mut)}td.n,th.n{text-align:right;font-family:var(--mono)}tr.ours td{background:#eef4ee;font-weight:600}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:12px;margin:14px 0}.kpi{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:13px 15px}.kpi .big{font-size:21px;font-weight:780;font-family:var(--mono)}.kpi .l{font-size:11.5px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em;font-weight:700}.kpi .n2{font-size:12px;color:var(--mut);margin-top:3px}.callout{background:var(--card);border-left:4px solid var(--accent);border-radius:0 10px 10px 0;padding:11px 15px;margin:13px 0}.callout.good{border-color:var(--good)}.tag{font-size:9.5px;padding:1px 6px;border-radius:8px;background:#eee;color:#555;font-weight:700}ul{margin:7px 0 7px 2px;padding-left:19px}li{margin:5px 0}.foot{margin-top:44px;border-top:1px solid var(--line);padding-top:13px;color:var(--mut);font-size:12px}code{font-family:var(--mono);font-size:12px;background:#f0ece5;padding:1px 5px;border-radius:4px}`;
const legend=`<div class="small" style="display:flex;gap:11px;flex-wrap:wrap;margin:4px 0">${CONDS.map(c=>`<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${META[c].col};margin-right:3px"></span>${short(c)}</span>`).join('')}</div>`;

const byJQ=CONDS.slice().sort((a,b)=>jq(b)-jq(a));
const byObj=CONDS.slice().sort((a,b)=>obj(b)-obj(a));
const byVal=CONDS.slice().sort((a,b)=>valQpK(b)-valQpK(a));

let H=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Skill Intelligence Index — 15 conditions</title><style>${css}</style></head><body><div class="wrap">`;
H+=`<header><div class="kick">Skill Intelligence Index · 15 conditions · reasoning</div><h1>15 ways to make Claude think harder, ranked by quality, rigor, and real cost</h1><div class="sub">A full Artificial-Analysis-style field: 9 critical-thinking skills + 5 prompt/reference arms + a no-skill baseline. Judged quality (18 blind passes), deterministic objective markers, and measured token cost. Model: Claude Fable 5 ($10/$50 per M tok).</div></header>`;
H+=`<div class="prov"><b>Method &amp; honesty:</b> Reasoning round, 6 problems, <b>n=1 generation per cell, all equal-length (~370 words)</b> so cost/objective comparisons are clean. Judged quality = mean of 5 dimensions (rigor, calibration, bias-awareness, depth, usefulness) from <b>18 blind judge passes</b> scoring all 15 answers independently (not forced-ranked). Tokens via tiktoken cl100k proxy. The field is tight (judged 6.9–8.3, inter-judge SD 0.3–0.9), so the top cluster is a near-tie; treat gaps under ~0.4 as noise. Creativity round and multi-run error bars are future work. Not published.</div>`;

// KPIs — honest
H+=`<div class="cards">
<div class="kpi"><div class="l">Judged quality #1</div><div class="big" style="color:#8a6a9a">self-critique ${f(jq('self-critique'))}</div><div class="n2">a 1-line prompt, $0 load. ours #${byJQ.indexOf('ours')+1} (${f(jq('ours'))})</div></div>
<div class="kpi"><div class="l">Objective rigor #1</div><div class="big" style="color:var(--good)">ours ${f(obj('ours'))}</div><div class="n2">falsifier 5.0 vs ≤2.5 — names what would change its mind</div></div>
<div class="kpi"><div class="l">Best value (quality/1k tok)</div><div class="big">${short(byVal[0])}</div><div class="n2">ours is #${byVal.indexOf('ours')+1} — heaviest load drags it down</div></div>
<div class="kpi"><div class="l">Consistently last</div><div class="big" style="color:var(--accent)">cc-think / 1st-prin</div><div class="n2">framework-heavy ≠ better judged quality</div></div>
</div>`;

// Section 1: judged quality vs cost frontier — THE chart
const ptsJQt=CONDS.map(c=>({x:cost[c].operate,y:jq(c),color:META[c].col,label:META[c].label,short:short(c),r:6+Math.sqrt(cost[c].load)/30}));
const ptsJQu=CONDS.map(c=>({x:cost[c].usd,y:jq(c),color:META[c].col,label:META[c].label,short:short(c),r:6+Math.sqrt(cost[c].load)/30}));
H+=`<h2>1. Judged quality vs. cost — the frontier</h2><p class="small">Up-and-left wins: more judged quality for less cost. Dashed = efficient frontier; faded points are dominated. Bubble = context-tax load. <b>This is the headline:</b> the cheap prompt arms (self-critique, plain-cot, baseline, expert-persona) sit on or near the frontier; the heavy skills are pushed right by cost without a matching quality gain.</p>${legend}
<div class="card"><h3>cost in tokens/answer (log)</h3>${scatter(ptsJQt,{xlab:'operate tokens / answer (log)',ylab:'judged quality (0-10)',xlog:true})}</div>
<div class="card"><h3>cost in USD/answer (Fable 5)</h3>${scatter(ptsJQu,{xlab:'$ / answer (uncached)',ylab:'judged quality (0-10)',xmax:0.16})}</div>
<p class="small"><b>ours</b> sits in the quality top-cluster but at the far-right (most expensive) — it is dominated on this frontier by self-critique and balanced, which match or beat its judged quality at a fraction of the cost.</p>`;

// Section 2: objective vs cost frontier
const ptsOt=CONDS.map(c=>({x:cost[c].operate,y:obj(c),color:META[c].col,label:META[c].label,short:short(c),r:6+Math.sqrt(cost[c].load)/30}));
H+=`<h2>2. Objective rigor vs. cost</h2><p class="small">The deterministic markers (does it quantify, name biases, state a falsifier?). Here <b>ours leads</b> — it produces the most rigor-signalling answers — but again at the highest cost.</p>
<div class="card">${scatter(ptsOt,{xlab:'operate tokens / answer (log)',ylab:'objective composite (0-10)',xlog:true})}</div>`;

// Section 3: judged leaderboard
H+=`<h2>3. Judged-quality leaderboard (15 conditions)</h2><div class="card">
<table><thead><tr><th>#</th><th>Condition</th><th>Scope</th><th class="n">Quality</th><th class="n">±SD</th><th class="n">rigor</th><th class="n">calib</th><th class="n">bias</th><th class="n">depth</th><th class="n">useful</th></tr></thead><tbody>`;
byJQ.forEach((c,i)=>{const p=JQ.perArm[c];H+=`<tr class="${c==='ours'?'ours':''}"><td class="n">${i+1}</td><td>${META[c].label}</td><td><span class="tag">${META[c].scope}</span></td><td class="n">${f(p.composite)}</td><td class="n">${f(p.sd)}</td><td class="n">${p.rigor}</td><td class="n">${p.calibration}</td><td class="n">${p.bias_awareness}</td><td class="n">${p.depth}</td><td class="n">${p.usefulness}</td></tr>`;});
H+=`</tbody></table><p class="small">Top cluster (self-critique, balanced, ours, plain-cot, devils-advocate) is a statistical near-tie. The simple prompt arms holding the top is the result that matters.</p></div>`;

// Section 4: objective scorecard
H+=`<h2>4. Objective scorecard (deterministic, length-normalized)</h2><div class="card">
<table><thead><tr><th>Condition</th><th class="n">Quantif.</th><th class="n">Bias-naming</th><th class="n">Falsifier</th><th class="n">Action.</th><th class="n">Composite</th><th class="n">Factual</th></tr></thead><tbody>`;
byObj.forEach(c=>{const p=OBJ.perArm[c];H+=`<tr class="${c==='ours'?'ours':''}"><td>${META[c].label}</td><td class="n">${p.quantification}</td><td class="n">${p.bias_naming}</td><td class="n">${p.falsifier}</td><td class="n">${p.actionability}</td><td class="n">${p.objective_composite}</td><td class="n">${p.factual_acc==null?'n/a':p.factual_acc}</td></tr>`;});
H+=`</tbody></table><p class="small">ours' falsifier 5.0 (vs ≤2.5) is its real, length-robust edge. skills-for-humanity got the Fermi check wrong (0).</p></div>`;

// Section 5: cost
H+=`<h2>5. Cost &amp; context-tax</h2>${legend}
<div class="card"><h3>Realistic load (context tax) per invoke — tokens</h3>${hbars(CONDS.slice().sort((a,b)=>cost[b].load-cost[a].load).map(c=>({label:short(c),v:cost[c].load,color:META[c].col})),{fmt:v=>v.toLocaleString(),max:16000})}<p class="small">Full-tree ceilings: s4h ${cost['skills-for-humanity'].full.toLocaleString()}, cc-thinking ${cost['cc-thinking'].full.toLocaleString()}, ours ${cost.ours.full.toLocaleString()}. The reference arms (self-critique, plain-cot, expert-persona) and baseline cost 0 to load.</p></div>
<div class="card"><h3>Operate cost / answer (input load + output) — tokens</h3>${stacked(CONDS.slice().sort((a,b)=>cost[b].operate-cost[a].operate).map(c=>({label:short(c),parts:[{name:'input load',v:cost[c].in,color:META[c].col},{name:'output',v:cost[c].out,color:'#d9cdbb'}]})),{max:16000})}</div>`;

// Section 6: value
H+=`<h2>6. Value — judged quality per cost</h2><div class="card"><h3>Judged quality per 1k operate tokens (higher = better value)</h3>
${hbars(byVal.map(c=>({label:short(c),v:valQpK(c),color:META[c].col})),{max:Math.max(...CONDS.map(valQpK))*1.1,fmt:v=>v.toFixed(1)})}
<p class="small">The free prompt arms (baseline, self-critique, plain-cot, expert-persona) and the featherweight skill <b>balanced</b> dominate value. <b>ours ranks #${byVal.indexOf('ours')+1} of 15 on value</b>: its quality is top-cluster but its ~${(cost.ours.load/1000).toFixed(1)}k-token load makes each answer ~${(cost.ours.usd/cost['self-critique'].usd).toFixed(0)}x the cost of the self-critique prompt that out-scores it.</p></div>`;

// Section 7: synthesis table
H+=`<h2>7. All three tracks at a glance</h2><div class="card"><table><thead><tr><th>Condition</th><th class="n">Judged</th><th class="n">Objective</th><th class="n">$ / answer</th><th class="n">Load (tok)</th><th class="n">Value (Q/ktok)</th></tr></thead><tbody>`;
for(const c of byJQ){H+=`<tr class="${c==='ours'?'ours':''}"><td>${META[c].label}</td><td class="n">${f(jq(c))}</td><td class="n">${f(obj(c))}</td><td class="n">$${f(cost[c].usd,3)}</td><td class="n">${cost[c].load.toLocaleString()}</td><td class="n">${f(valQpK(c),1)}</td></tr>`;}
H+=`</tbody></table></div>`;

// Section 8: reading
H+=`<h2>8. What the data says</h2><div class="callout good"><ul>
<li><b>The headline is humbling and useful:</b> on judged reasoning quality, a free one-line <b>self-critique</b> prompt (8.28) and the featherweight <b>balanced</b> skill (7.98) match or beat every elaborate skill. Structure helps, but cheap structure helps about as much as expensive structure.</li>
<li><b>ours is genuinely strong but not dominant:</b> #3 on judged quality (top cluster) and <b>#1 on objective rigor markers</b> (uniquely high falsifier). Its problem is cost: heaviest load of the field, so it is dominated on the value frontier.</li>
<li><b>Action for ours:</b> the elaborate scaffolding is not buying judged-quality gains over a self-critique prompt. Trim the ${(cost.ours.load/1000).toFixed(1)}k-token load hard, keep the falsifier/disconfirmation discipline (its real edge), and consider folding a self-critique pass in — the cheapest thing on the board is also the best.</li>
<li><b>Cautionary tales:</b> cc-thinking (#11) and first-principles (#15, last) show that more frameworks and more loaded context correlate with <i>worse</i> judged quality here, not better. skills-for-humanity's 322k-token tree got the one checkable fact wrong.</li>
<li><b>Caveats kept honest:</b> n=1, reasoning only, tight field (top is a near-tie), single judge-model family. The creativity round and multi-run error bars would sharpen this.</li>
</ul></div>`;

H+=`<div class="foot">15 conditions, reasoning round, n=1, equal-length. Judged quality: 18 blind independent-scoring passes, 5 dims. Objective: deterministic + length-normalized. Cost: tiktoken cl100k proxy, Fable 5 $10/$50 per M. Field is tight; top cluster is a near-tie. Not published.</div></div></body></html>`;
fs.writeFileSync(dir+'/expanded/INDEX_EXPANDED.html',H);
console.log('wrote INDEX_EXPANDED.html ('+Math.round(H.length/1024)+' KB), '+CONDS.length+' conditions, '+(H.match(/<svg/g)||[]).length+' charts');
console.log('judged rank: '+byJQ.map((c,i)=>(i+1)+'.'+short(c)).slice(0,6).join('  '));
console.log('value rank:  '+byVal.map((c,i)=>(i+1)+'.'+short(c)).slice(0,6).join('  '));
