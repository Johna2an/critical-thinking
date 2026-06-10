#!/usr/bin/env python3
"""Self-contained HTML report for the 4-way critical-thinking eval: scoreboard + per
problem 4-column responses with scores + judge notes."""
import html
import json
import re
from pathlib import Path

FE = Path(__file__).resolve().parent.parent / "round-3-v1-vs-v2"
CONFIGS = ["v1", "v2", "opus_base", "gpt5"]
DIMS = ["rigor", "calibration", "bias_awareness", "depth", "usefulness"]
META = {
    "v1": {"name": "Opus + CT skill V1", "tag": "21 books", "c": "#0ea5e9"},
    "v2": {"name": "Opus + CT skill V2", "tag": "51 books", "c": "#059669"},
    "opus_base": {"name": "Opus 4.8", "tag": "no skill", "c": "#64748b"},
    "gpt5": {"name": "GPT-5.5", "tag": "xhigh", "c": "#7c3aed"},
}
DIM_LABEL = {"rigor": "Rigor", "calibration": "Calibration", "bias_awareness": "Bias aware",
             "depth": "Depth", "usefulness": "Useful"}


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
            close(); out.append(f"<h5>{inline(h.group(2))}</h5>"); continue
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
    s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
    return s


def bar(v, color, maxv=10):
    pct = (v / maxv * 100) if v else 0
    return (f"<div class='bar'><div class='fill' style='width:{pct:.0f}%;background:{color}'></div>"
            f"<span class='barval'>{v if v is not None else '-'}</span></div>")


def main():
    problems = json.loads((FE / "problems.json").read_text(encoding="utf-8"))
    v = json.loads((FE / "_verdicts.json").read_text(encoding="utf-8"))
    summ, pp = v["summary"], v["per_problem"]
    ranked = sorted(CONFIGS, key=lambda c: (summ[c]["overall"] or 0), reverse=True)
    winner = ranked[0]

    css = """
    *{box-sizing:border-box} body{margin:0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    background:#f4f5f7;color:#1f2937;line-height:1.5} .wrap{max-width:1500px;margin:0 auto;padding:30px}
    h1{font-size:28px;margin:0 0 4px} .sub{color:#6b7280;margin:0 0 24px;font-size:14px}
    .board{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:22px;margin-bottom:26px}
    .board h2{margin:0 0 16px;font-size:18px} table{width:100%;border-collapse:collapse}
    th,td{text-align:left;padding:9px 11px;border-bottom:1px solid #eef0f2;font-size:13.5px;vertical-align:middle}
    th{font-size:11px;text-transform:uppercase;letter-spacing:.03em;color:#6b7280}
    .cfg{font-weight:700} .cfgtag{color:#6b7280;font-weight:400;font-size:12px;margin-left:6px}
    .dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:middle}
    .bar{position:relative;background:#f1f3f5;border-radius:6px;height:18px;width:104px;display:inline-block;vertical-align:middle}
    .fill{position:absolute;left:0;top:0;bottom:0;border-radius:6px} .barval{position:absolute;right:6px;top:0;font-size:11px;line-height:18px;color:#111}
    .win{display:inline-block;background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;border-radius:999px;padding:3px 12px;font-size:13px;font-weight:600}
    .prob{background:#fff;border:1px solid #e5e7eb;border-radius:14px;margin-bottom:22px;overflow:hidden}
    .probhead{padding:16px 20px;background:#0f172a;color:#fff} .probhead .n{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8}
    .probhead .q{font-size:14px;margin-top:5px;color:#e2e8f0}
    .cols{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:0}
    .col{padding:14px 16px;border-right:1px solid #eef0f2;min-width:0} .col:last-child{border-right:none}
    .colname{font-weight:700;font-size:13px} .pscore{font-size:12px;color:#374151;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:7px 9px;margin:7px 0 10px}
    .resp{font-size:12.5px} .resp h5{font-size:13px;margin:11px 0 3px} .resp p{margin:6px 0} .resp ul,.resp ol{margin:5px 0 5px 16px;padding:0} .resp li{margin:2px 0}
    .resp code{background:#f1f3f5;padding:1px 4px;border-radius:4px;font-size:11px}
    .reasons{padding:12px 20px;background:#fbfbfc;border-top:1px solid #eef0f2;font-size:12.5px;color:#374151}
    .reasons .r{margin:5px 0;padding-left:12px;border-left:3px solid #cbd5e1} .legend{font-size:13px;color:#6b7280;margin-top:6px}
    """

    h = [f"<!doctype html><meta charset='utf-8'><title>CT eval: V1 vs V2 vs Opus vs GPT-5.5</title><style>{css}</style>"]
    h.append("<div class='wrap'>")
    h.append("<h1>Critical-thinking: V1 vs V2 vs Opus 4.8 vs GPT-5.5</h1>")
    h.append("<p class='sub'>Opus 4.8 + critical-thinking skill V1 (21 books) vs the same skill V2 (51 books) vs Opus 4.8 with no skill vs GPT-5.5 (xhigh). "
             f"8 problems spanning the full V2 surface, blind-judged ({v['n_judge_files']} judge passes, A/B/C/D rotated by two balanced Latin squares).</p>")

    h.append("<div class='board'><h2>Overall scoreboard</h2><table>")
    h.append("<tr><th>Configuration</th><th>Overall</th><th>Wins</th><th>Avg rank</th>"
             + "".join(f"<th>{DIM_LABEL[d]}</th>" for d in DIMS) + "</tr>")
    for c in ranked:
        s, m = summ[c], META[c]
        dimcells = "".join(f"<td>{bar(s['dims'][d], m['c'])}</td>" for d in DIMS)
        h.append(f"<tr><td class='cfg'><span class='dot' style='background:{m['c']}'></span>{m['name']}"
                 f"<span class='cfgtag'>{m['tag']}</span></td><td>{bar(s['overall'], m['c'])}</td>"
                 f"<td><b>{s['wins']}</b></td><td>{s['avg_rank']}</td>{dimcells}</tr>")
    h.append("</table>")
    wm = META[winner]
    h.append(f"<div style='margin-top:14px'><span class='win'>Top overall: {wm['name']} ({summ[winner]['overall']}/10)</span></div>")
    h.append("<p class='legend'>Wins = times a judge ranked that response best (24 judge passes total). Avg rank over 4 (1 = best). Each config sat in each blind slot exactly twice.</p></div>")

    for p in problems:
        pid = str(p["id"])
        h.append("<div class='prob'>")
        h.append(f"<div class='probhead'><div class='n'>Problem {p['id']} &middot; {p['name']} &middot; tests: {p.get('tests','')}</div>"
                 f"<div class='q'>{html.escape(p['prompt'])}</div></div>")
        h.append("<div class='cols'>")
        for c in CONFIGS:
            m = META[c]
            rp = FE / f"prompt-{p['id']}" / c / "run-1" / "response.md"
            body = rp.read_text(encoding="utf-8") if rp.exists() else "_(missing)_"
            pcfg = pp.get(pid, {}).get(c, {})
            dm = pcfg.get("dims", {})
            ov, bests = pcfg.get("overall"), pcfg.get("bests", 0)
            dimline = " ".join(f"{DIM_LABEL[d][:4]} {dm.get(d,'-')}" for d in DIMS)
            h.append("<div class='col'>")
            h.append(f"<div class='colname' style='color:{m['c']}'>{m['name']} <span class='cfgtag'>{m['tag']}</span></div>")
            h.append(f"<div class='pscore'><b>{ov if ov is not None else '-'}/10</b> &middot; {bests} best<br><span style='color:#6b7280'>{dimline}</span></div>")
            h.append(f"<div class='resp'>{md(body)}</div></div>")
        h.append("</div>")
        reasons = []
        for c in CONFIGS:
            for r in pp.get(pid, {}).get(c, {}).get("reasonings", []):
                reasons.append((c, r))
        if reasons:
            h.append("<div class='reasons'><b>Judge notes (response ranked best):</b>")
            for c, r in reasons:
                h.append(f"<div class='r'><span style='color:{META[c]['c']};font-weight:600'>{META[c]['name']}:</span> {html.escape(r)}</div>")
            h.append("</div>")
        h.append("</div>")

    h.append("</div>")
    (FE / "_report.html").write_text("\n".join(h), encoding="utf-8")
    print(f"Report written: {FE / '_report.html'}")


if __name__ == "__main__":
    main()
