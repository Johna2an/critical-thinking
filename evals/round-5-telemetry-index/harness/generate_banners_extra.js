// Two more editorial banners: cost-to-operate, and value (quality per 1k tokens). Same style as generate_banners.js.
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval';
const TOK=JSON.parse(fs.readFileSync(dir+'/expanded/token_expanded.json','utf8'));
const OBJ=JSON.parse(fs.readFileSync(dir+'/expanded/objective_expanded.json','utf8'));
const JQ=JSON.parse(fs.readFileSync(dir+'/expanded/judge_quality_15.json','utf8'));
const out=dir+'/expanded/banners';
const CONDS=Object.keys(OBJ.perArm);
const PIN=10/1e6,POUT=50/1e6;
const COL={ours:'#2f7d4f','cc-thinking':'#b4452f','thinking-partner':'#2f5d8a','skills-for-humanity':'#7a4f9a',balanced:'#1f8a8a','cyperx84-mm':'#c77d20','first-principles':'#9a9a55','devils-advocate':'#c0556f','sequential-thinking':'#557a9a','systems-thinking':'#6f9a55','socratic-debate':'#9a5577','expert-persona':'#b0903a','plain-cot':'#9a9a9a','self-critique':'#8a6a9a',baseline:'#8a8a8a'};
const SHORT={ours:'ours','cc-thinking':'cc-thinking','thinking-partner':'thinking-partner','skills-for-humanity':'skills-for-humanity',balanced:'balanced','cyperx84-mm':'cyperx84','first-principles':'first-principles','devils-advocate':'devils-advocate','sequential-thinking':'sequential','systems-thinking':'systems','socratic-debate':'socratic-debate','expert-persona':'expert-persona','plain-cot':'plain CoT','self-critique':'self-critique',baseline:'baseline'};
const jq=c=>JQ.perArm[c].composite;
const cost={}; for(const c of CONDS){const t=TOK.per_arm[c];cost[c]={in:t.in,out:t.out,operate:t.operate,load:TOK.load[c].realistic,usd:t.in*PIN+t.out*POUT};}
function frame(W,H,kicker,title,subtitle,body){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="Georgia,'Times New Roman',serif">
<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfaf7"/><stop offset="1" stop-color="#f3efe8"/></linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#bg)"/><rect x="0" y="0" width="${W}" height="9" fill="#b4452f"/>
<text x="56" y="62" font-size="15" letter-spacing="3" fill="#b4452f" font-family="Helvetica,Arial,sans-serif" font-weight="700">${kicker}</text>
<text x="56" y="104" font-size="34" fill="#1a1a1a" font-weight="700">${title}</text>
<text x="56" y="134" font-size="17" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">${subtitle}</text>
${body}
<text x="56" y="${H-26}" font-size="12.5" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">Tenzor Skill Intelligence Index · 15 conditions · reasoning round · n=1 · Claude Fable 5 ($10/$50 per M tok) · cost via tiktoken cl100k proxy</text>
</svg>`;
}

// BANNER 4: cost to operate (stacked load + output)
(function(){
  const W=1200,rowH=40,top=170,by=CONDS.slice().sort((a,b)=>cost[b].operate-cost[a].operate);const H=top+by.length*rowH+70;
  const x0=200, barMax=W-x0-200, max=Math.max(...by.map(c=>cost[c].operate))*1.02;
  let b='';
  by.forEach((c,i)=>{const y=top+i*rowH;const lw=barMax*(cost[c].in/max),ow=barMax*(cost[c].out/max);
    b+=`<text x="${x0-12}" y="${y+rowH/2+5}" text-anchor="end" font-size="15" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif"${c==='ours'?' font-weight="700"':''}>${SHORT[c]}</text>`;
    b+=`<rect x="${x0}" y="${y+7}" width="${Math.max(lw,0.5)}" height="${rowH-16}" fill="${COL[c]}"><title>input load ${cost[c].in}</title></rect>`;
    b+=`<rect x="${x0+lw}" y="${y+7}" width="${Math.max(ow,0.5)}" height="${rowH-16}" fill="#d9cdbb"><title>output ${cost[c].out}</title></rect>`;
    b+=`<text x="${x0+lw+ow+8}" y="${y+rowH/2+5}" font-size="13.5" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif" font-weight="700">${cost[c].operate.toLocaleString()} tok · $${cost[c].usd.toFixed(3)}</text>`;
  });
  // legend
  b+=`<rect x="${x0}" y="${top-34}" width="14" height="14" fill="#8a8a8a"/><text x="${x0+20}" y="${top-22}" font-size="13" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">skill load (input)</text>`;
  b+=`<rect x="${x0+150}" y="${top-34}" width="14" height="14" fill="#d9cdbb"/><text x="${x0+170}" y="${top-22}" font-size="13" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">output</text>`;
  b+=`<text x="56" y="${H-44}" font-size="13.5" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">Every answer is ~370 words, so output is near-constant. The whole spread is the context tax: tokens a skill loads before it answers. ours loads the most.</text>`;
  fs.writeFileSync(out+'/banner_cost.svg', frame(W,H,'COST TO OPERATE','The context tax, not the answer, is the cost','Tokens to load the skill plus tokens to write the answer, per question',b));
})();

// BANNER 5: value (judged quality per 1k operate tokens)
(function(){
  const W=1200,rowH=40,top=170,val=c=>jq(c)/(cost[c].operate/1000);const by=CONDS.slice().sort((a,b)=>val(b)-val(a));const H=top+by.length*rowH+70;
  const x0=200, barMax=W-x0-160, max=Math.max(...by.map(val))*1.04;
  let b='';
  by.forEach((c,i)=>{const y=top+i*rowH;const bw=barMax*(val(c)/max);
    b+=`<text x="${x0-12}" y="${y+rowH/2+5}" text-anchor="end" font-size="15" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif"${c==='ours'?' font-weight="700"':''}>${SHORT[c]}</text>`;
    b+=`<rect x="${x0}" y="${y+7}" width="${Math.max(bw,1)}" height="${rowH-16}" rx="4" fill="${COL[c]}" fill-opacity="${c==='ours'?1:0.85}"/>`;
    b+=`<text x="${x0+bw+8}" y="${y+rowH/2+5}" font-size="13.5" fill="#1a1a1a" font-family="Helvetica,Arial,sans-serif" font-weight="700">${val(c).toFixed(1)}</text>`;
  });
  b+=`<text x="56" y="${H-44}" font-size="13.5" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">Judged reasoning quality divided by tokens spent. The free prompt arms and the featherweight skills give the most quality per token; ours, carrying the heaviest load, lands near the bottom.</text>`;
  fs.writeFileSync(out+'/banner_value.svg', frame(W,H,'VALUE','The cheapest options give the most quality per token','Judged quality (0-10) per 1,000 tokens spent to operate',b));
})();
console.log('wrote banner_cost.svg + banner_value.svg');
