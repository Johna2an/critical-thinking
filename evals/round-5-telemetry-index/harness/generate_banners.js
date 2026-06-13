// Generate polished editorial SVG banners (1200px) for the V2 benchmark README. Static SVG, GitHub-renderable.
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval';
const TOK=JSON.parse(fs.readFileSync(dir+'/expanded/token_expanded.json','utf8'));
const OBJ=JSON.parse(fs.readFileSync(dir+'/expanded/objective_expanded.json','utf8'));
const JQ=JSON.parse(fs.readFileSync(dir+'/expanded/judge_quality_15.json','utf8'));
const out=dir+'/expanded/banners'; fs.mkdirSync(out,{recursive:true});
const CONDS=Object.keys(OBJ.perArm);
const PIN=10/1e6,POUT=50/1e6;
const COL={ours:'#2f7d4f','cc-thinking':'#b4452f','thinking-partner':'#2f5d8a','skills-for-humanity':'#7a4f9a',balanced:'#1f8a8a','cyperx84-mm':'#c77d20','first-principles':'#9a9a55','devils-advocate':'#c0556f','sequential-thinking':'#557a9a','systems-thinking':'#6f9a55','socratic-debate':'#9a5577','expert-persona':'#b0903a','plain-cot':'#9a9a9a','self-critique':'#8a6a9a','gsd-critical-thinking':'#3a8f6a','kdense-sci-critical':'#6a4f9a','conducty-dialectic':'#9a7755','argumentation-framework':'#557799',baseline:'#8a8a8a'};
const SHORT={ours:'ours','cc-thinking':'cc-thinking','thinking-partner':'thinking-partner','skills-for-humanity':'skills-for-humanity',balanced:'balanced','cyperx84-mm':'cyperx84','first-principles':'first-principles','devils-advocate':'devils-advocate','sequential-thinking':'sequential','systems-thinking':'systems','socratic-debate':'socratic-debate','expert-persona':'expert-persona','plain-cot':'plain CoT','self-critique':'self-critique','gsd-critical-thinking':'gsd-ct','kdense-sci-critical':'kdense-sci','conducty-dialectic':'conducty','argumentation-framework':'argument-fw',baseline:'baseline'};
const jq=c=>JQ.perArm[c].composite, obj=c=>OBJ.perArm[c].objective_composite;
const cost={}; for(const c of CONDS){const t=TOK.per_arm[c];cost[c]={operate:t.operate,load:TOK.load[c].realistic,usd:t.in*PIN+t.out*POUT};}

// shared editorial frame
function frame(W,H,kicker,title,subtitle,body){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="Georgia,'Times New Roman',serif">
<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfaf7"/><stop offset="1" stop-color="#f3efe8"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect x="0" y="0" width="${W}" height="9" fill="#b4452f"/>
<text x="56" y="62" font-size="15" letter-spacing="3" fill="#b4452f" font-family="Helvetica,Arial,sans-serif" font-weight="700">${kicker}</text>
<text x="56" y="104" font-size="34" fill="#1a1a1a" font-weight="700" font-family="Georgia,serif">${title}</text>
<text x="56" y="134" font-size="17" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">${subtitle}</text>
${body}
<text x="56" y="${H-26}" font-size="12.5" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">Tenzor Skill Intelligence Index · 19 conditions · reasoning round · n=1 · judged by 18 blind passes · Claude Fable 5 ($10/$50 per M tok) · cost via tiktoken cl100k proxy</text>
</svg>`;
}
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

// ---------- BANNER 1: quality-vs-cost frontier (hero) ----------
(function(){
  const W=1200,H=630, padL=110,padR=300,padT=180,padB=92;
  const xs=CONDS.map(c=>cost[c].operate), ys=CONDS.map(c=>jq(c));
  const x0=Math.max(Math.min(...xs)*0.8,400),x1=Math.max(...xs)*1.08, ymin=Math.min(...ys)-0.25,ymax=Math.max(...ys)+0.25;
  const X=v=>padL+(W-padL-padR)*(Math.log10(v)-Math.log10(x0))/(Math.log10(x1)-Math.log10(x0));
  const Y=v=>(H-padB)-(H-padB-padT)*(v-ymin)/(ymax-ymin);
  let b='';
  for(let g=0;g<=4;g++){const yv=ymin+(ymax-ymin)*g/4;const yy=Y(yv);b+=`<line x1="${padL}" y1="${yy}" x2="${W-padR}" y2="${yy}" stroke="#e6e1d8"/><text x="${padL-12}" y="${yy+4}" text-anchor="end" font-size="13" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">${yv.toFixed(1)}</text>`;}
  [x0,1000,5000,15000].forEach(v=>{if(v<x0||v>x1)return;b+=`<text x="${X(v)}" y="${H-padB+24}" text-anchor="middle" font-size="13" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">${v>=1000?(v/1000)+'k':v}</text>`;});
  b+=`<text x="${(padL+W-padR)/2}" y="${H-padB+52}" text-anchor="middle" font-size="14" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">cost to operate — tokens per answer (log scale) →</text>`;
  b+=`<text x="40" y="${(padT+H-padB)/2}" text-anchor="middle" font-size="14" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif" transform="rotate(-90 40 ${(padT+H-padB)/2})">judged quality (0–10) →</text>`;
  // frontier
  const pts=CONDS.map(c=>({c,x:cost[c].operate,y:jq(c)}));
  const sorted=pts.slice().sort((a,b)=>a.x-b.x);const fr=[];let by=-1e9;for(const p of sorted){if(p.y>=by){fr.push(p);by=p.y;}}
  for(let i=0;i<fr.length-1;i++)b+=`<line x1="${X(fr[i].x)}" y1="${Y(fr[i].y)}" x2="${X(fr[i+1].x)}" y2="${Y(fr[i+1].y)}" stroke="#b4452f" stroke-width="2" stroke-dasharray="6 4" opacity="0.7"/>`;
  const onfr=new Set(fr.map(p=>p.c));
  for(const p of pts){const r=8+Math.sqrt(cost[p.c].load)/26;b+=`<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="${r}" fill="${COL[p.c]}" fill-opacity="${onfr.has(p.c)?0.92:0.4}" stroke="#fff" stroke-width="2"/>`;}
  // label key points: self-critique, ours, balanced, cc-thinking, baseline, first-principles
  const lab={'kdense-sci-critical':[6,-13],'self-critique':[8,-13],'ours':[14,-2],'balanced':[-10,-15],'cc-thinking':[10,14],'first-principles':[8,16],'baseline':[-6,18]};
  for(const c of Object.keys(lab)){const[dx,dy]=lab[c];b+=`<text x="${X(cost[c].operate)+dx}" y="${Y(jq(c))+dy}" font-size="13.5" fill="#1a1a1a" font-weight="700" font-family="Helvetica,Arial,sans-serif">${SHORT[c]}</text>`;}
  // legend / annotation panel right
  const lx=W-padR+24;
  b+=`<text x="${lx}" y="${padT+6}" font-size="14" fill="#1a1a1a" font-weight="700" font-family="Helvetica,Arial,sans-serif">Up-and-left wins</text>`;
  b+=`<text x="${lx}" y="${padT+30}" font-size="13" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif"><tspan x="${lx}" dy="0">more quality,</tspan><tspan x="${lx}" dy="18">less cost.</tspan></text>`;
  b+=`<line x1="${lx}" y1="${padT+64}" x2="${lx+30}" y2="${padT+64}" stroke="#b4452f" stroke-width="2" stroke-dasharray="6 4"/><text x="${lx+38}" y="${padT+68}" font-size="12.5" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">efficient frontier</text>`;
  b+=`<text x="${lx}" y="${padT+104}" font-size="13" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">bubble size =</text><text x="${lx}" y="${padT+122}" font-size="13" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">context-tax load</text>`;
  b+=`<rect x="${lx}" y="${padT+150}" width="${padR-48}" height="118" rx="8" fill="#fff" stroke="#e6e1d8"/>`;
  b+=`<text x="${lx+14}" y="${padT+176}" font-size="13.5" fill="#8a6a9a" font-weight="700" font-family="Helvetica,Arial,sans-serif">self-critique wins</text>`;
  b+=`<text x="${lx+14}" y="${padT+198}" font-size="12.5" fill="#444" font-family="Helvetica,Arial,sans-serif"><tspan x="${lx+14}" dy="0">A free one-line prompt</tspan><tspan x="${lx+14}" dy="16">near-top quality at</tspan><tspan x="${lx+14}" dy="16">~1/20th of ours' cost.</tspan></text>`;
  b+=`<text x="${lx+14}" y="${padT+260}" font-size="12.5" fill="#2f7d4f" font-weight="700" font-family="Helvetica,Arial,sans-serif">ours: top-cluster, costly</text>`;
  fs.writeFileSync(out+'/banner_frontier.svg', frame(W,H,'QUALITY VS. COST','A free prompt beats the skills on cost-adjusted quality','19 critical-thinking conditions for Claude, judged blind and priced in tokens',b));
})();

// ---------- BANNER 2: judged-quality leaderboard ----------
(function(){
  const W=1200, rowH=40, top=170, by=CONDS.slice().sort((a,b)=>jq(b)-jq(a)); const H=top+by.length*rowH+70;
  const max=Math.max(...by.map(jq)); const x0=420, barMax=W-x0-150;
  let b='';
  by.forEach((c,i)=>{const y=top+i*rowH; const bw=barMax*(jq(c)/10);
    b+=`<text x="68" y="${y+rowH/2+5}" font-size="15" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif" font-weight="700">${i+1}</text>`;
    b+=`<text x="100" y="${y+rowH/2+5}" font-size="16" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif"${c==='ours'?' font-weight="700"':''}>${SHORT[c]}</text>`;
    b+=`<rect x="${x0}" y="${y+6}" width="${bw}" height="${rowH-14}" rx="4" fill="${COL[c]}" fill-opacity="${c==='ours'?1:0.82}"/>`;
    b+=`<text x="${x0+bw+10}" y="${y+rowH/2+5}" font-size="14.5" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif" font-weight="700">${jq(c).toFixed(2)}</text>`;
    const tag=c==='ours'?'home team':(SHORT[c].length&&['self-critique','plain CoT','expert-persona','baseline'].includes(SHORT[c])?'free prompt':'');
    if(tag)b+=`<text x="270" y="${y+rowH/2+5}" font-size="12" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif" font-style="italic">${tag}</text>`;
  });
  b+=`<text x="68" y="${H-44}" font-size="13.5" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">Mean of 5 reasoning dimensions (rigor · calibration · bias-awareness · depth · usefulness). Field is tight (6.9–8.3, judge SD 0.3–0.9): the top cluster is a near-tie.</text>`;
  fs.writeFileSync(out+'/banner_leaderboard.svg', frame(W,H,'JUDGED REASONING QUALITY','The top is a near-tie; ours is in it','ours #3 of 19; a new entrant (kdense) edges the top — and leads the field on objective rigor markers',b));
})();

// ---------- BANNER 3: objective rigor (ours' real edge) ----------
(function(){
  const W=1200, rowH=40, top=170, by=CONDS.slice().sort((a,b)=>obj(b)-obj(a)); const H=top+by.length*rowH+70;
  const x0=420, barMax=W-x0-150, max=Math.max(...by.map(obj));
  let b='';
  by.forEach((c,i)=>{const y=top+i*rowH; const bw=barMax*(obj(c)/max);
    b+=`<text x="68" y="${y+rowH/2+5}" font-size="15" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif" font-weight="700">${i+1}</text>`;
    b+=`<text x="100" y="${y+rowH/2+5}" font-size="16" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif"${c==='ours'?' font-weight="700"':''}>${SHORT[c]}</text>`;
    b+=`<rect x="${x0}" y="${y+6}" width="${bw}" height="${rowH-14}" rx="4" fill="${COL[c]}" fill-opacity="${c==='ours'?1:0.82}"/>`;
    b+=`<text x="${x0+bw+10}" y="${y+rowH/2+5}" font-size="14.5" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif" font-weight="700">${obj(c).toFixed(2)}</text>`;
  });
  b+=`<text x="68" y="${H-44}" font-size="13.5" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">Deterministic, length-normalized: does the answer quantify, name its biases, and state a falsifier? ours leads — its falsifier score (5.0) is double the next best.</text>`;
  fs.writeFileSync(out+'/banner_objective.svg', frame(W,H,'OBJECTIVE RIGOR MARKERS','Where ours leads the whole field','The non-subjective scorecard: quantification, bias-naming, falsifiers, actionability',b));
})();

console.log('wrote 3 banners to '+out);
for(const fn of ['banner_frontier.svg','banner_leaderboard.svg','banner_objective.svg']){const s=fs.statSync(out+'/'+fn);console.log('  '+fn+' '+Math.round(s.size/1024)+'KB');}
