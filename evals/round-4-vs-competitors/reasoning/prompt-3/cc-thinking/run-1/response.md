## Diagnosis: a balancing loop with a delay, not a staffing shortage

**The "hire more nurses" pattern that relieves pressure for a few months and then reverts is the signature of a balancing feedback loop fighting an underlying driver of demand or flow.** Leadership is treating a stock-and-flow problem as if it were a headcount problem. Two systemic mechanisms explain the relapse:

1. **Policy resistance / "shifting the burden."** Wait times are governed by flow (patients in vs. patients out), not by nurse count alone. Adding nurses raises throughput briefly, but a faster ED *attracts and absorbs more demand* (referrals, walk-ins, admitted patients held longer) until the bottleneck re-saturates. The system returns to the same equilibrium because the real constraint was never touched.

2. **The bottleneck is almost certainly downstream of the ED, not inside it.** The classic ED constraint is **inpatient bed availability ("boarding"/"access block")**: admitted patients can't leave the ED because no ward bed is free, so they occupy ED beds and staff for hours. Throughput-accounting on ED crowding consistently finds boarding, not ED nurse hours, as the dominant driver. Hiring ED nurses adds capacity *upstream of* the true constraint, which Theory of Constraints predicts yields no durable gain.

**Five-Whys chain (each step needs the data named, so flag these as the verification plan):**
- Why are wait times high? → ED beds/staff are occupied → check **mean ED occupancy and % of beds holding admitted patients**.
- Why are they occupied? → admitted patients are boarding → check **boarding hours and time-to-ward-bed**.
- Why is boarding high? → no inpatient beds free → check **hospital-wide occupancy** (crowding nonlinearly worsens above ~85–90%).
- Why no beds free? → slow discharges, weekend/discharge-lounge gaps, no surge protocol → check **discharge timing distribution vs. arrival pattern**.
- Counterfactual test: *Would wait times stay low if boarding were eliminated even at current nurse levels?* If yes, boarding is the root and staffing is not. **Do not stop at "lazy staff"** — that is the blame-stop anti-pattern; ask why the system makes any given effort produce these results.

## Weighing the evidence

The "lazy staff" and "bad flu season" explanations fail on their own terms. A bad flu season is a one-time pulse; it cannot explain a *multi-year repeating* relapse. "Lazy staff" cannot explain why each hire visibly *does* relieve pressure for months, then loses ground — that is a structural reset, not effort. The repeating sawtooth is the tell of a balancing loop with a delay (hire → ramp-up lag → temporary relief → demand/constraint re-saturates).

**Uncertainties to confirm before committing:** I am inferring boarding as the constraint from base rates, not from this hospital's numbers. It could instead be (a) inefficient triage/fast-track, (b) lab/imaging turnaround, or (c) physician (not nurse) bottleneck. The fix below is robust to which it is, because step one is to *locate the constraint by data*.

## Highest-leverage fix

**Stop scaling the wrong resource. Find and exploit the true bottleneck — measure flow, not headcount.** Concretely, in order:

1. **Instrument the flow.** Track boarding hours, time-to-ward-bed, hospital-wide occupancy, and door-to-disposition. One week of this will identify the constraint. (~High leverage: information flows.)
2. **Attack boarding/discharge if confirmed.** Early-morning and weekend discharges, a discharge lounge, a "full-capacity protocol" that distributes admitted patients to ward hallways instead of holding them in the ED. This is where the leverage is, because it relieves the *actual* constraint. Evidence in ED operations shows discharge-timing and boarding interventions move wait times more than ED staffing does.
3. **Add a balancing rule on demand-side flow** (fast-track for low-acuity, provider-in-triage) only after the downstream constraint is cleared, so new throughput doesn't just re-board.
4. **Redefine the goal/SLO** from "nurses per shift" to "boarding hours" and "left-without-being-seen rate." Changing what is measured and rewarded is the very-high-leverage point; it stops the reflexive hire-more reaction.

**Verdict:** This is policy resistance from treating a flow/constraint problem as a staffing problem. The relapse is structural, not motivational. The single highest-leverage move is to measure patient flow, locate the bottleneck (very likely inpatient-bed boarding), and fix discharge/bed-flow there. Continued nurse hiring without clearing the downstream constraint will keep producing the same sawtooth at higher cost.