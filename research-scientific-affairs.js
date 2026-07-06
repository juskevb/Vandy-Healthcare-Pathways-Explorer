/* Track: Healthcare Operations & Administration */
window.EXPLORER_TRACKS = window.EXPLORER_TRACKS || [];
window.EXPLORER_TRACKS.push({
 id: "operations-administration",
 name: "Operations & Administration",
 short: "Somebody decides how many nurses to staff Friday night, why the ER wait is 4 hours, and where the new clinic goes. That somebody doesn't wear scrubs.",
 color: "#4a6d8c",
 wash: "#e6edf3",
 glyph: "flow",
 entryTitle: "Entry role: Ops Coordinator",
 tagline: "Hospitals are among the most complex operations humans run - a mid-size one is a hotel, restaurant, pharmacy, lab, and trauma unit sharing one building, open 24/7, where delay can mean harm. Administrators make it run: staffing, patient flow, budgets, quality, growth. It's the career for people who fix systems, not symptoms.",
 stats: [
 { k: "Entry job titles", v: "Operations Coordinator, Admin Intern/Fellow" },
 { k: "Field outlook", v: "+28% growth for health services managers (BLS)" },
 { k: "Signature deliverable", v: "A process that measurably improved" },
 { k: "Nashville advantage", v: "HCA's hometown - the hospital capital of America" }
 ],
 field: {
 what: [
 "Every metric a hospital lives or dies by - how long patients wait, whether the OR starts on time, whether the nurse-to-patient ratio is safe, whether the unit hits budget - belongs to an administrator. The work is deeply concrete: you can walk to the problem, watch it happen, and measure whether your fix worked. That feedback loop is what people in this field say they love most.",
 "Career paths run two ways. The <b>hospital route</b>: administrative intern or fellow → department operations manager → service-line director → hospital executive. The <b>corporate route</b>, huge in Nashville: analyst and coordinator roles at the headquarters of companies that run hundreds of facilities (HCA, Lifepoint, CHS, Surgery Partners), working on staffing models, throughput, supply chain, and revenue cycle across the whole portfolio.",
 "The toolkit blends people and numbers roughly 50/50. Numbers: Excel, dashboards, Lean Six Sigma process improvement, budget variance. People: physicians and nurses don't report to you and are busy saving lives - you change how a unit works by earning trust, not by memo. If you've ever reorganized a chaotic group project into something that ran smoothly, you already know whether this feels like you."
 ],
 misconception: "That administration is the boring, paper-pushing side of healthcare. The ER wait time, the surgery scheduled six weeks out, the nurse working her third double - those are operations problems, and fixing them changes more patient lives per year than most individual clinicians can. Administrators just do it at the level of the <i>system</i>.",
 titles: [
 { title: "Administrative Intern / Fellow", desc: "Rotational entry at big systems (Mayo, Cleveland Clinic, VUMC, Stanford) - project work across departments, mentored by executives." },
 { title: "Operations Coordinator / Analyst (HCA, Lifepoint)", desc: "Corporate-side entry in Nashville: throughput dashboards, staffing models, performance reviews across facilities." },
 { title: "Revenue Cycle Analyst (Parallon, Ensemble, R1)", desc: "The money-side of operations: billing accuracy, denials, collections - a massive, hiring-heavy Nashville niche." },
 { title: "Practice / Clinic Manager", desc: "Run the whole operation of an outpatient clinic - staffing, scheduling, budget, patient experience. Fast P&L ownership." }
 ],
 day: [
 { time: "7:30a", what: "Morning huddle on the med-surg unit: two nurses called out; rework today's staffing grid before 8am." },
 { time: "8:30a", what: "Pull yesterday's ED throughput dashboard; door-to-provider crept up again - flag it for the flow committee." },
 { time: "10:00a", what: "Walk the discharge process with a case manager to see where the 2-hour delay actually happens." },
 { time: "12:00p", what: "Lunch with your mentor, the associate COO, who explains how the new payer contract changes unit budgets." },
 { time: "1:30p", what: "Build the business case for a second CT tech on weekends: volume data, wait times, overtime costs." },
 { time: "3:30p", what: "Present pilot results to the nursing director - LWBS rate down 40%; she wants it on two more units." },
 { time: "5:00p", what: "Update the project tracker; hospitals run on operating rhythm, and most nights you're out by dinner." }
 ],
 employers: {
 nashville: ["HCA Healthcare (HQ)", "Vanderbilt University Medical Center", "Ascension Saint Thomas", "Lifepoint Health", "Community Health Systems", "Surgery Partners", "Brookdale Senior Living", "Premise Health", "Parallon", "HealthTrust", "Ardent Health"],
 national: ["Mayo Clinic", "Cleveland Clinic", "Mass General Brigham", "Northwell Health", "Intermountain Health", "Stanford Health Care", "Houston Methodist", "SSM Health", "Tenet Healthcare", "UCLA Health", "Emory Healthcare", "AdventHealth"]
 },
 thrive: [
 "You notice broken processes everywhere - lines, forms, handoffs - and itch to fix them",
 "You'd rather <b>walk to</b> a problem and watch it than model it from afar",
 "You're energized by people: persuading, coordinating, leading without authority",
 "You want visible, local impact - <i>this</i> hospital, <i>this</i> unit, measurably better",
 "You like the idea of running something big someday - a service line, a hospital, a system"
 ]
 },
 project: {
 title: "Fix the Friday-night emergency department",
 role: "Administrative intern, Midstate Regional Medical Center (a fictional 380-bed Nashville-area hospital)",
 setting: "8-week internship project, reporting to the VP of Operations",
 duration: "≈ 2 hours",
 premise: [
 "Patient complaints about ER waits have doubled, a local news station just ran a story about a five-hour Friday-night wait, and the percentage of patients who <b>leave without being seen (LWBS)</b> - walk out before a provider ever examines them - is rising. LWBS is the metric hospitals fear: it's a safety risk, a lawsuit risk, and lost revenue, all in one number.",
 "The VP of Operations hands you the project: <i>“Figure out what's actually broken, and bring me something we can pilot in 90 days.”</i> You'll work it the way hospital operators do: walk the process, read the data, find the root cause, then design a measurable fix."
 ],
 fictionNote: "Midstate Regional is fictional and the data is simplified, but ED throughput is the canonical hospital-operations problem - VUMC, HCA, and Ascension all have teams working on exactly this, using exactly these methods (process mapping, throughput metrics, Lean root-cause analysis, 90-day pilots).",
 tasks: [
 {
 title: "Walk the process: map the patient's journey",
 minutes: 25,
 skills: ["Process mapping", "Gemba observation", "Systems thinking"],
 brief: "<p>Lean operations has a rule: <i>go and see</i> (the “gemba walk”). Before touching data, you spend Friday evening in the ED following the process a patient experiences. Your notes: patients check in at a desk, wait, get triaged by a nurse (vitals, acuity score), wait again, get a bed <i>if one's open</i>, wait for the physician, then labs/imaging, then the decision - discharge home or admit to the hospital. Admitted patients wait in ED beds until an inpatient bed opens (“boarding”).</p>",
 todo: "<ol><li>Draw the journey as a simple flow: every step in a box, every <b>wait</b> as a triangle between boxes. Aim for 8-12 steps from arrival to departure.</li><li>Mark the three places waiting seemed worst in your observation.</li><li>For each wait, write what the patient is waiting <i>for</i> - a person? a room? a decision? a test result? That distinction drives everything later.</li></ol>",
 model: "<p>A clean map looks like:</p><ol><li><b>Arrival → check-in</b> (wait: registration clerk)</li><li><b>Check-in → triage</b> (wait: triage nurse - one on duty)</li><li><b>Triage → ED bed</b> (wait: <b>an open bed</b>, often the longest queue)</li><li><b>Bed → provider exam</b> (wait: physician/APP availability)</li><li><b>Orders → labs/imaging → results</b> (wait: test turnaround)</li><li><b>Results → disposition decision</b> (wait: physician re-review)</li><li><b>If discharged:</b> paperwork → departure</li><li><b>If admitted:</b> wait for inpatient bed = <b>boarding</b> (the patient occupies an ED bed for hours - which is why step 3's queue exists)</li></ol><p><b>The key structural insight:</b> the waits aren't independent. Boarding (step 8) consumes the beds that step 3 is queuing for. An ED that looks understaffed is often actually <i>blocked from downstream</i> - the bottleneck lives outside the ED, in how fast the inpatient units discharge. Hold that thought for Task 3.</p>"
 },
 {
 title: "Read the numbers like an operator",
 minutes: 30,
 skills: ["Throughput metrics", "Excel analysis", "Pattern finding"],
 brief: "<p>Monday morning, the data analyst sends you three months of throughput data cut by shift. Hospital operators live on three metrics: <b>door-to-provider time</b> (arrival until a clinician sees you), <b>length of stay (LOS)</b> for discharged patients, and <b>LWBS rate</b>. Averages hide problems, so the data comes segmented.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Midstate ED throughput by shift (3-month averages)</caption><thead><tr><th>Shift block</th><th class=\"num\">Arrivals/day</th><th class=\"num\">Door-to-provider (median min)</th><th class=\"num\">LOS, discharged (hrs)</th><th class=\"num\">LWBS rate</th></tr></thead><tbody><tr><td>Weekday days (7a-3p)</td><td class=\"num\">58</td><td class=\"num\">22</td><td class=\"num\">3.1</td><td class=\"num\">0.9%</td></tr><tr><td>Weekday evenings (3p-11p)</td><td class=\"num\">74</td><td class=\"num\">41</td><td class=\"num\">4.0</td><td class=\"num\">2.8%</td></tr><tr><td>Fri-Sat evenings (3p-11p)</td><td class=\"num\">92</td><td class=\"num\">68</td><td class=\"num\">5.2</td><td class=\"num\">6.5%</td></tr><tr><td>Nights (11p-7a)</td><td class=\"num\">31</td><td class=\"num\">18</td><td class=\"num\">2.7</td><td class=\"num\">0.7%</td></tr></tbody></table></div><p>Finance adds: the average ED visit generates ≈ <b>$650</b> in net revenue, and ~18% of ED patients are admitted (an admission generates far more).</p>",
 todo: "<ol><li>Where is the problem concentrated? Say it precisely - which shifts, how much worse than baseline.</li><li>Estimate <b>patients lost to LWBS per year</b> on Fri-Sat evenings (arrivals × rate × 2 days × 52 weeks) and the direct revenue those walkouts represent.</li><li>Name one reason the true cost is larger than your revenue number.</li></ol>",
 model: "<p><b>1 - The problem is Friday-Saturday evenings, full stop.</b> Door-to-provider is 3× the weekday-day baseline (68 vs 22 min) and LWBS is 7× (6.5% vs 0.9%). Nights are fine; this is a <i>peak-load</i> problem, not a general one.</p><p><b>2 - The walkout math:</b> 92 arrivals × 6.5% ≈ 6 LWBS per evening × 2 evenings × 52 weeks ≈ <b>620 patients/year</b>. At $650 average, that's <b>≈ $400K/year in direct revenue</b> walking out the door - before counting the ~18% who would have been admitted, worth several times more.</p><p><b>3 - The bigger cost:</b> LWBS patients are untreated emergency patients - some come back sicker (safety and liability), some never come back (lost lifetime relationship), and public wait times shape the hospital's reputation and referral flows. Operators quantify what they can and name what they can't - your slide should do both.</p>"
 },
 {
 title: "Find the root cause, not the loudest symptom",
 minutes: 30,
 skills: ["Root-cause analysis", "5 Whys", "Constraint thinking"],
 brief: "<p>The obvious fix - “hire more ER doctors” - is expensive and, if the bottleneck is beds rather than clinicians, useless. Lean gives you the <b>5 Whys</b>: keep asking why until you hit a cause you can act on. The analyst pulls two more data points for Friday-Saturday evenings: <b>ED boarding</b> averages 9 patients (vs 2 on weekday days) - a quarter of the ED's 36 beds are occupied by patients already admitted. And on the inpatient side, <b>most discharges complete between 4pm and 7pm</b>, even though physicians write discharge orders in the morning.</p>",
 todo: "<ol><li>Run the 5 Whys starting from “patients wait 68 minutes to see a provider on Friday nights.” Use the boarding and discharge-timing facts.</li><li>Identify the <b>constraint</b>: which single resource, freed up, would relieve the most pressure?</li><li>List one contributing cause the 5 Whys chain does <i>not</i> explain (there's usually more than one root).</li></ol>",
 hint: "Follow the beds. Why are ED beds full? Why are admitted patients still in them? Why aren't inpatient beds ready? Why do discharges finish at 5pm when the orders were written at 10am?",
 model: "<p><b>The chain:</b> Patients wait to be seen → because ED beds are full → because ~9 beds hold <i>boarding</i> patients already admitted → because inpatient beds aren't ready until evening → because discharges complete at 4-7pm → because the steps after the morning discharge order (final labs, pharmacy meds-to-go, transport, room cleaning) are nobody's coordinated job - each queues behind other work. <b>Root cause: the discharge process upstream, not the ED itself.</b></p><p><b>The constraint:</b> inpatient bed availability between 3pm and 9pm. Free beds earlier in the day and boarding drains, ED beds open, door-to-provider falls - without hiring a single additional ED clinician.</p><p><b>What the chain doesn't explain:</b> even with zero boarding, Fri-Sat arrivals (92 vs 58) exceed weekday staffing plans - there's a genuine peak-staffing gap in triage and fast-track for low-acuity patients. Real operational problems almost always have two or three interacting roots; a fix that addresses only one underdelivers. That's why Task 4 pairs an upstream fix with an in-ED fix.</p>"
 },
 {
 title: "Design the 90-day pilot the VP can say yes to",
 minutes: 35,
 skills: ["Intervention design", "KPIs & targets", "Change management"],
 brief: "<p>Executives don't approve “ideas” - they approve <b>pilots</b>: a specific change, on a specific unit, for a specific period, with baseline metrics, targets, and an owner. Your VP wants exactly that, one page. She also warns you: <i>“The hospitalists and nurses have seen ten flavor-of-the-month initiatives. Tell me why this one sticks.”</i></p>",
 todo: "<ol><li>Choose <b>two interventions</b> - one attacking the upstream root cause (discharge timing), one attacking the peak-load gap (Fri-Sat evenings). Describe each in two sentences.</li><li>Build the measurement table: 3-4 KPIs, each with current baseline (from Task 2) and a 90-day target.</li><li>Answer the stickiness question: name the two stakeholder groups whose behavior must change, and one concrete thing you'd do for each so the change survives month four.</li></ol>",
 model: "<p><b>Intervention 1 - “Discharge by noon” on two pilot inpatient units.</b> Discharge steps start the afternoon <i>before</i> (pharmacy, transport, education queued at order time); a 9am huddle names every discharge-ready patient; environmental services pre-positions room cleaning. Goal: majority of discharges complete before 2pm, opening beds before the ED's evening peak.</p><p><b>Intervention 2 - Fri-Sat evening fast-track + provider-in-triage.</b> From 3-11pm Friday and Saturday, one APP staffs a 4-bed fast-track for low-acuity patients, and triage starts orders immediately so tests run during the wait instead of after it.</p><p><b>The scoreboard:</b></p><div class=\"data-block\"><table class=\"d\"><thead><tr><th>KPI</th><th class=\"num\">Baseline</th><th class=\"num\">90-day target</th></tr></thead><tbody><tr><td>Door-to-provider, Fri-Sat eve (median)</td><td class=\"num\">68 min</td><td class=\"num\">≤ 40 min</td></tr><tr><td>LWBS rate, Fri-Sat eve</td><td class=\"num\">6.5%</td><td class=\"num\">≤ 3.0%</td></tr><tr><td>ED boarding at 5pm (avg patients)</td><td class=\"num\">9</td><td class=\"num\">≤ 5</td></tr><tr><td>Discharges complete by 2pm (pilot units)</td><td class=\"num\">~25%</td><td class=\"num\">≥ 50%</td></tr></tbody></table></div><p><b>Stickiness:</b> Hospitalists - co-design the huddle with their medical director and report <i>their</i> unit's boarding relief back to them monthly (physicians respond to their own data). Nurses - the discharge coordination work is real added labor, so fund a unit-clerk hour shift rather than stacking it on the charge nurse, and put a bedside nurse on the pilot team from day one. A pilot designed <i>with</i> the people who work the process is the difference between a 90-day blip and a new normal.</p>"
 }
 ]
 },
 next: {
 courses: [
 "<b>MHS minor</b> - health policy, economics, and delivery-system courses; the standard Vanderbilt foundation",
 "<b>MHS 3040: Designing Healthy Publics</b> - uses Nashville itself as the case study",
 "Statistics + Excel/data coursework - operators live in dashboards",
 "Grad paths to know about: Vanderbilt <b>MMHC</b>, MBA Healthcare concentration, or an MHA elsewhere - many roles fund these later"
 ],
 campus: [
 "<b>IHI Open School</b> (free for students) - quality-improvement certificates hospitals genuinely recognize",
 "<b>ACHE student membership</b> - the professional home of hospital administrators; local chapter events in Nashville",
 "<b>Vanderbilt Business & Medicine Club</b>, <b>HCA-adjacent case competitions</b> (UAB Health Administration case comp)",
 "Volunteer at VUMC - the badge access and unit exposure make every later interview more concrete"
 ],
 experiences: [
 "<b>HCA Pathways Internship</b> - the marquee Nashville corporate-operations internship",
 "<b>VUMC student employment & administrative roles</b> - operations exposure without leaving campus",
 "Summer administrative internships: <b>Cleveland Clinic, Mayo, Stanford, Houston Methodist, SSM Health, UCLA Health, Emory</b> (the wiki tracks all of these)",
 "Revenue-cycle and supply-chain analyst roles: <b>Parallon, Ensemble, HealthTrust</b> - underrated, hiring-heavy entry doors"
 ],
 now: [
 "Complete the free IHI Open School Basic Certificate (~15 hours) - put it on your resume this month",
 "Take a Lean Six Sigma Yellow Belt fundamentals course (ASQ) - DMAIC vocabulary comes up in every ops interview",
 "Shadow one hospital administrator for a day - your advisor can arrange this through VUMC or alumni",
 "Read one week of Becker's Hospital Review headlines; fluency in the industry's daily conversation is cheap and visible"
 ],
 advisorNote: "Nashville is the single best city in America to start a hospital-operations career, and the advising wiki reflects it: HCA, Lifepoint, Ascension, CHS, and VUMC internship listings, 12+ summer administrative internship programs nationwide, and alumni in operations roles across the city. Ask your advisor for the HCA Pathways prep guide and an alumni introduction."
 }
});
