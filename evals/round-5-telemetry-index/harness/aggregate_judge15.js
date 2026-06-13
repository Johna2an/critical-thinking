// De-anonymize the 18 judge passes and aggregate per-condition judge quality (5 reasoning dims).
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval/expanded';
const keymap=JSON.parse(fs.readFileSync(dir+'/judge15/keymap15.json','utf8'));
const raw=fs.readFileSync(process.argv[2],'utf8');
const o=JSON.parse(raw);
const passes=o.result?o.result.results:o.results;
const DIMS=['rigor','calibration','bias_awareness','depth','usefulness'];
const rows=[];
for(const p of passes){ if(!p.data||!p.data.scores) continue; const km=keymap[p.pid];
  for(const L of Object.keys(p.data.scores)){ const cond=km[L]; if(!cond) continue; const s=p.data.scores[L];
    const vals=DIMS.map(d=>Number(s[d])); if(vals.some(Number.isNaN)) continue;
    rows.push({pid:p.pid,judge:p.judge,condition:cond,composite:vals.reduce((a,b)=>a+b,0)/5,dims:vals}); } }
const mean=x=>x.length?x.reduce((a,b)=>a+b,0)/x.length:NaN;
const sd=x=>{if(x.length<2)return NaN;const m=mean(x);return Math.sqrt(mean(x.map(v=>(v-m)**2)));};
const CONDS=[...new Set(rows.map(r=>r.condition))].sort();
const perArm={};
for(const c of CONDS){ const r=rows.filter(x=>x.condition===c);
  perArm[c]={n:r.length, composite:+mean(r.map(x=>x.composite)).toFixed(3), sd:+sd(r.map(x=>x.composite)).toFixed(2)};
  DIMS.forEach((d,i)=>perArm[c][d]=+mean(r.map(x=>x.dims[i])).toFixed(2)); }
fs.writeFileSync(dir+'/judge_quality_15.json', JSON.stringify({perArm,dims:DIMS,n_passes:passes.length},null,2));
console.log('JUDGE QUALITY (15 conditions, mean of 5 reasoning dims, '+rows.length+' scored answers):');
console.log('rank cond'.padEnd(25)+'composite  '+DIMS.map(d=>d.slice(0,5).padStart(7)).join('')+'   sd');
CONDS.slice().sort((a,b)=>perArm[b].composite-perArm[a].composite).forEach((c,i)=>{const p=perArm[c];console.log(String(i+1).padStart(2)+'  '+c.padEnd(21)+String(p.composite).padStart(6)+'   '+DIMS.map(d=>String(p[d]).padStart(7)).join('')+'  '+p.sd);});
