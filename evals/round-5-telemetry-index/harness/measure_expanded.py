# Expanded token telemetry for the 10 complete conditions (load cost + output tokens). Offline, no API.
import json, glob, re
try:
    import tiktoken; ENC=tiktoken.get_encoding("cl100k_base"); tok=lambda s: len(ENC.encode(s or "")); TOKENIZER="tiktoken/cl100k_base (proxy)"
except Exception:
    tok=lambda s: max(1,len((s or ""))//4); TOKENIZER="chars/4 fallback"
Q="D:/Claude/skill-audit/quarantine"; SK="D:/Claude/critical-thinking/skill"
def rd(p):
    try: return open(p,encoding="utf-8",errors="ignore").read()
    except: return ""
def tf(paths): return sum(tok(rd(p)) for p in paths)

# entry file(s), progressive-disclosure pool, and realistic K (sub-files typically read)
CONF={
 "ours":        ([SK+"/SKILL.md"], glob.glob(SK+"/references/*.md"), 2.0),
 "cc-thinking": ([Q+"/cc-thinking-skills/skills/thinking-model-router/SKILL.md"], [p for p in glob.glob(Q+"/cc-thinking-skills/skills/*/SKILL.md") if "thinking-model-router" not in p], 2.5),
 "thinking-partner": ([Q+"/thinking-partner/skills/thinking-partner/SKILL.md"], [p for p in glob.glob(Q+"/thinking-partner/**/*.md",recursive=True) if "skills/thinking-partner/SKILL.md" not in p], 1.0),
 "skills-for-humanity": ([Q+"/sfh-skills-for-humanity/skills/s4h/SKILL.md"], [p for p in glob.glob(Q+"/sfh-skills-for-humanity/skills/*/SKILL.md") if "/s4h/" not in p], 1.5),
 "balanced":    ([Q+"/glebis-claude-skills/balanced/SKILL.md"], [], 0.0),
 "cyperx84-mm": ([Q+"/cyperx84-mental-models/skills/mental-models/SKILL.md"], [p for p in glob.glob(Q+"/cyperx84-mental-models/**/*.md",recursive=True) if "skills/mental-models/SKILL.md" not in p and "/.git/" not in p], 1.5),
 "first-principles": ([Q+"/first-principles-skill/SKILL.md"], [p for p in glob.glob(Q+"/first-principles-skill/**/*.md",recursive=True) if p.endswith("SKILL.md")==False], 1.0),
 "devils-advocate": ([Q+"/devils-advocate/plugin/skills/critique/SKILL.md"], [p for p in glob.glob(Q+"/devils-advocate/**/*.md",recursive=True) if "skills/critique/SKILL.md" not in p and "/.git/" not in p], 1.0),
 "sequential-thinking": ([Q+"/sequential-thinking-skill/sequential-thinking/SKILL.md"], [], 0.0),
 "systems-thinking": ([Q+"/mlevison-systems-thinking/SKILL.md"], [], 0.0),
 "socratic-debate": ([Q+"/plinde-claude-plugins/socratic-debate/skills/socratic-debate/SKILL.md"], [], 0.0),
 "expert-persona": ([], [], 0.0),
 "plain-cot":     ([], [], 0.0),
 "self-critique": ([], [], 0.0),
 "baseline":    ([], [], 0.0),
}
load={}
for c,(entry,pool,K) in CONF.items():
    e=tf(entry); pooltoks=[tok(rd(p)) for p in pool]; avg=(sum(pooltoks)/len(pooltoks)) if pooltoks else 0
    load[c]={"entry":round(e),"realistic":round(e+K*avg),"full":round(e+sum(pooltoks)),"n_pool":len(pooltoks)}

# output tokens from complete reasoning answers
ans=json.load(open("D:/Claude/skill-audit/telemetry-eval/expanded/reasoning_complete.json",encoding="utf-8"))
def clean(s):
    s=re.sub(r"</?(answer|invoke|parameter|antml)[^>]*>","",s or ""); s=re.sub(r"&lt;/?(answer|invoke|parameter)[^&]*&gt;","",s)
    s=re.sub(r"(?i)\n?(source skill file|relevant files applied)[^\n]*","",s)  # strip leaked path artifacts
    return s.strip()
PRE=180
rows=[];
for a in ans:
    t=clean(a.get("answer"));
    if not t: continue
    ot=tok(t); c=a["condition"]; it=round(load[c]["realistic"])+PRE
    rows.append({"condition":c,"problemId":a["problemId"],"output_tok":ot,"input_tok":it,"operate_tok":ot+it,"words":len(t.split())})
def mean(x): return sum(x)/len(x) if x else 0
CONDS=sorted(set(r["condition"] for r in rows))
agg={}
for c in CONDS:
    r=[x for x in rows if x["condition"]==c]
    agg[c]={"n":len(r),"out":round(mean([x["output_tok"] for x in r])),"in":round(mean([x["input_tok"] for x in r])),
            "operate":round(mean([x["operate_tok"] for x in r])),"words":round(mean([x["words"] for x in r]))}
json.dump({"tokenizer":TOKENIZER,"load":load,"per_arm":agg,"per_answer":rows},open("D:/Claude/skill-audit/telemetry-eval/expanded/token_expanded.json","w",encoding="utf-8"),indent=2)
print("tokenizer:",TOKENIZER,"\nLOAD (tokens)  entry / realistic / full-tree:")
for c in CONDS: L=load[c]; print(f"  {c:20} {L['entry']:6} / {L['realistic']:6} / {L['full']:8}  (pool {L['n_pool']})")
print("OPERATE (mean tok/answer):")
for c in CONDS: A=agg[c]; print(f"  {c:20} out={A['out']:5} in={A['in']:6} operate={A['operate']:6} (~{A['words']}w)")
