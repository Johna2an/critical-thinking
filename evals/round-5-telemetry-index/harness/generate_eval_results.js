// Regenerate assets/eval-results.svg as an honest 5-round summary (replaces the stale 3-round chart).
const fs=require('fs');
const OUT='D:/Claude/critical-thinking/assets/eval-results.svg';
const rounds=[
 {n:'Round 1 · Reasoning', score:8.99, note:'vs baseline + GPT-5.5. First in 18/18 passes.', win:true},
 {n:'Round 2 · Creativity', score:8.48, note:'vs baseline + GPT-5.5. 11/18 picks; lost 2 briefs.', win:true},
 {n:'Round 3 · v1 vs v2', score:8.87, note:'v1 8.91 vs v2 8.87. A tie at the top.', win:null},
 {n:'Round 4 · vs rival skills', score:8.70, note:'vs 2 rival skills + baseline. First on reasoning.', win:true},
 {n:'Round 5 · full field + cost', score:8.03, note:'vs 18 rivals incl. free prompts. #3 of 19, top-cluster near-tie.', win:false},
];
const W=1000, padL=250, padR=150, top=150, rowH=52, gap=14, H=top+rounds.length*(rowH+gap)+70;
const X=v=>padL+(W-padL-padR)*(v/10);
let b='';
// x gridlines at 7,8,9,10
for(const g of [7,8,9,10]){const x=X(g);b+=`<line x1="${x}" y1="${top-14}" x2="${x}" y2="${top+rounds.length*(rowH+gap)-gap}" stroke="#ece8e1"/><text x="${x}" y="${top-20}" text-anchor="middle" font-size="12" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">${g}</text>`;}
rounds.forEach((r,i)=>{
  const y=top+i*(rowH+gap);
  const x0=X(7), bw=X(r.score)-x0; // bars start at 7 for visual contrast (scale noted)
  const col=r.win===true?'#2f7d4f':(r.win===false?'#b4452f':'#9a8f80');
  b+=`<text x="${padL-16}" y="${y+20}" text-anchor="end" font-size="15" fill="#1a1a1a" font-weight="700" font-family="Helvetica,Arial,sans-serif">${r.n}</text>`;
  b+=`<text x="${padL-16}" y="${y+39}" text-anchor="end" font-size="12" fill="#7a7167" font-family="Helvetica,Arial,sans-serif">${r.note}</text>`;
  b+=`<rect x="${x0}" y="${y+4}" width="${Math.max(bw,2)}" height="${rowH-22}" rx="4" fill="${col}" fill-opacity="0.9"/>`;
  b+=`<text x="${X(r.score)+8}" y="${y+22}" font-size="16" fill="#1a1a1a" font-weight="700" font-family="Helvetica,Arial,sans-serif">${r.score.toFixed(2)}</text>`;
});
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="Georgia,serif">
<rect width="${W}" height="${H}" fill="#fbfaf7"/>
<rect x="0" y="0" width="${W}" height="8" fill="#b4452f"/>
<text x="40" y="56" font-size="13" letter-spacing="2.5" fill="#b4452f" font-weight="700" font-family="Helvetica,Arial,sans-serif">FIVE BLIND-JUDGED ROUNDS</text>
<text x="40" y="92" font-size="27" fill="#1a1a1a" font-weight="700">The score held near 8 to 9. The field is what changed.</text>
<text x="40" y="118" font-size="15" fill="#6b6b6b" font-family="Helvetica,Arial,sans-serif">Ours' blind-judged score each round (bars scaled from 7 for contrast), with the competitor field it faced.</text>
${b}
<text x="40" y="${H-24}" font-size="12" fill="#9a8f80" font-family="Helvetica,Arial,sans-serif">Green: ours placed first. Grey: a tie. Terracotta: top-cluster but not first (the field now includes other skills and free prompt techniques). n=1 per cell.</text>
</svg>`;
fs.writeFileSync(OUT,svg);
console.log('wrote '+OUT+' ('+Math.round(svg.length/1024)+'KB), '+rounds.length+' rounds, svg balanced='+((svg.match(/<svg/g)||[]).length===(svg.match(/<\/svg>/g)||[]).length)+' NaN='+(svg.match(/NaN|undefined/g)||[]).length);
