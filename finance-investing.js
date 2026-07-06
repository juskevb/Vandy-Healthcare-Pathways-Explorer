/* Track: Research & Scientific Affairs (pharma, biotech, clinical research - non-clinical roles) */
window.EXPLORER_TRACKS = window.EXPLORER_TRACKS || [];
window.EXPLORER_TRACKS.push({
 id: "research-scientific-affairs",
 name: "Research & Scientific Affairs",
 short: "Between the lab bench and the pharmacy shelf sits a decade of trials, filings, and evidence-making. Thousands of non-clinical careers live in that gap.",
 color: "#3e7d78",
 wash: "#e4efee",
 glyph: "flask",
 entryTitle: "Entry role: Clinical Research Coordinator",
 tagline: "Getting a treatment from a promising molecule to an approved, covered, correctly-used medicine takes armies of people who aren't physicians or bench scientists: trial coordinators, regulatory specialists, health economists, medical writers, and scientific strategists. If you love the science but not the stethoscope - this is your wing of the industry.",
 stats: [
 { k: "Entry job titles", v: "Clinical Research Coordinator, Regulatory Associate" },
 { k: "The core skill", v: "Reading evidence critically - and translating it" },
 { k: "Signature deliverable", v: "The evidence story behind a medicine" },
 { k: "Nashville advantage", v: "Sarah Cannon runs trials at global scale here" }
 ],
 field: {
 what: [
 "A drug that works in a lab is roughly a decade and a billion dollars away from a patient. That distance is crossed by <b>clinical trials</b> (designed, run, and monitored by research teams), <b>regulatory filings</b> (thousands of pages arguing safety and efficacy to the FDA), and - increasingly decisive - <b>evidence for payers</b>: proof that the medicine is worth covering at its price. Every step is a career, and almost none of them require an MD or a PhD to start.",
 "Entry doors: a <b>Clinical Research Coordinator</b> runs trial operations at a site like VUMC or Sarah Cannon - recruiting patients, managing protocols and data. A <b>CRA</b> at a contract research organization (IQVIA, Medpace, PPD, ICON) monitors trial sites for quality. <b>Regulatory affairs</b> associates shepherd submissions. <b>HEOR</b> (health economics & outcomes research) analysts build the models that convince insurers. <b>Medical writers</b> turn data into manuscripts and regulatory documents. Two or three years in any of these, and the industry opens wide - including medical science liaison and medical affairs strategy roles for those who add an advanced degree later.",
 "The temperament this track rewards is precision plus translation: you must read a clinical paper skeptically, respect the rules exactly (this is one of the most regulated activities on earth), and explain complex evidence honestly to different audiences - regulators, physicians, payers, patients. People who find that translation act satisfying, rather than tedious, tend to flourish."
 ],
 misconception: "That “working in pharma” means either pipetting in a lab or sales. The industry's largest non-clinical workforce sits between those poles - trial operations, regulatory, medical affairs, HEOR, medical writing - and it's the part that hires strong biology, neuroscience, MHS, and even English majors straight out of undergrad.",
 titles: [
 { title: "Clinical Research Coordinator (CRC)", desc: "Run trials at a site: patient visits, protocol compliance, data capture. VUMC and Sarah Cannon hire continuously; the classic 2-year launchpad." },
 { title: "Clinical Research Associate (CRA) / CTA at a CRO", desc: "Monitor trial sites for IQVIA, Medpace, PPD, ICON - quality, compliance, and travel. Structured new-grad programs exist." },
 { title: "Regulatory Affairs Associate", desc: "Assemble and manage FDA/EMA submissions; learn the rulebook that governs the entire industry." },
 { title: "HEOR / Market Access Analyst", desc: "Model cost-effectiveness and budget impact; build the value dossiers payers demand. Quantitative, strategic, increasingly central." }
 ],
 day: [
 { time: "8:30a", what: "Morning queue: three sites uploaded trial data overnight; two queries need chasing before the sponsor call." },
 { time: "9:30a", what: "Screen two potential trial participants against the protocol's 14 eligibility criteria." },
 { time: "11:00a", what: "Team review of the new heart-failure readout - what can and can't be said before approval." },
 { time: "12:30p", what: "Journal-club lunch: a fellow coordinator presents a competitor trial's surprising results." },
 { time: "2:00p", what: "Draft the plain-language study summary the IRB requires for participants." },
 { time: "3:30p", what: "Call with the medical writer on the manuscript's results section - your data tables, her prose." },
 { time: "5:00p", what: "Log site metrics; enrollment is two patients behind plan and the sponsor will ask why." }
 ],
 employers: {
 nashville: ["Sarah Cannon Research Institute", "VUMC (clinical research)", "Vanderbilt-Ingram Cancer Center", "Cumberland Pharmaceuticals", "Aegis Sciences", "PathGroup"],
 national: ["Pfizer", "Eli Lilly", "Merck", "Bristol Myers Squibb", "AstraZeneca", "Genentech / Roche", "Regeneron", "Moderna", "IQVIA", "PPD / Thermo Fisher", "Medpace", "ICON", "Parexel", "Syneos Health", "Trinity Life Sciences", "Lumanity"]
 },
 thrive: [
 "You genuinely enjoy reading studies - methods sections included",
 "Precision feels like craft, not bureaucracy (this industry runs on getting details exactly right)",
 "You want your work connected to real treatments reaching real patients",
 "You like translating: making rigorous science honest <i>and</i> understandable",
 "You're considering grad school later (MPH, MS, PhD, PharmD) and want an on-ramp that keeps every option open"
 ]
 },
 project: {
 title: "Carry a heart-failure drug from trial readout to payer pitch",
 role: "Scientific affairs intern, Solvane Therapeutics (a fictional mid-size biopharma company)",
 setting: "Launch-readiness team, 6 months before an FDA decision",
 duration: "≈ 2 hours",
 premise: [
 "Solvane's lead drug, <b>cardexolol</b>, just completed its Phase 3 trial in chronic heart failure. The readout is positive. Now the company must do four things at once: understand exactly what the evidence shows, stay inside strict pre-approval communication rules, build the economic case insurers will demand, and translate the science honestly for the committees who decide coverage.",
 "As the intern on the scientific affairs team, you'll touch all four - the same arc a real launch team walks, compressed into four tasks."
 ],
 fictionNote: "Solvane, cardexolol, and the MERIDIAN-HF trial are entirely fictional, with simplified numbers. The task sequence - trial interpretation, regulatory guardrails, budget-impact modeling, evidence translation - is the authentic core of medical affairs, HEOR, and market access work at companies like Pfizer, Lilly, and the consultancies that serve them.",
 tasks: [
 {
 title: "Read the trial like a scientist, not a press release",
 minutes: 30,
 skills: ["Clinical trial literacy", "Absolute vs. relative risk", "NNT"],
 brief: "<p>The press release says <i>“cardexolol reduced cardiovascular events by 23%.”</i> Your job is to know what that actually means - because physicians, regulators, and payers will each read it differently, and the difference between <b>relative</b> and <b>absolute</b> risk reduction is the most common way trial results mislead.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>MERIDIAN-HF: Phase 3, randomized, double-blind, 24-month follow-up</caption><thead><tr><th>Outcome</th><th class=\"num\">Cardexolol (n=2,400)</th><th class=\"num\">Placebo (n=2,400)</th></tr></thead><tbody><tr><td>Primary: CV death or HF hospitalization</td><td class=\"num\">14.2%</td><td class=\"num\">18.5%</td></tr><tr><td>HF hospitalization alone</td><td class=\"num\">9.0%</td><td class=\"num\">12.0%</td></tr><tr><td>Symptomatic hypotension (adverse event)</td><td class=\"num\">6.1%</td><td class=\"num\">3.0%</td></tr><tr><td>Discontinued due to side effects</td><td class=\"num\">4.8%</td><td class=\"num\">3.9%</td></tr></tbody></table></div>",
 todo: "<ol><li>Compute the primary endpoint's <b>relative risk reduction</b> (RRR) and <b>absolute risk reduction</b> (ARR). Confirm where the press release's “23%” came from.</li><li>Compute the <b>number needed to treat</b> (NNT = 1 ÷ ARR): how many patients must take cardexolol for two years to prevent one event?</li><li>Do the same logic for harm: the <b>number needed to harm</b> (NNH) for symptomatic hypotension.</li><li>One sentence: why might a payer be less impressed than the press release wants them to be?</li></ol>",
 model: "<p><b>RRR:</b> (18.5 − 14.2) ÷ 18.5 ≈ <b>23%</b> - that's the headline number. <b>ARR:</b> 18.5% − 14.2% = <b>4.3 percentage points</b>. Same data, much humbler sound.</p><p><b>NNT:</b> 1 ÷ 0.043 ≈ <b>23</b> - treat 23 patients for two years to prevent one death-or-hospitalization. For context, that's a genuinely respectable NNT for a chronic cardiovascular drug.</p><p><b>NNH:</b> hypotension risk rises 6.1% − 3.0% = 3.1 points → 1 ÷ 0.031 ≈ <b>32</b>. So: prevent one major event per 23 patients, cause one significant side effect per 32. Benefit and harm are the same <i>kind</i> of arithmetic - always compute both.</p><p><b>The payer's view:</b> payers buy absolute risk reduction, because they pay for all 23 patients to prevent the one event - so the cost of preventing one event is 23 × 2 years × the drug's price. That single insight is why HEOR exists as a profession, and it sets up Task 3.</p>"
 },
 {
 title: "Learn the rules: what you may say, and when",
 minutes: 25,
 skills: ["Drug development pathway", "Regulatory basics", "Compliance judgment"],
 brief: "<p>A district sales manager emails your team: <i>“These results are incredible - can my reps start sharing the MERIDIAN-HF abstract with cardiologists now?”</i> Cardexolol is <b>not yet approved</b>. Answering requires knowing both the development pathway and one of the industry's brightest legal lines: companies may not promote a drug before approval (or beyond its approved label after).</p>",
 data: "<p>The pathway, scrambled - put it in order first: &nbsp;<i>FDA review of the NDA/BLA · Phase 1 (safety, small group) · Discovery & preclinical (lab and animal) · Phase 3 (large efficacy trials) · Post-market surveillance & Phase 4 · Phase 2 (dose-finding, early efficacy) · NDA/BLA submission</i></p>",
 todo: "<ol><li>Write the seven stages in order, with a phrase on what each is for. Where is cardexolol right now?</li><li>Draft a 3-4 sentence reply to the sales manager: what can't happen, why, and what the <i>compliant</i> path for the science is.</li><li>Name the function whose whole job is walking this line between science and promotion.</li></ol>",
 model: "<p><b>The pathway:</b> Discovery & preclinical → Phase 1 (safety, dozens of subjects) → Phase 2 (dosing and early efficacy, hundreds) → Phase 3 (definitive efficacy vs. comparator, thousands) → <b>NDA/BLA submission</b> (the full evidence dossier) → FDA review (≈10 months standard) → Post-market surveillance/Phase 4 (safety at population scale). Cardexolol sits between submission and decision.</p><p><b>The reply:</b> “No - reps cannot proactively share trial results for an unapproved product; that's pre-approval promotion, which FDA prohibits, and violations carry warning letters, fines, and launch-delaying scrutiny. What <i>is</i> permitted: the science can be presented at medical congresses and published in journals, and if a physician asks us an unsolicited question, Medical Information can respond with the data. Once the label is approved, marketing can promote - within exactly what the label says. Until then, the evidence travels through scientific channels, not sales calls.”</p><p><b>The function:</b> <b>Medical Affairs</b> - scientific experts (MSLs, medical information, publications teams) who engage clinicians on the evidence, firewalled from the commercial organization. The fact that this firewall employs tens of thousands of people tells you how seriously the industry takes the line - and it's a genuine career path for scientifically-minded non-clinicians.</p>"
 },
 {
 title: "Build the payer's budget-impact model",
 minutes: 30,
 skills: ["HEOR", "Budget-impact modeling", "Value framing"],
 brief: "<p>An insurer's pharmacy team will ask one question at launch: <i>“What does covering cardexolol do to our budget?”</i> HEOR analysts answer with a <b>budget-impact model</b> - simple multiplication, chained honestly. The list price will be <b>$6,000/patient/year</b>.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Model inputs for a hypothetical 1,000,000-member health plan</caption><thead><tr><th>Input</th><th class=\"num\">Value</th></tr></thead><tbody><tr><td>Members with eligible heart failure</td><td class=\"num\">0.8% = 8,000</td></tr><tr><td>Expected uptake in year 1</td><td class=\"num\">10% = 800 patients</td></tr><tr><td>Drug cost</td><td class=\"num\">$6,000 / patient / yr</td></tr><tr><td>HF hospitalization rate without drug</td><td class=\"num\">12 per 100 patients / yr</td></tr><tr><td>Relative reduction in HF hospitalization (trial)</td><td class=\"num\">25%</td></tr><tr><td>Cost per HF hospitalization</td><td class=\"num\">$18,000</td></tr></tbody></table></div>",
 todo: "<ol><li>Compute year-1 drug spend, hospitalizations avoided, and the offsetting savings.</li><li>Net budget impact, total and <b>per member per month</b> (PMPM) - the unit payers think in.</li><li>The model shows the drug does <i>not</i> pay for itself. Write two honest sentences a market-access team could still say to the payer - without pretending otherwise.</li></ol>",
 model: "<p><b>Drug spend:</b> 800 × $6,000 = <b>$4.8M</b>. <b>Avoided hospitalizations:</b> 800 × 0.12 × 25% = <b>24/year</b>, saving 24 × $18,000 = <b>$432K</b>. <b>Net impact:</b> ≈ <b>$4.37M/year</b>, or $4.37M ÷ 1M members ÷ 12 ≈ <b>$0.36 PMPM</b>.</p><p><b>The honest value story:</b> “Cardexolol adds about 36 cents per member per month in year one, and roughly 10% of its cost is directly offset by avoided hospitalizations. The remaining cost buys measurable health: fewer cardiovascular deaths and hospital stays in a population with few remaining options - value we quantify in the cost-per-outcome analyses accompanying this model.” Most new drugs don't “save money”; they <i>buy health</i>, and the real negotiation is about the price of that health (formally: cost-effectiveness analysis, measured in cost per quality-adjusted life year). Analysts who present the honest number plus the honest frame keep their credibility - and credibility is the entire currency of scientific affairs.</p><p><b>Bonus instinct:</b> notice how sensitive the model is to <i>which</i> 800 patients start therapy - target the highest-risk patients (say, hospitalized in the past year, with double the baseline event rate) and offsets double while drug cost stays flat. “Right patient, right drug” is a financial argument, not just a clinical one.</p>"
 },
 {
 title: "Translate the evidence for the coverage committee",
 minutes: 30,
 skills: ["Medical writing", "Fair balance", "Audience translation"],
 brief: "<p>The payer's <b>P&T committee</b> (pharmacy & therapeutics - the pharmacists and physicians who decide what gets covered) wants a <b>one-paragraph evidence summary</b>, ~150 words, plain language. The rules of good medical writing: absolute numbers alongside relative ones, harms beside benefits, the studied population named precisely, and zero adjectives doing the work numbers should do. “Fair balance” isn't just an FDA rule - it's what keeps expert readers trusting you.</p>",
 todo: "<ol><li>Write the ~150-word summary of MERIDIAN-HF for the committee, using your Task 1 numbers. Include: who was studied, the primary result in relative <i>and</i> absolute terms (with NNT), the main harm, and what remains unknown.</li><li>Then the discipline check: circle every adjective in your draft. Delete any that a number could replace.</li></ol>",
 model: "<p><b>A version that would pass review:</b></p><p><i>“MERIDIAN-HF randomized 4,800 adults with chronic heart failure to cardexolol or placebo, added to standard therapy, for 24 months. The primary composite endpoint - cardiovascular death or heart-failure hospitalization - occurred in 14.2% of cardexolol patients versus 18.5% on placebo: a 23% relative and 4.3-percentage-point absolute reduction, meaning approximately 23 patients treated for two years to prevent one event. Heart-failure hospitalizations alone fell from 12.0% to 9.0%. The principal adverse effect was symptomatic hypotension (6.1% vs. 3.0%; one additional case per 32 patients treated); discontinuation rates were similar between arms. Effects beyond 24 months, and outcomes in patients over 80 or with severe renal impairment - excluded from enrollment - remain uncharacterized.”</i></p><p><b>What makes it professional:</b> the population is specified, every claim carries its number in both relative and absolute form, the harm gets the same arithmetic dignity as the benefit, and the limitations are volunteered rather than extracted. Compare with your draft: the most common miss is omitting what the trial <i>can't</i> show - and that omission is precisely what expert committees are trained to notice.</p>"
 }
 ]
 },
 next: {
 courses: [
 "<b>Biostatistics and epidemiology coursework</b> - the grammar of every trial you'll ever read",
 "<b>Pharmacology courses</b> - mechanism fluency that separates you in interviews",
 "<b>PUBH 5525 (Health Economics)</b> / decision analysis - the HEOR toolkit",
 "MHS courses on the U.S. system - market access is impossible to understand without payer basics"
 ],
 campus: [
 "<b>Faculty research assistant roles</b> - the wiki tracks openings; any wet-lab or clinical research exposure counts",
 "<b>VUSRP</b> (Vanderbilt Undergraduate Summer Research Program) and <b>Immersion Vanderbilt</b> projects in clinical research",
 "<b>Nucleate Vanderbilt</b> - the biotech-careers community on campus",
 "ISPOR, DIA, and ACRP student memberships - cheap, and they signal seriousness"
 ],
 experiences: [
 "<b>VUMC Clinical Research Coordinator / RA roles</b> - hired continuously; the classic first job in this field",
 "<b>Sarah Cannon Research Institute</b> clinical research roles - oncology trials at global scale, in Nashville",
 "Pharma summer internships the wiki tracks: <b>Pfizer Futures, Lilly, Merck, BMS, AstraZeneca, Regeneron, Moderna, Genentech</b>",
 "CRO new-grad programs: <b>Medpace CRA/CTA</b>, <b>ICON</b>, <b>PPD/Thermo Fisher</b>, <b>IQVIA</b>; life-science strategy: <b>Trinity, Putnam, Clearview, Health Advances</b>"
 ],
 now: [
 "Read one real NEJM or JAMA trial abstract weekly and compute the ARR and NNT yourself - ten minutes that compounds into an interview superpower",
 "Take the free NIH/CITI human-subjects research training - many CRC postings list it, few students have it",
 "Do a free Forage life-sciences simulation to see the commercial side",
 "Ask your advisor about VUMC and Sarah Cannon openings and which alumni went pharma - the CRC path is Nashville's most reliable entry"
 ],
 advisorNote: "The wiki tracks 25+ research-track opportunities - VUMC and Sarah Cannon coordinator roles, every major pharma summer internship, CRO new-grad programs, and NIH post-bac fellowships - plus faculty and lab pages if you want research experience first. If you're weighing this against med school, say so: your advisor prepares that exact conversation constantly."
 }
});
