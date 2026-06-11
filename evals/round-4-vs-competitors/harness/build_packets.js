// Build per-problem blind packets with balanced slot rotation + keymap, for the canonical protocol.
const fs=require('fs');
const dir='D:/Claude/skill-audit/canonical-eval';
const res=JSON.parse(fs.readFileSync(dir+'/responses.json','utf8'));
fs.mkdirSync(dir+'/packets',{recursive:true});
const ARMS=['ours','cc-thinking','wanikua','baseline'];
const SLOTS=['A','B','C','D'];
const PROBLEM_TEXT={
  reasoning:{
    0:`A new observational study (n=8,000) reports that people who drink two cups of coffee a day have a 20% lower rate of depression than non-coffee-drinkers (p<0.01). A wellness brand is citing it to sell a coffee-extract supplement. Should you believe that coffee reduces depression? Reason it through and give a verdict.`,
    1:`Estimate two things, showing your reasoning and giving a calibrated number with a confidence range for each. (a) How many piano tuners work in Chicago today? (b) What is the probability that a randomly chosen current Fortune 500 CEO holds an undergraduate degree in engineering or a hard science rather than business or economics?`,
    2:`Critique this argument and find every flaw: 'Remote work is clearly destroying our productivity. Ever since the company went fully remote in 2020, our revenue per employee has fallen 12%. Competitors who stayed in-office grew. Therefore we must mandate a full five-day return to office to restore productivity.'`,
    3:`A hospital emergency department keeps running over capacity despite hiring more nurses every year. Each new hire relieves the pressure for a few months, then wait times climb back. Leadership blames 'lazy staff' and 'a bad flu season.' Diagnose what is really going on, and propose the highest-leverage fix.`,
    4:`You run a 6-person startup with 9 months of cash runway. A large enterprise offers a $400k contract that would consume your entire team for 5 months building a custom feature that only that customer wants. Taking it extends runway but freezes work on your core product and roadmap. Reason through whether to take the contract.`,
    5:`A mid-sized city's downtown is dying: shops closing, foot traffic collapsed, and the obvious fixes (more parking, lower rents, a summer festival) have all been tried and failed. Generate genuinely non-obvious reframings of the problem and propose three unconventional options worth testing, with the reasoning behind each.`,
  },
  creativity:{
    0:`Reinvent the chair in five genuinely different ways. Each version should challenge a different assumption about what a chair is or what sitting is for. Do not give five styles of the same chair.`,
    1:`Invent five sports that could only exist in zero gravity, each built around a different core mechanic that gravity normally provides on Earth. Make each genuinely playable.`,
    2:`Propose five fundamentally different business models for a company whose only product is silence. Each model should monetize silence through a different mechanism and serve a different human need.`,
    3:`Design five completely different ways to represent the passage of a single day, without using a clock, digits, or a calendar. Each should rely on a different sense or medium.`,
    4:`Imagine five radically different concepts for a museum devoted to failure. Each concept should embody a different theory of what a visitor should feel or learn.`,
    5:`Reimagine the school report card in five genuinely different forms, each based on a different philosophy of what is worth measuring and who the audience really is.`,
  }
};
const DIMS={
  reasoning:[['rigor','logical soundness, correct use of evidence and statistics, no fallacies'],['calibration','explicit, well-justified confidence/probabilities; neither overconfident nor vaguely hedged'],['bias_awareness','names and guards against cognitive biases, including its own traps'],['depth','goes beyond the obvious: mechanisms, alternatives, second-order effects'],['usefulness','actionable, with a clear verdict/recommendation the asker can use']],
  creativity:[['originality','genuinely novel, non-obvious ideas'],['diversity','the five differ from each other along different conceptual axes, not flavors of one idea'],['boldness','takes real conceptual risks rather than safe variations'],['craft','vivid and concrete; each idea is made to live on the page'],['generativity','opens further ideas; fertile rather than closed']],
};

const keymap={reasoning:{},creativity:{}};
for(const round of ['reasoning','creativity']){
  for(let id=0; id<6; id++){
    // rotation: shift arms by id
    const slotArm={};
    for(let s=0;s<4;s++){ slotArm[SLOTS[s]] = ARMS[(s - id + 400) % 4]; }
    keymap[round][id]=slotArm;
    const dims=DIMS[round];
    let pkt=`You are an impartial expert judge on an evaluation panel. You are shown one PROBLEM and four anonymous responses in slots A, B, C, D. Judge ONLY the text; you do not know who wrote what.\n\n`;
    pkt+=`Score EVERY slot (A, B, C, D) from 0 to 10 on each of these five dimensions:\n`;
    dims.forEach(([k,d])=>pkt+=`- ${k}: ${d}\n`);
    pkt+=`\nThen produce a full ranking of all four slots best-to-worst, name the single best slot, and write a concise justification (3-6 sentences) explaining the ranking. Use the full 0-10 range and discriminate; do not cluster scores. Output ONLY machine-parseable JSON matching the schema.\n\n`;
    pkt+=`==================== PROBLEM (${round} #${id}) ====================\n${PROBLEM_TEXT[round][id]}\n\n`;
    for(const s of SLOTS){
      const arm=slotArm[s];
      const r=res.find(x=>x.round===round&&x.problemId===id&&x.arm===arm);
      pkt+=`-------------------- Slot ${s} --------------------\n${(r&&r.answer)||'[NO ANSWER]'}\n\n`;
    }
    fs.writeFileSync(`${dir}/packets/${round}-${id}.txt`,pkt);
  }
}
fs.writeFileSync(dir+'/keymap_canonical.json',JSON.stringify(keymap,null,2));
console.log('Built 12 packets + keymap. Rotation check (slot counts per arm per round):');
for(const round of ['reasoning','creativity']){
  const cnt={};ARMS.forEach(a=>cnt[a]={A:0,B:0,C:0,D:0});
  for(let id=0;id<6;id++)for(const s of SLOTS)cnt[keymap[round][id][s]][s]++;
  console.log(' '+round+':');
  for(const a of ARMS)console.log('   '+a.padEnd(12)+SLOTS.map(s=>s+'='+cnt[a][s]).join(' '));
}
