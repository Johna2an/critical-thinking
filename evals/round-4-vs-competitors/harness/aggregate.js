// Aggregate canonical judge results into the repo's report format.
const fs=require('fs');
const dir='D:/Claude/skill-audit/canonical-eval';
const keymap=JSON.parse(fs.readFileSync(dir+'/keymap_canonical.json','utf8'));
const judges=JSON.parse(fs.readFileSync(dir+'/judges_canonical.json','utf8')); // [{round,problemId,judge,data}]
const ARMS=['ours','cc-thinking','wanikua','baseline'];
const DIMS={reasoning:['rigor','calibration','bias_awareness','depth','usefulness'],
            creativity:['originality','diversity','boldness','craft','generativity']};
const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:NaN;
const fmt=x=>Number.isNaN(x)?'n/a':x.toFixed(2);

function aggregateRound(round){
  const dims=DIMS[round];
  // per arm: dim arrays, overall array, wins, ranks
  const A={};ARMS.forEach(a=>A[a]={dims:{},overall:[],wins:0,ranks:[]});
  ARMS.forEach(a=>dims.forEach(d=>A[a].dims[d]=[]));
  let passes=0;
  for(const J of judges){
    if(J.round!==round||!J.data||!J.data.scores)continue;
    passes++;
    const km=keymap[round][J.problemId];
    // scores
    for(const slot of ['A','B','C','D']){
      const arm=km[slot];const sc=J.data.scores[slot];if(!sc)continue;
      for(const d of dims){const v=Number(sc[d]);if(!Number.isNaN(v)){A[arm].dims[d].push(v);A[arm].overall.push(v);}}
    }
    // best
    if(J.data.best&&km[J.data.best])A[km[J.data.best]].wins++;
    // ranking -> rank position per arm
    if(Array.isArray(J.data.ranking)){
      J.data.ranking.forEach((slot,idx)=>{const arm=km[slot];if(arm)A[arm].ranks.push(idx+1);});
    }
  }
  return {dims,A,passes};
}

let out='# Canonical eval replication — competitors run through OUR GitHub benchmark\n\n';
out+='Same problems, same 5-dimension rubric, same 3-blind-judges-per-problem protocol as `evals/` in the critical-thinking repo. ';
out+='Differences from the original published run: one current model generates all arms (so it is arms-equal), four arms instead of three (the two rival skills replace the single GPT arm), competitor skills get full progressive disclosure, and slots are balance-rotated.\n';

const tables={};
for(const round of ['reasoning','creativity']){
  const {dims,A,passes}=aggregateRound(round);
  // rank arms by overall
  const rows=ARMS.map(a=>({arm:a,overall:mean(A[a].overall),wins:A[a].wins,avgrank:mean(A[a].ranks),dimMeans:dims.map(d=>mean(A[a].dims[d]))}))
    .sort((x,y)=>y.overall-x.overall);
  tables[round]=rows;
  out+=`\n## Round: ${round}  (${passes} judge passes, 6 problems x 3 judges)\n\n`;
  out+='| Arm | Overall | Wins | Avg rank | '+dims.join(' | ')+' |\n';
  out+='|---|---|---|---|'+dims.map(()=>'---').join('|')+'|\n';
  for(const r of rows){
    const star=r.arm==='ours'?'**':'';
    out+=`| ${star}${r.arm}${star} | ${star}${fmt(r.overall)}${star} | ${r.wins}/${passes} | ${fmt(r.avgrank)} | `+r.dimMeans.map(fmt).join(' | ')+' |\n';
  }
}

// combined overall (both rounds)
out+='\n## Combined (both rounds, all 360 dimension-scores per arm)\n\n';
const comb={};ARMS.forEach(a=>comb[a]=[]);
for(const round of ['reasoning','creativity']){const {A}=aggregateRound(round);ARMS.forEach(a=>comb[a].push(...A[a].overall));}
const combRows=ARMS.map(a=>({arm:a,overall:mean(comb[a])})).sort((x,y)=>y.overall-x.overall);
out+='| Arm | Overall (both rounds) |\n|---|---|\n';
for(const r of combRows)out+=`| ${r.arm==='ours'?'**'+r.arm+'**':r.arm} | ${r.arm==='ours'?'**'+fmt(r.overall)+'**':fmt(r.overall)} |\n`;

// context vs original published numbers
out+='\n## For context: original published Round-1 numbers (skill v1, Claude 4.8, 3-arm)\n\n';
out+='Skill 8.99 (18/18 wins) > base 7.92 > GPT-5.5 7.30. Not directly comparable (different model, 3 arms, v1), shown only to anchor the gap shape.\n';

fs.writeFileSync(dir+'/RESULTS_canonical.md',out);
fs.writeFileSync(dir+'/results_canonical.json',JSON.stringify({tables,combRows},null,2));
console.log(out);
