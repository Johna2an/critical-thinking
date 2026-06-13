// Build blinded per-problem packets (15 answers each, labels A-O) + keymap, for independent rubric scoring.
const fs=require('fs');
const dir='D:/Claude/skill-audit/telemetry-eval/expanded';
const ans=JSON.parse(fs.readFileSync(dir+'/reasoning_complete.json','utf8'));
fs.mkdirSync(dir+'/judge15',{recursive:true});
const clean=s=>(s||'').replace(/<\/?(answer|invoke|parameter|antml)[^>]*>/gi,'').replace(/&lt;\/?(answer|invoke|parameter)[^&]*&gt;/gi,'').replace(/(?:source skill file|relevant files applied|relevant files)[^\n]*/gi,'').trim();
const PROBLEMS={
 0:`A new observational study (n=8,000) reports that people who drink two cups of coffee a day have a 20% lower rate of depression than non-coffee-drinkers (p<0.01). A wellness brand is citing it to sell a coffee-extract supplement. Should you believe that coffee reduces depression?`,
 1:`Estimate, with calibrated numbers and confidence ranges: (a) how many piano tuners work in Chicago today? (b) the probability that a randomly chosen current Fortune 500 CEO holds an undergraduate degree in engineering or a hard science rather than business or economics?`,
 2:`Critique this argument and find every flaw: "Remote work is destroying our productivity. Since going fully remote in 2020, revenue per employee fell 12%. Competitors who stayed in-office grew. Therefore we must mandate a full five-day return to office."`,
 3:`A hospital ED keeps running over capacity despite hiring more nurses every year; each hire relieves pressure for a few months then wait times climb back. Leadership blames lazy staff and a bad flu season. Diagnose what is really going on and propose the highest-leverage fix.`,
 4:`You run a 6-person startup with 9 months of runway. A $400k enterprise contract would consume your whole team for 5 months on a custom feature only that customer wants, extending runway but freezing your core product. Reason through whether to take it.`,
 5:`A mid-sized city downtown is dying; the obvious fixes (more parking, lower rents, a summer festival) have all failed. Generate genuinely non-obvious reframings and propose three unconventional options worth testing, with reasoning.`,
};
const DIMS=['rigor','calibration','bias_awareness','depth','usefulness'];
const LET='ABCDEFGHIJKLMNO'.split('');
const conds=[...new Set(ans.map(a=>a.condition))].sort();  // 15, fixed order
const keymap={};
for(let pid=0; pid<6; pid++){
  // deterministic rotation by problem id => label assignment varies per problem (blinding + reproducible)
  const order=conds.map((_,i)=>conds[(i+pid*4)%conds.length]);
  const slotByLabel={}; order.forEach((c,i)=>slotByLabel[LET[i]]=c);
  keymap[pid]=slotByLabel;
  let pkt=`You are an impartial expert judge scoring answers to a hard reasoning problem. You see ${conds.length} anonymous answers in slots A-O. Judge ONLY the text.\n\nScore EVERY slot (A through O) from 0 to 10 on each dimension:\n`;
  pkt+=`- rigor: logical soundness, correct use of evidence/statistics, no fallacies\n- calibration: explicit, well-justified confidence; neither overconfident nor vaguely hedged\n- bias_awareness: names and guards against cognitive biases, including its own\n- depth: beyond the obvious; mechanisms, alternatives, second-order effects\n- usefulness: actionable, clear verdict the asker can use\n\nUse the FULL 0-10 range and discriminate; do not cluster scores. Output ONLY machine-parseable JSON: {"scores":{"A":{...5 dims},...,"O":{...}}}.\n\n`;
  pkt+=`==================== PROBLEM (reasoning #${pid}) ====================\n${PROBLEMS[pid]}\n\n`;
  for(const L of LET){ const c=slotByLabel[L]; const r=ans.find(x=>x.condition===c&&x.problemId===pid); pkt+=`-------------------- Slot ${L} --------------------\n${clean(r&&r.answer)||'[NO ANSWER]'}\n\n`; }
  fs.writeFileSync(`${dir}/judge15/r${pid}.txt`, pkt);
}
fs.writeFileSync(dir+'/judge15/keymap15.json', JSON.stringify(keymap,null,2));
// rotation balance check
const cnt={}; conds.forEach(c=>cnt[c]={});
for(let pid=0;pid<6;pid++)for(const L of LET){const c=keymap[pid][L];cnt[c][L]=(cnt[c][L]||0)+1;}
console.log('built 6 packets (15 answers each) + keymap15.json');
console.log('blinding: each condition appears under '+Object.keys(cnt['ours']).length+' distinct labels across 6 problems (higher=better blinded)');
