/* Track: Health Policy & Population Health */
window.EXPLORER_TRACKS = window.EXPLORER_TRACKS || [];
window.EXPLORER_TRACKS.push({
 id: "health-policy-population-health",
 name: "Health Policy & Population Health",
 short: "One rule change in Medicaid moves more health outcomes than a hospital full of clinicians. Policy is healthcare's biggest lever - someone has to do the analysis behind it.",
 color: "#a3543f",
 wash: "#f4e8e4",
 glyph: "capitol",
 entryTitle: "Entry role: Policy Research Assistant",
 tagline: "Who gets covered, what gets paid for, which programs get funded - those decisions are made in legislatures, agencies, and think tanks, and they're made better or worse by the quality of analysis behind them. Policy analysts do that analysis; population-health professionals turn it into programs that reach whole communities.",
 stats: [
 { k: "Entry job titles", v: "Research Assistant, Policy Analyst, Program Coordinator" },
 { k: "The core skill", v: "Clear writing under evidence discipline" },
 { k: "Signature deliverable", v: "The brief a decision-maker actually reads" },
 { k: "Nashville advantage", v: "A state capital with a health-policy scene" }
 ],
 field: {
 what: [
 "Medicaid covers roughly one in five Americans. Medicare sets the prices half the industry lives on. A single coverage rule - who qualifies, for how long, for what services - can change more lives than any clinical innovation of the same year. Health policy careers put you inside those decisions: analyzing what a proposed rule would do, briefing the people who vote on it, or running the programs it creates.",
 "The work happens in four kinds of buildings. <b>Think tanks and research shops</b> (KFF, Brookings, Urban Institute, Mathematica - and in Nashville, the Sycamore Institute) produce the analyses everyone else cites. <b>Government</b> (CMS, CDC, state Medicaid agencies like TennCare, city health departments) writes and runs the programs. <b>Advocacy organizations</b> (like the Tennessee Justice Center) push for specific changes. <b>Consultancies</b> (Avalere, Manatt Health, HMA) translate policy for companies that must navigate it. Entry titles differ; the daily craft is the same: read rigorously, analyze honestly, write clearly, count carefully.",
 "Population health is the same discipline pointed at delivery: designing and evaluating programs - maternal health, overdose prevention, chronic-disease management - that improve outcomes for entire communities rather than one patient at a time. It's where epidemiology, program management, and health equity work meet, and it's hiring fast in health systems and health plans, not just public agencies."
 ],
 misconception: "That policy work is politics - arguing positions all day. Most of it is closer to careful journalism plus applied economics: what does the evidence say, what would this option cost, who gains, who loses, and can it be implemented? Credible analysts are valued precisely because both parties can trust their numbers.",
 titles: [
 { title: "Research Assistant / Policy Analyst (think tank)", desc: "Literature reviews, data analysis, issue briefs at KFF, Urban, Mathematica, Sycamore. Writing samples matter more than GPA." },
 { title: "State agency analyst (TennCare, Dept. of Health)", desc: "Inside the programs themselves: eligibility policy, budget analysis, program evaluation. Underrated access to real decisions, early." },
 { title: "Legislative aide - health portfolio", desc: "Staff a member of Congress or a state legislator on health issues: briefings, constituent casework, bill analysis. The classic D.C. on-ramp." },
 { title: "Population health / program coordinator", desc: "Run community health programs at health systems, plans, and nonprofits - maternal health, food access, care coordination. People-facing, measurable." }
 ],
 day: [
 { time: "8:30a", what: "Skim the morning health-policy newsletters; a federal rule dropped that changes your state estimate." },
 { time: "9:00a", what: "Pull hospital discharge data to update the maternal-outcomes analysis for the brief." },
 { time: "10:30a", what: "Team review: your draft's cost table survives, but two adjectives get cut. Evidence only." },
 { time: "12:00p", what: "Brown-bag with a visiting TennCare official on how the agency actually implements eligibility changes." },
 { time: "1:30p", what: "Call with an advocacy coalition - they want your numbers for legislative testimony next week." },
 { time: "3:00p", what: "Draft the two-page version for legislators and the 800-word public version of the same analysis." },
 { time: "5:00p", what: "Log the day's requests; when the committee schedule heats up, so do the deadlines." }
 ],
 employers: {
 nashville: ["The Sycamore Institute", "TennCare (TN Medicaid)", "Tennessee Department of Health", "Tennessee Justice Center", "Tennessee Hospital Association", "Metro Public Health Dept.", "NashvilleHealth", "Nashville CARES", "Siloam Health"],
 national: ["KFF", "Brookings Institution", "Urban Institute", "Mathematica", "The Commonwealth Fund", "RAND", "Avalere Health", "Manatt Health", "Health Management Associates", "ATI Advisory", "CMS", "CDC", "HHS", "MedPAC", "Center on Budget and Policy Priorities"]
 },
 thrive: [
 "You care about the <b>system</b> - coverage, fairness, incentives - more than any single transaction in it",
 "Writing is your weapon: you can make a complicated thing clear in a page",
 "You can hold a position lightly: the evidence gets the final vote",
 "You're patient with process - policy change is a long game with occasional lightning",
 "Questions of equity - who gets left out and why - genuinely move you"
 ]
 },
 project: {
 title: "Should the state extend postpartum Medicaid coverage?",
 role: "Policy intern, the Cumberland Center for Health Policy (a fictional nonpartisan state think tank)",
 setting: "Legislative session opens in 8 weeks; a senator has requested analysis",
 duration: "≈ 2 hours",
 premise: [
 "In your state, Medicaid pays for roughly half of all births - but a new mother's coverage ends <b>60 days after delivery</b>, even though a large share of maternal health crises (cardiac complications, hemorrhage-related conditions, severe depression, overdose) occur later in the first year. A state senator has asked your center for a nonpartisan analysis: <b>what would extending postpartum coverage to 12 months cost, and what would it buy?</b>",
 "You'll do the four things a real policy shop does: map the terrain, build the numbers, weigh the options honestly, and write the brief that gets read in the eight minutes between committee hearings."
 ],
 fictionNote: "The Cumberland Center is fictional and the numbers are simplified for teaching - but the policy is real: Tennessee extended TennCare postpartum coverage to 12 months in 2022, and most states have now done the same under a federal option. This case rewinds the clock so you can do the analysis that real analysts (including Nashville's Sycamore Institute) did when it was still an open question.",
 tasks: [
 {
 title: "Map the terrain before you argue anything",
 minutes: 25,
 skills: ["Medicaid mechanics", "Stakeholder mapping", "Policy levers"],
 brief: "<p>Amateurs start with opinions; analysts start with mechanics. Medicaid is <b>jointly funded</b> - the federal government pays a matching share of every state dollar (in most Southern states, roughly 65%) - and states change eligibility through defined channels: state legislation and budget, a <b>state plan amendment</b> (SPA) to the federal government, or a federal waiver. Nothing moves unless a coalition of interested parties lets it move.</p>",
 todo: "<ol><li>List the stakeholders who care about this decision - aim for at least seven - and mark each: likely supporter, likely opponent, or persuadable-with-conditions.</li><li>For your three most important stakeholders, write one sentence on what each actually wants (not their slogan - their interest).</li><li>Note the two mechanical facts from the brief above that will dominate the analysis. </li></ol>",
 model: "<p><b>The map (one version):</b> new mothers and families (supporters; the affected population) · hospitals and OB providers (supporters - uncovered patients become uncompensated care) · the state Medicaid agency (persuadable - cares about administrative workload and budget predictability) · the governor's budget office (persuadable - cares about the state-dollar cost) · fiscal conservatives in the legislature (skeptical - recurring spending) · maternal-health and faith coalitions (supporters - infant and maternal wellbeing crosses party lines) · health plans administering Medicaid (supporters - more covered months) · the hospital association (supporter, and politically potent).</p><p><b>The interests behind the top three:</b> Budget office: “Tell me the <i>state share</i> after federal match, and whether it grows.” Hospitals: “Every uninsured postpartum ER visit is our loss - coverage is revenue.” Skeptical legislators: “Give me a defensible number and a reason this isn't open-ended growth.”</p><p><b>The two dominating facts:</b> the federal match means every state dollar buys ~three dollars of coverage - the state's true cost is ~35% of the sticker price; and the eligible population is bounded (women already enrolled at delivery), which caps the fiscal exposure. Real analysis is knowing which two facts, out of fifty, everything else hangs on.</p>"
 },
 {
 title: "Build the numbers a skeptic can't wave away",
 minutes: 30,
 skills: ["Fiscal estimation", "Assumption chains", "Data honesty"],
 brief: "<p>The senator's staff wants “the number” - annual cost of a 12-month extension. There is no such number lying in a database; you build it from a chain of stated assumptions, each one challengeable, none hidden.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>What you can pull from public sources (simplified)</caption><thead><tr><th>Input</th><th class=\"num\">Value</th></tr></thead><tbody><tr><td>Births in the state per year</td><td class=\"num\">80,000</td></tr><tr><td>Share covered by Medicaid at delivery</td><td class=\"num\">50%</td></tr><tr><td>Share who would lose coverage at 60 days</td><td class=\"num\">55%</td></tr><tr><td>Of those, share expected to stay enrolled if extended</td><td class=\"num\">60%</td></tr><tr><td>Average Medicaid cost per adult member per month</td><td class=\"num\">$420</td></tr><tr><td>Additional covered months (60 days → 12 months)</td><td class=\"num\">10</td></tr><tr><td>Federal matching rate (FMAP)</td><td class=\"num\">65%</td></tr><tr><td>Share of pregnancy-related deaths occurring 43-365 days postpartum</td><td class=\"num\">~30%</td></tr></tbody></table></div>",
 todo: "<ol><li>Chain it: how many women gain coverage, how many member-months is that, and what's the <b>gross annual cost</b>?</li><li>Split gross cost into <b>federal share</b> and <b>state share</b> - the number the budget office actually debates.</li><li>Write the health-impact sentence: using the mortality-timing fact, what does the current 60-day cutoff mean, stated carefully (no causal overclaim)?</li></ol>",
 hint: "Women affected = 80,000 × 50% × 55%. Not all of them stay enrolled - apply the 60% take-up before multiplying months and dollars.",
 model: "<p><b>The chain:</b> 80,000 births × 50% Medicaid = 40,000 covered deliveries; × 55% losing coverage at day 60 = <b>22,000 women affected</b>; × 60% expected enrollment = 13,200 enrollees × 10 months = <b>132,000 member-months</b> × $420 ≈ <b>$55M gross per year</b>.</p><p><b>The split:</b> federal share 65% ≈ $36M; <b>state share ≈ $19M/year</b>. That's the fight: $19M of recurring state money - real, but small against a multi-billion-dollar Medicaid budget, and it purchases $55M of coverage.</p><p><b>The health sentence:</b> “About 30% of pregnancy-related deaths occur between 43 days and one year postpartum - squarely in the window where 22,000 women a year currently lose coverage; while coverage alone doesn't guarantee prevention, it is the precondition for the follow-up care, mental-health treatment, and chronic-condition management that clinical reviews consistently identify as missed opportunities.” Note the discipline: the mortality-timing fact is stated, the causal claim is <i>not</i> overstated, and every number in the chain is visible for a skeptic to attack. An estimate someone can argue with is credible; an estimate that hides its assumptions is not.</p>"
 },
 {
 title: "Weigh the options like a nonpartisan shop",
 minutes: 30,
 skills: ["Options analysis", "Criteria-based evaluation", "Intellectual honesty"],
 brief: "<p>Nonpartisan analysis rarely says “do X.” It puts 2-4 options against explicit criteria and lets the decision-maker see the trade. Your center's standard criteria: <b>state cost</b>, <b>health impact</b>, <b>administrative feasibility</b>, and <b>political durability</b> (will it survive the next budget cycle?).</p>",
 todo: "<ol><li>Build the options grid: <b>(A)</b> status quo, <b>(B)</b> extend to 6 months, <b>(C)</b> extend to 12 months. Score each against the four criteria in a phrase per cell - no invented precision, honest phrases.</li><li>Add the strongest <i>good-faith argument</i> for each option, including the status quo. (If you can't state the other side's best case, you don't understand the issue yet.)</li><li>One sentence: which option does the evidence favor, and what's the biggest genuine uncertainty in your own analysis?</li></ol>",
 model: "<p><b>The grid, in prose:</b> <b>(A) Status quo</b> - $0 new cost; leaves the 60-day cliff in the highest-risk window; no admin change; durable only until the next maternal-mortality report makes it untenable. Best case for A: recurring dollars are scarce and other maternal-health investments (home visiting, provider access) might buy more health per dollar. <b>(B) 6 months</b> - roughly half the state cost (~$10M); covers some of the risk window but cuts off before late-postpartum mental-health and cardiac risks resolve; <i>worse feasibility than it looks</i> - a nonstandard duration means custom eligibility systems, and the federal option is built for 12 months. Best case for B: a compromise that moves the cliff at lower cost. <b>(C) 12 months</b> - ~$19M state share; covers the full risk window; administratively the <i>simplest</i> extension because federal machinery expects it; most durable - hard to repeal a benefit mothers already use. Best case for C: the full fix at three-to-one federal leverage.</p><p><b>The verdict sentence:</b> “The evidence favors C: option B saves half the money but forfeits both the late-window health impact and the administrative simplicity, making it worse per dollar than it appears - while the biggest genuine uncertainty in our own numbers is the 60% enrollment-retention assumption, which could move the state cost by several million in either direction.” Notice the shape: the recommendation, the honest reason the compromise fails, and a self-disclosed weakness. That last move is what makes a shop citable by both parties - and it's the hardest habit for new analysts to learn.</p>"
 },
 {
 title: "Write the brief that survives the hallway",
 minutes: 35,
 skills: ["Policy writing", "Plain language", "Structure"],
 brief: "<p>Legislators read policy briefs standing in hallways. The form is strict: a title that states the issue, a 3-sentence summary box, then <b>Issue → Background → Analysis → Options → Considerations</b>, one page, plain language, every number sourced. Your center's style rule: <i>a smart reader with no health background should never have to reread a sentence.</i></p>",
 todo: "<ol><li>Write the <b>summary box</b>: three sentences - the problem, the central number, the decision before the legislature.</li><li>Write the <b>Options</b> section from your Task 3 grid - 2-3 lines per option, neutral voice.</li><li>Write the closing <b>Considerations</b> paragraph: implementation timing, the key uncertainty, and what to watch in other states.</li><li>Read the whole thing aloud; rewrite any sentence you stumbled on. (This is a real editing technique used in every policy shop.)</li></ol>",
 model: "<p><b>Summary box:</b> “Medicaid pays for half of the state's 80,000 annual births, but a mother's coverage ends 60 days after delivery - while roughly 30% of pregnancy-related deaths occur between 43 days and one year postpartum. Extending coverage to 12 months would reach about 22,000 women a year at an estimated state cost of $19 million after federal match ($55 million gross). The legislature faces a choice among the status quo, a 6-month extension, and the 12-month extension most states are now adopting.”</p><p><b>Options (excerpt):</b> “<b>Option C - extend to 12 months.</b> Covers the full first-year risk window at an estimated $19M annual state share. Aligns with the standing federal option, making implementation administratively straightforward. Twenty-plus states have adopted this approach; early evaluations show reduced coverage interruption, with mortality effects not yet measurable.”</p><p><b>Considerations:</b> “Implementation would begin with the next plan year; the estimate's largest uncertainty is retention (we assume 60% of eligible women remain enrolled - each ten-point change moves the state share about $3M). Neighboring states' early experience will provide sharper enrollment data within a year, and any evaluation should track postpartum emergency visits and behavioral-health utilization, where effects should appear first.”</p><p><b>The craft to notice:</b> no adjectives are doing argumentative work, the opposition's concern (recurring cost) is treated as legitimate, and the numbers from Task 2 appear with their assumptions attached. Policy writing is trust engineering - the brief is judged by whether the <i>losing</i> side still cites your numbers.</p>"
 }
 ]
 },
 next: {
 courses: [
 "<b>MHS major/minor</b> - the natural home: health policy, health equity, U.S. system courses",
 "<b>MHS 2140 (Health Care in the U.S.)</b> and <b>PUBH 5520 (Intro to Health Policy)</b>",
 "<b>Economics + statistics</b> - quantitative policy analysts are the scarce kind; Stata or R coursework pays off",
 "Political science courses on American institutions - you can't analyze what you can't mechanically explain"
 ],
 campus: [
 "<b>Public Health Student Association</b>, <b>Student Advocates for Public Health</b>, <b>Vanderbilt Science Policy Group</b>",
 "<b>Global health case competitions</b> (Emory Morningside; Vanderbilt's own) - policy analysis under time pressure",
 "<b>Vanderbilt Institute for Global Health</b> courses and undergraduate opportunities",
 "Write for a campus publication on health issues - clips are the currency of policy hiring"
 ],
 experiences: [
 "Nashville: <b>The Sycamore Institute internships</b>, <b>Tennessee Justice Center health policy internships</b>, <b>TN Dept. of Health internships & fellowships</b>, <b>Metro Public Health Department</b>",
 "D.C. pipeline: <b>congressional internships</b> (health committees), <b>KFF, Brookings, Urban Institute, Mathematica, CBPP internships</b> - all tracked in the wiki",
 "Federal: <b>CDC Pathways / Public Health Associate Program (PHAP)</b>, <b>HHS/CMS Pathways internships</b>, <b>ORISE fellowships</b>",
 "Population health on campus: <b>Health Equity Research Project</b>, community organizations (Siloam Health, Neighborhood Health volunteer roles)"
 ],
 now: [
 "Read three KFF issue briefs and reverse-engineer their structure - that structure is the job",
 "Write one practice policy brief (this project's Task 4 counts) and have your advisor or a professor tear it apart",
 "Follow the state legislature's health committee for one session cycle; Tennessee's is a masterclass happening two miles from campus",
 "Sign up for one health-policy newsletter (KFF Health News, or the Sycamore Institute's Tennessee-focused one) and actually read it"
 ],
 advisorNote: "The wiki tracks 30+ policy and public-health opportunities - from the Sycamore Institute and Tennessee Justice Center here in Nashville to KFF, Brookings, CDC PHAP, and congressional internships - plus which ones want writing samples (most). Policy hiring runs on clips and networks: ask your advisor to review your first writing sample and to introduce you to alumni in Nashville's health-policy scene."
 }
});
