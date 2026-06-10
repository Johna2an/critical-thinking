#!/usr/bin/env python3
"""Build a self-contained HTML report for the 3-way creative-divergence eval:
overall scoreboard + per-brief side-by-side responses with judge scores."""
import html
import json
import re
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-2-creativity"
CONFIGS = ["claude_base", "claude_skill", "gpt5"]
DIMS = ["originality", "diversity", "boldness", "craft", "generativity"]
META = {
    "claude_base": {"name": "Claude 4.8", "tag": "no skill", "c": "#64748b"},
    "claude_skill": {"name": "Claude 4.8 + skill", "tag": "critical-thinking", "c": "#059669"},
    "gpt5": {"name": "GPT-5.5", "tag": "xhigh reasoning", "c": "#7c3aed"},
}
DIM_LABEL = {"originality": "Originality", "diversity": "Diversity", "boldness": "Boldness",
             "craft": "Craft", "generativity": "Generativity"}


def md(text):
    text = html.escape(text)
    out, in_ul, in_ol = [], False, False

    def close():
        nonlocal in_ul, in_ol
        if in_ul:
            out.append("</ul>"); in_ul = False
        if in_ol:
            out.append("</ol>"); in_ol = False

    for ln in text.split("\n"):
        s = ln.strip()
        if not s:
            close(); continue
        h = re.match(r"^(#{1,4})\s+(.*)$", s)
        if h:
            close(); lvl = len(h.group(1))
            out.append(f"<h{lvl+2}>{inline(h.group(2))}</h{lvl+2}>"); continue
        m_ol = re.match(r"^(\d+)[.)]\s+(.*)$", s)
        m_ul = re.match(r"^[-*]\s+(.*)$", s)
        if m_ol:
            if not in_ol:
                close(); out.append("<ol>"); in_ol = True
            out.append(f"<li>{inline(m_ol.group(2))}</li>"); continue
        if m_ul:
            if not in_ul:
                close(); out.append("<ul>"); in_ul = True
            out.append(f"<li>{inline(m_ul.group(1))}</li>"); continue
        close(); out.append(f"<p>{inline(s)}</p>")
    close()
    return "\n".join(out)


def inline(s):
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<em>\1</em>", s)
    s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
    return s


def bar(v, color, maxv=10):
    pct = (v / maxv * 100) if v else 0
    return (f"<div class='bar'><div class='fill' style='width:{pct:.0f}%;background:{color}'></div>"
            f"<span class='barval'>{v if v is not None else '-'}</span></div>")


def main():
    problems = json.loads((FE / "problems.json").read_text(encoding="utf-8"))
    verdicts = json.loads((FE / "_verdicts.json").read_text(encoding="utf-8"))
    summ, pp = verdicts["summary"], verdicts["per_problem"]
    ranked = sorted(CONFIGS, key=lambda c: (summ[c]["overall"] or 0), reverse=True)
    winner = ranked[0]

    css = """
    *{box-sizing:border-box} body{margin:0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    background:#f4f5f7;color:#1f2937;line-height:1.55} .wrap{max-width:1240px;margin:0 auto;padding:32px}
    h1{font-size:30px;margin:0 0 4px} .sub{color:#6b7280;margin:0 0 28px;font-size:15px}
    .board{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:24px;margin-bottom:28px}
    .board h2{margin:0 0 18px;font-size:18px} table{width:100%;border-collapse:collapse}
    th,td{text-align:left;padding:10px 12px;border-bottom:1px solid #eef0f2;font-size:14px;vertical-align:middle}
    th{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280}
    .cfg{font-weight:700} .cfgtag{color:#6b7280;font-weight:400;font-size:12px;margin-left:6px}
    .dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:middle}
    .bar{position:relative;background:#f1f3f5;border-radius:6px;height:20px;width:120px;display:inline-block;vertical-align:middle}
    .fill{position:absolute;left:0;top:0;bottom:0;border-radius:6px} .barval{position:absolute;right:6px;top:0;font-size:12px;line-height:20px;color:#111}
    .win{display:inline-block;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:999px;padding:3px 12px;font-size:13px;font-weight:600}
    .prob{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:0;margin-bottom:24px;overflow:hidden}
    .probhead{padding:18px 22px;background:#1e1b4b;color:#fff} .probhead .n{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#a5b4fc}
    .probhead .q{font-size:15px;margin-top:6px;color:#e0e7ff}
    .cols{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0}
    .col{padding:18px 20px;border-right:1px solid #eef0f2;min-width:0} .col:last-child{border-right:none}
    .colhead{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
    .colname{font-weight:700;font-size:14px} .pscore{font-size:13px;color:#374151;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:8px 10px;margin:8px 0 12px}
    .pscore b{font-variant-numeric:tabular-nums} .resp{font-size:13.5px} .resp h3,.resp h4,.resp h5,.resp h6{font-size:14px;margin:14px 0 4px}
    .resp p{margin:7px 0} .resp ul,.resp ol{margin:6px 0 6px 18px;padding:0} .resp li{margin:3px 0} .resp code{background:#f1f3f5;padding:1px 5px;border-radius:4px;font-size:12px}
    .resp strong{color:#111} .reasons{padding:14px 22px;background:#fbfbfc;border-top:1px solid #eef0f2;font-size:13px;color:#374151}
    .reasons .r{margin:5px 0;padding-left:14px;border-left:3px solid #cbd5e1} .legend{font-size:13px;color:#6b7280;margin-top:6px}
    """

    h = [f"<!doctype html><meta charset='utf-8'><title>Creative-divergence 3-way eval</title><style>{css}</style>"]
    h.append("<div class='wrap'>")
    h.append("<h1>Creative divergence: three-way eval</h1>")
    h.append("<p class='sub'>Claude 4.8 (no skill) vs Claude 4.8 + critical-thinking skill vs GPT-5.5 (xhigh), "
             f"across 6 open-ended 'propose 5 genuinely different versions' briefs, blind-judged "
             f"({verdicts['n_judge_files']} judge passes, A/B/C rotated). Scored on creative range, "
             "not analytical rigor.</p>")

    h.append("<div class='board'><h2>Overall scoreboard</h2><table>")
    h.append("<tr><th>Configuration</th><th>Overall</th><th>Wins</th><th>Avg rank</th>"
             + "".join(f"<th>{DIM_LABEL[d]}</th>" for d in DIMS) + "</tr>")
    for c in ranked:
        s, m = summ[c], META[c]
        dimcells = "".join(f"<td>{bar(s['dims'][d], m['c'])}</td>" for d in DIMS)
        h.append(
            f"<tr><td class='cfg'><span class='dot' style='background:{m['c']}'></span>{m['name']}"
            f"<span class='cfgtag'>{m['tag']}</span></td>"
            f"<td>{bar(s['overall'], m['c'])}</td><td><b>{s['wins']}</b></td>"
            f"<td>{s['avg_rank']}</td>{dimcells}</tr>")
    h.append("</table>")
    wm = META[winner]
    h.append(f"<div style='margin-top:16px'><span class='win'>Top overall: {wm['name']} "
             f"({summ[winner]['overall']}/10)</span></div>")
    h.append("<p class='legend'>Diversity scores the internal spread of the five versions (are they truly "
             "different from one another). Originality and boldness reward escaping the obvious frame. "
             "Generativity asks whether the ideas open real new directions. Lower average rank is better.</p>")
    h.append("</div>")

    for p in problems:
        pid = str(p["id"])
        h.append("<div class='prob'>")
        h.append(f"<div class='probhead'><div class='n'>Brief {p['id']} &middot; {p['name']}</div>"
                 f"<div class='q'>{html.escape(p['prompt'])}</div></div>")
        h.append("<div class='cols'>")
        for c in CONFIGS:
            m = META[c]
            resp_path = FE / f"prompt-{p['id']}" / c / "run-1" / "response.md"
            body = resp_path.read_text(encoding="utf-8") if resp_path.exists() else "_(missing)_"
            pcfg = pp.get(pid, {}).get(c, {})
            dm = pcfg.get("dims", {})
            ov, bests = pcfg.get("overall"), pcfg.get("bests", 0)
            dimline = " &middot; ".join(f"{DIM_LABEL[d][:4]} {dm.get(d,'-')}" for d in DIMS)
            h.append("<div class='col'>")
            h.append(f"<div class='colhead'><span class='colname' style='color:{m['c']}'>{m['name']}</span>"
                     f"<span class='cfgtag'>{m['tag']}</span></div>")
            h.append(f"<div class='pscore'><b>{ov if ov is not None else '-'}/10</b> overall &middot; "
                     f"{bests} best-pick{'s' if bests!=1 else ''}<br><span style='color:#6b7280'>{dimline}</span></div>")
            h.append(f"<div class='resp'>{md(body)}</div></div>")
        h.append("</div>")
        reasons = []
        for c in CONFIGS:
            for r in pp.get(pid, {}).get(c, {}).get("reasonings", []):
                reasons.append((c, r))
        if reasons:
            h.append("<div class='reasons'><b>Judge notes (for the response they ranked best):</b>")
            for c, r in reasons:
                h.append(f"<div class='r'><span style='color:{META[c]['c']};font-weight:600'>{META[c]['name']}:</span> {html.escape(r)}</div>")
            h.append("</div>")
        h.append("</div>")

    h.append("</div>")
    out = FE / "_report.html"
    out.write_text("\n".join(h), encoding="utf-8")
    print(f"Report written: {out}")


if __name__ == "__main__":
    main()
