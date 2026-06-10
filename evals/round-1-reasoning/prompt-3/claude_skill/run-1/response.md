# Why the ED stays over capacity, and the highest-leverage fix

## Frame the real question

The leadership question is "who is to blame," which is an easy substitution for the
hard one: "what structure makes wait times return to the same level no matter how many
nurses we add?" The tell is the pattern itself. A recurring behavior that reasserts a
fixed setpoint after every intervention is a signature of system structure, not of
individual effort or a single bad season. A bad flu season is a one-time external shock.
It cannot explain a level that returns year after year. Structure produces behavior; the
hand that releases the Slinky only lets out what the coil already held.

## Diagnose: this is a balancing loop holding a setpoint

Map the stock and flows. The stock is "patients waiting in the ED." Inflow is arrivals.
Outflow is disposition (admit to a ward, discharge, or transfer). Wait time rises when
the stock rises, which happens when inflow exceeds outflow.

Adding nurses raises outflow capacity inside the ED. So wait times drop for a few months.
Then they climb back. Two structures explain the rebound, and they likely both operate.

1. **Drift restored by a hidden balancing loop (most likely the dominant one).** The bed
   bottleneck usually sits downstream, not in the ED. Admitted patients cannot leave the
   ED until an inpatient bed opens (the "boarding" problem). The true constraint is
   inpatient bed turnover and discharge timing, which nurses in the ED do not touch.
   Whatever slack new ED nurses create gets absorbed by patients who still cannot move
   upstairs. The setpoint is set by the downstream constraint, so the ED returns to it.

2. **Demand that rises to meet supply (a reinforcing response feeding the same loop).**
   When the ED gets faster, referral patterns, EMS routing, and patient choice shift
   toward it. Shorter waits attract more arrivals until waits climb back to the level
   that deters the marginal patient. This is the same mechanism that makes a new highway
   lane fill with traffic. Equilibrium re-forms at the old wait.

Both are cases of "policy resistance": the system has its own goals (a tolerated wait,
a fixed bed supply) and pushes back on the lever you pulled. Pushing harder on ED
staffing makes the resistance more expensive, not weaker.

The "lazy staff" story fails the hard-to-vary test. It could be retold to fit any
outcome and forbids no observation, so it explains nothing. It also confuses effort with
result and ignores bounded rationality: staff are making reasonable choices given the
information and bed availability they actually have. Put a fresh team in the same
structure and you get the same waits.

## Quantify the mechanism

Little's Law makes this concrete: average number waiting equals arrival rate times
average time in system (L = lambda x W). If the binding delay is boarding time waiting
for an inpatient bed, then W is governed by bed turnover, and adding ED nurses changes
neither lambda nor the boarding component of W. A plausible split: if boarding accounts
for, say, 40 to 60 percent of total ED length of stay for admitted patients (a common
range in crowded EDs), then even doubling ED nursing leaves the majority of the delay
untouched. That matches the observed pattern of a small, temporary dip that fades.

## The highest-leverage fix

On Meadows' leverage hierarchy, hiring more nurses is a low-leverage move (adjusting a
number, point 12) aimed at the wrong stock. Higher-leverage interventions, in order:

- **Relieve the actual constraint: inpatient bed flow (the stock-and-flow plumbing,
  point 10).** Attack boarding directly. Move discharge decisions and discharge work to
  early morning so beds open before the afternoon arrival peak, smooth elective surgical
  admissions across the week instead of clustering them Monday to Wednesday (elective
  scheduling, not flu, is often the real upstream driver of crowding), and create a
  short-stay or discharge-lounge buffer so the ED is not the holding pen.
- **Fix the information flow and the goal (points 6 and 3).** Stop measuring "nurses
  hired" and start measuring boarding hours and total time to inpatient bed, made
  visible hospital-wide in real time. You get what you measure. Set a hospital-level goal
  for patient flow rather than an ED-local goal for staffing, because the ED cannot solve
  a constraint it does not own.
- **Manage the demand side honestly (point 5, rules and routing).** Divert low-acuity
  arrivals to urgent care or a fast-track lane so the reinforcing "shorter wait attracts
  more" loop is not fed at the same door as true emergencies.

The single highest-leverage action: treat ED crowding as a whole-hospital bed-flow
problem and run discharge and elective-admission scheduling to open beds ahead of demand.
That moves the setpoint itself, which is the only thing that makes the gains stick.

## Verdict and confidence

The ED runs over capacity because the binding constraint lives downstream (inpatient
bed turnover and boarding), with demand quietly rising to refill any ED slack. Nurses
relieve a non-binding constraint, so a balancing loop pulls waits back to a setpoint the
ED does not control. The fix is to attack bed flow and discharge timing and to re-measure
flow rather than headcount.

Confidence that the cause is structural rather than staff effort or flu: high (roughly
85 percent). Confidence that downstream boarding is the dominant single constraint at any
given hospital: moderate (about 65 percent), since the specific bottleneck varies. The
cheap diagnostic that would confirm or refute it: measure boarding hours and the share of
ED length-of-stay spent waiting for an inpatient bed. If boarding is large, the diagnosis
holds. If boarding is near zero and the ED genuinely lacks treatment capacity, then ED
capacity is the real constraint and the staffing instinct was closer to right, though the
demand-refill loop would still need managing.
