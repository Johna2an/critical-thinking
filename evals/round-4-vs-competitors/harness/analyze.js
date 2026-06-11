const fs=require('fs');
const dir='D:/Claude/skill-audit/canonical-eval';
const keymap=JSON.parse(fs.readFileSync(dir+'/keymap_canonical.json','utf8'));
const judges=JSON.parse(fs.readFileSync(dir+'/judges_canonical.json','utf8'));
const ARMS=['ours','cc-thinking','wanikua','baseline'];
const SLOTS=['A','B','C','D'];
const DIMS={reasoning:['rigor','calibration','bias_awareness','depth','usefulness'],creativity:['originality','diversity','boldness','craft','generativity']};
const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:NaN;const fmt=x=>x.toFixed(2);

// position bias: mean of slot dim-scores by letter, ignoring arm
for(const round of ['reasoning','creativity']){
  const byslot={A:[],B:[],C:[],D:[]};
  for(const J of judges){if(J.round!==round||!J.data)continue;for(const s of SLOTS){const sc=J.data.scores[s];if(!sc)continue;for(const d of DIMS[round])byslot[s].push(Number(sc[d]));}}
  console.log(`POSITION BIAS [${round}]: `+SLOTS.map(s=>s+'='+fmt(mean(byslot[s]))).join(' ')+`  spread=${fmt(Math.max(...SLOTS.map(s=>mean(byslot[s])))-Math.min(...SLOTS.map(s=>mean(byslot[s]))))}`);
}
// per-problem winner (arm) reasoning round
console.log('\nPER-PROBLEM BEST PICKS (arm that got "best" votes):');
for(const round of ['reasoning','creativity']){
  console.log(' '+round+':');
  for(let id=0;id<6;id++){
    const tally={};ARMS.forEach(a=>tally[a]=0);
    for(const J of judges){if(J.round!==round||J.problemId!==id||!J.data)continue;const arm=keymap[round][id][J.data.best];if(arm)tally[arm]++;}
    console.log(`   #${id}: `+ARMS.map(a=>a+'='+tally[a]).join(' '));
  }
}
// sample judge reasoning, de-anonymized, reasoning round (one quote per arm where it was praised/criticized)
console.log('\nSAMPLE DE-ANON JUDGE QUOTES (reasoning):');
for(const round of ['reasoning']){
  for(const J of judges.filter(j=>j.round===round).slice(0,4)){
    const km=keymap[round][J.problemId];
    const map=SLOTS.map(s=>s+'='+km[s]).join(' ');
    console.log(`  [${round} P${J.problemId} judge${J.judge}] slots(${map}) best=${J.data.best}(${km[J.data.best]})`);
  }
}
