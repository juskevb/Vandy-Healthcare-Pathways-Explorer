/* Track: Health Data, Analytics & Technology */
window.EXPLORER_TRACKS = window.EXPLORER_TRACKS || [];
window.EXPLORER_TRACKS.push({
 id: "data-analytics-technology",
 name: "Data, Analytics & Technology",
 short: "Every visit, prescription, and payment leaves a data trail. The people who can read it decide where billions in care go next - and they're chronically scarce.",
 color: "#7d5b8e",
 wash: "#efe8f2",
 glyph: "grid",
 entryTitle: "Entry role: Data Analyst",
 tagline: "Healthcare generates more data than almost any industry and understands it worse. Analysts and technologists turn claims, medical records, and lab feeds into the answers that run the system: who's getting sicker, what's working, where money leaks. If you like finding patterns and explaining them to humans, this is the highest-leverage seat in the building.",
 stats: [
 { k: "Entry job titles", v: "Data Analyst, Analytics Consultant" },
 { k: "The one skill", v: "SQL - cited in nearly every posting" },
 { k: "Field outlook", v: "~21-23% growth for analyst roles (BLS)" },
 { k: "Vanderbilt advantage", v: "A top biomedical informatics department" }
 ],
 field: {
 what: [
 "When a health plan wants to know which members will end up in the hospital next quarter, when a hospital wants to know why Tuesdays overwhelm the infusion center, when a pharma company wants to know how a drug performs outside its trial - a data analyst answers, usually by querying enormous databases of <b>claims</b> (the bills insurers pay) and <b>EHR data</b> (the clinical record). The raw material is messy, coded, and vast; the job is turning it into a decision.",
 "The day-to-day: write SQL against the data warehouse, clean and shape the result in Python or R, build the Tableau or Power BI dashboard, then - the part that determines your career ceiling - <b>explain it</b> to clinicians and executives who will never read a query. Employers say the scarce combination isn't technical skill or healthcare knowledge; it's both in one person who can also communicate.",
 "The technology side widens the lane beyond analysis: implementation and technical-solutions roles at EHR vendors (Epic, Oracle Health), product and data roles at health-tech companies (Flatiron, Komodo, Tempus, athenahealth), and increasingly ML/AI work on risk prediction and clinical text. You don't need a CS degree for most of it - Epic famously hires strong liberal-arts graduates and trains them - but SQL fluency is the near-universal ticket in."
 ],
 misconception: "That you need to be a software engineer. Most healthcare analytics roles want SQL + Excel + one visualization tool + healthcare vocabulary - a stack you can genuinely build in two semesters of deliberate practice. The rarer skill (and the one interviews probe) is judgment: knowing what the data can't tell you, and saying so.",
 titles: [
 { title: "Healthcare Data Analyst", desc: "At a plan, system, or vendor: SQL, dashboards, and analyses that answer operational and clinical questions. The standard entry door." },
 { title: "Analytics / Decision Science Consultant (Optum, IQVIA, ZS)", desc: "Client-facing analytics - pharma commercial data, payer analytics, real-world evidence. Consulting pace, data depth." },
 { title: "Implementation / Technical Solutions (Epic, Oracle Health)", desc: "Configure and troubleshoot the systems hospitals run on. Hires all majors; trains intensely; great industry education." },
 { title: "Product / Data roles at health-tech startups", desc: "Flatiron, Komodo, Tempus, and Nashville's own health-tech cluster - smaller teams, broader ownership, faster feedback." }
 ],
 day: [
 { time: "9:00a", what: "Standup with the care-management team: they want last month's readmission numbers cut by region." },
 { time: "9:30a", what: "Write the SQL; discover 4% of discharge dates are null and chase down why before trusting anything." },
 { time: "11:30a", what: "Pair with a clinical pharmacist to sanity-check your medication-adherence logic against reality." },
 { time: "1:00p", what: "Rebuild the readmissions dashboard; delete two charts nobody used and add the one they kept asking for." },
 { time: "2:30p", what: "Present findings to the VP: three slides, one recommendation, zero SQL on screen." },
 { time: "4:00p", what: "Document the query and push it to the team repo; future-you says thanks." },
 { time: "5:30p", what: "Skim a health-tech newsletter; the tools change fast and the curious get promoted." }
 ],
 employers: {
 nashville: ["HCA Healthcare ITG", "BlueCross BlueShield of Tennessee", "Embold Health", "XSolis", "Medalogix", "Lirio", "HealthStream", "Cedar Gate Technologies", "VUMC (analytics & informatics)"],
 national: ["Optum / UnitedHealth", "IQVIA", "Komodo Health", "Flatiron Health", "Tempus", "Epic Systems", "Oracle Health", "athenahealth", "Arcadia", "Datavant", "Truveta", "Innovaccer", "Milliman", "ZS Associates", "Clarify Health"]
 },
 thrive: [
 "Finding the pattern in a messy dataset feels like a puzzle you'd do for free",
 "You're the one who makes the group project's spreadsheet actually work",
 "You like proof - “I think” bothers you when “the data shows” is available",
 "Explaining a technical thing simply gives you satisfaction, not annoyance",
 "You want a skill set that transfers anywhere in healthcare (it does - every track in this explorer needs analysts)"
 ]
 },
 project: {
 title: "Find the readmission leak at Bellhaven Health Plan",
 role: "Analytics intern, Bellhaven Health Plan (a fictional regional insurer, ~400,000 members)",
 setting: "4-week sprint for the VP of Medical Management",
 duration: "≈ 2 hours",
 premise: [
 "Hospital <b>readmissions</b> - a patient discharged, then back in a hospital bed within 30 days - are healthcare's signature failure metric: bad for the patient, expensive for the plan, and often preventable. Bellhaven's readmission spending is up 11% year over year, and the VP of Medical Management wants to know <b>where it's concentrated and what to do about it</b>.",
 "You're the intern on the analytics team. You'll do the real sequence: learn to read claims data, write the query that defines the metric, find the actionable pattern in the results, and brief an executive who has eight minutes and no patience for jargon."
 ],
 fictionNote: "Bellhaven is fictional; the data is simplified. But 30-day readmissions is a real, canonical analytics assignment - CMS penalizes hospitals for excess readmissions, every plan tracks them, and versions of these exact tasks run daily at Optum, BCBS plans, and health-system analytics teams.",
 tasks: [
 {
 title: "Learn to read claims: find the readmissions by hand",
 minutes: 25,
 skills: ["Claims data literacy", "ICD-10 basics", "Careful definition"],
 brief: "<p>Claims data is the plan's ledger of care: every hospital stay becomes a row with a member ID, dates, diagnosis codes (<b>ICD-10</b> - e.g., <code>I50.9</code> is heart failure), and the amount paid. Before anyone writes code, an analyst must be able to apply the metric definition <i>by hand</i> - because if the definition is fuzzy, the query will be confidently wrong.</p><p><b>Definition you're given:</b> a readmission is any inpatient admission occurring within 30 days of a <i>prior discharge</i> for the <i>same member</i>, for any cause.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Inpatient admissions extract (one quarter, three members)</caption><thead><tr><th>Member</th><th>Admit</th><th>Discharge</th><th>Primary dx</th><th>Meaning</th><th class=\"num\">Paid</th></tr></thead><tbody><tr><td>M-1041</td><td>Mar 2</td><td>Mar 6</td><td>I50.9</td><td>Heart failure</td><td class=\"num\">$14,200</td></tr><tr><td>M-1041</td><td>Mar 21</td><td>Mar 24</td><td>I50.9</td><td>Heart failure</td><td class=\"num\">$11,800</td></tr><tr><td>M-1041</td><td>Jun 10</td><td>Jun 13</td><td>I50.9</td><td>Heart failure</td><td class=\"num\">$12,400</td></tr><tr><td>M-2203</td><td>Apr 11</td><td>Apr 12</td><td>N39.0</td><td>Urinary tract infection</td><td class=\"num\">$6,100</td></tr><tr><td>M-2203</td><td>May 20</td><td>May 22</td><td>N39.0</td><td>Urinary tract infection</td><td class=\"num\">$7,300</td></tr><tr><td>M-3178</td><td>May 1</td><td>May 3</td><td>J18.9</td><td>Pneumonia</td><td class=\"num\">$9,800</td></tr><tr><td>M-3178</td><td>May 28</td><td>May 30</td><td>J44.1</td><td>COPD exacerbation</td><td class=\"num\">$10,600</td></tr></tbody></table></div>",
 todo: "<ol><li>Apply the definition row by row: which admissions count as readmissions? (Careful: the clock runs from the prior <b>discharge</b> date, not the admit date.)</li><li>One member has two admissions for the same condition that are <i>not</i> a readmission - which, and why?</li><li>The definition says “any cause.” One pair of admissions has different diagnoses - does it count? Why might the plan define it that way?</li></ol>",
 model: "<p><b>The readmissions:</b> M-1041's Mar 21 admission (15 days after the Mar 6 discharge) and M-3178's May 28 admission (25 days after the May 3 discharge). Two readmissions in the extract.</p><p><b>The non-readmission pair:</b> M-2203 - May 20 is 38 days after the Apr 12 discharge. Outside the window, so it's a new admission, even though it's the same diagnosis. (M-1041's Jun 10 stay is likewise ~78 days out - chronic illness, recurring admissions, but not “readmissions” by this metric.)</p><p><b>The any-cause pair:</b> M-3178 went in for pneumonia and returned with a COPD exacerbation - different codes, still counts. Plans use all-cause definitions because post-discharge deterioration often presents as a related-but-different diagnosis, and because condition-specific definitions invite gaming. Real production logic adds exclusions you'd learn on the job (planned readmissions like scheduled chemo, same-day transfers between facilities) - noticing that the simple definition has edge cases is exactly the instinct analytics managers hire for.</p>"
 },
 {
 title: "Write the SQL that computes it at scale",
 minutes: 30,
 skills: ["SQL", "Self-joins", "Metric implementation"],
 brief: "<p>Seven rows by hand; four million by query. Your team's warehouse has this table:</p><pre class=\"code\">admissions(\n member_id varchar,\n admit_dt date,\n discharge_dt date,\n dx_group varchar, -- e.g. 'Heart failure', 'COPD'\n discharge_disp varchar, -- 'Home', 'Home + home health', 'Skilled nursing'\n paid_amt numeric\n)</pre><p>The classic technique: <b>join the table to itself</b> - pair every admission with any <i>later</i> admission for the same member, then keep the pairs where the gap is ≤ 30 days. Try writing it before peeking; “close but in pseudocode” is a completely successful outcome for this task.</p>",
 todo: "<ol><li>Write a query (or careful pseudocode) that counts 30-day readmissions <b>by dx_group of the original admission</b>.</li><li>State in one sentence what could go wrong if the same discharge has <i>two</i> later admissions within 30 days - does your query count one readmission or two?</li></ol>",
 model: "<pre class=\"code\">SELECT a.dx_group,\n COUNT(DISTINCT a.member_id || a.discharge_dt) AS discharges_w_readmit,\n COUNT(*) AS readmit_events\nFROM admissions a\nJOIN admissions r\n ON r.member_id = a.member_id\n AND r.admit_dt > a.discharge_dt\n AND r.admit_dt <= a.discharge_dt + INTERVAL '30 days'\nGROUP BY a.dx_group\nORDER BY discharges_w_readmit DESC;</pre><p><b>How it works:</b> the join pairs each admission <code>a</code> with every later admission <code>r</code> for the same member inside the window. Grouping by the <i>original</i> admission's diagnosis attributes the readmission to the condition the member was first treated for - which is what the VP wants to target.</p><p><b>The double-count trap:</b> if one discharge is followed by two admissions in 30 days, the raw join yields two rows. Whether that's right depends on the question - “readmission <i>events</i>” counts both; “discharges followed by ≥1 readmission” (the standard rate's numerator) needs the <code>DISTINCT</code>. The habit of asking <i>“one per discharge or one per event?”</i> before running anything is worth more than syntax - definitions, not code, are where healthcare analytics goes wrong.</p>"
 },
 {
 title: "Find the actionable pattern - and the trap in it",
 minutes: 30,
 skills: ["Segmentation", "Opportunity sizing", "Correlation vs. causation"],
 brief: "<p>Your query runs. Segmented by condition and by <b>discharge disposition</b> (where the patient went after the hospital), the year's results:</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>30-day readmission rate by condition × discharge disposition (12 months)</caption><thead><tr><th>Condition</th><th class=\"num\">Discharges</th><th class=\"num\">Home, no services</th><th class=\"num\">Home + home health</th><th class=\"num\">Skilled nursing</th></tr></thead><tbody><tr><td>Heart failure</td><td class=\"num\">2,400</td><td class=\"num\">28%</td><td class=\"num\">14%</td><td class=\"num\">22%</td></tr><tr><td>COPD</td><td class=\"num\">1,800</td><td class=\"num\">22%</td><td class=\"num\">15%</td><td class=\"num\">20%</td></tr><tr><td>Pneumonia</td><td class=\"num\">2,100</td><td class=\"num\">15%</td><td class=\"num\">11%</td><td class=\"num\">18%</td></tr><tr><td>Joint replacement</td><td class=\"num\">1,500</td><td class=\"num\">6%</td><td class=\"num\">5%</td><td class=\"num\">9%</td></tr></tbody></table></div><p>Context: 55% of heart-failure discharges go home with no services (≈1,320/yr). A heart-failure readmission costs the plan ≈ <b>$16,000</b>. The clinical team proposes a <b>transitional-care program</b> - discharge follow-up calls plus a guaranteed cardiology visit within 7 days - costing ≈ <b>$250 per enrolled member</b>, with published evidence of cutting readmissions ~20% (relative).</p>",
 todo: "<ol><li>Name the hotspot - the single segment where the problem concentrates.</li><li>Size the opportunity: if the $250 program enrolled all 1,320 heart-failure/home/no-services members and cut their readmissions 20%, what's the annual net savings?</li><li>Now the trap: the table seems to show home health <i>causes</i> lower readmissions (14% vs 28%). Why is that conclusion not safe - and what would you propose to test it?</li></ol>",
 model: "<p><b>1 - The hotspot:</b> heart failure discharged home without services: the worst rate (28%) on the biggest base (1,320 discharges/yr) ≈ 370 readmissions - more than any other cell in the table.</p><p><b>2 - The math:</b> 20% relative reduction on 370 ≈ <b>74 avoided readmissions</b> × $16,000 ≈ <b>$1.18M saved</b>, against 1,320 × $250 = <b>$330K program cost</b> → net ≈ <b>$850K/year</b>, roughly a 3.6× return - before counting the human value of 74 people not returning to a hospital bed.</p><p><b>3 - The trap:</b> discharge disposition isn't random. Clinicians <i>choose</i> who gets home health - sicker patients may get it (biasing its rate up) or better-supported patients may accept it (biasing it down). The 28%-vs-14% gap mixes the service's effect with the selection. So don't claim causation; propose a <b>pilot</b>: enroll a randomized (or carefully matched) subset of the hotspot group in the transitional-care program and compare readmission rates against the rest. Analysts who volunteer the caveat <i>and</i> the test design are the ones executives learn to trust - this single distinction separates junior from senior analytics work.</p>"
 },
 {
 title: "Brief the executive: eight minutes, no jargon",
 minutes: 30,
 skills: ["Data storytelling", "Dashboard design", "Executive communication"],
 brief: "<p>The VP of Medical Management wants two things: a <b>five-sentence summary</b> she can forward to the chief medical officer, and a one-screen <b>dashboard sketch</b> her team will check monthly. Constraint from her assistant: <i>“If it contains the words ‘self-join’ or ‘disposition segmentation,’ she will stop reading.”</i></p>",
 todo: "<ol><li>Write the five sentences: the finding, the size of the problem, the recommended action, the expected return, and the honest caveat. Numbers in every sentence you can manage.</li><li>Sketch (boxes on paper are fine) a one-screen dashboard: what single number goes top-left? What trend? What breakdown? What would you deliberately leave out?</li></ol>",
 model: "<p><b>The five sentences:</b> “Our 30-day readmission problem is concentrated in one place: heart-failure patients sent home without follow-up support, who return to the hospital 28% of the time - about 370 readmissions and $5.9M in spend last year. Patients with home-based follow-up are readmitted at half that rate, though some of that gap reflects which patients get chosen for support rather than the support itself. We recommend piloting a transitional-care program - a follow-up call plus a cardiology visit within 7 days - for this group, at roughly $250 per member. If it delivers the ~20% reduction published elsewhere, that's about 74 avoided hospitalizations and $850K in net savings annually. A randomized pilot this quarter would confirm the effect before we scale it plan-wide.”</p><p><b>The dashboard:</b> top-left, the single owned number - <i>heart-failure 30-day readmission rate, this month vs. last year</i> - big. Beside it: readmissions and dollars, year to date. Center: 13-month trend line with the pilot start date marked. Bottom: rate by condition (the table you built, as a bar chart), and pilot vs. non-pilot group tracking once it launches. <b>Deliberately excluded:</b> member-level lists (wrong audience), more than ~5 numbers (dashboards die of clutter), and anything the VP can't influence. A dashboard is an argument about what matters - that's why designing one is an analyst's job and not a formatting chore.</p>"
 }
 ]
 },
 next: {
 courses: [
 "<b>SQL + statistics first</b> - any path: DSI courses, CS 1100-level, or free (freeCodeCamp SQL, Khan Academy stats)",
 "<b>Department of Biomedical Informatics (DBMI)</b> - one of the largest in the country; look at BIDS (Big Biomedical Data Science) offerings",
 "<b>Biostatistics courses</b> - the methods behind every clinical analysis",
 "MHS 2140 for the healthcare vocabulary that separates you from generic data candidates"
 ],
 campus: [
 "<b>Vanderbilt Bioinformatics and Technology Club (VBIT)</b>",
 "<b>VandyHacks</b> - build one health-data project at a hackathon; it becomes your interview story",
 "<b>The Wond'ry</b> innovation programs - health-tech project experience",
 "Data Science Institute workshops - free, open across schools"
 ],
 experiences: [
 "Internships the wiki tracks: <b>Optum/UnitedHealth</b>, <b>CVS InnoTech</b>, <b>Flatiron Health</b>, <b>Komodo Health</b>, <b>Tempus</b>, <b>Epic (SWE/PM/TS)</b>, <b>Oracle Health</b>, <b>BCBS of Tennessee</b>",
 "Nashville health-tech: <b>HCA ITG</b> data/IT analyst roles, <b>Embold Health</b>, <b>XSolis</b>, <b>Medalogix</b>",
 "<b>Google Data Analytics Certificate</b> + <b>Tableau Desktop Specialist</b> - the two highest-ROI credentials for this track",
 "Kaggle healthcare datasets & DrivenData competitions - portfolio pieces that double as resume lines"
 ],
 now: [
 "Build one dashboard this month from public CMS or CDC data (the wiki's “Health Data Dashboard Project” walks through it) and put the link on your resume",
 "Do 20 SQL exercises this week - sqlbolt.com or equivalent; the interview screen is usually a live query",
 "Learn to read a claims row: ICD-10, CPT, NDC - one evening with CMS.gov covers the basics",
 "Ask your advisor for the Epic and Optum interview-prep notes and any alumni in health-tech product roles"
 ],
 advisorNote: "The advising wiki lists 30+ data and health-tech opportunities - from Epic and Optum internships to Nashville startups most students have never heard of - plus alumni working in health-tech product, strategy, and analytics who take coffee chats. If the SQL task was fun rather than painful, tell your advisor: that reaction is the actual aptitude test."
 }
});
