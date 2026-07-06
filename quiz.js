/* Track: Healthcare Finance & Investing */
window.EXPLORER_TRACKS = window.EXPLORER_TRACKS || [];
window.EXPLORER_TRACKS.push({
 id: "finance-investing",
 name: "Finance & Investing",
 short: "Every hospital merger, biotech IPO, and clinic roll-up has analysts behind it building the models. Healthcare runs on capital - someone has to price it.",
 color: "#5e7d3f",
 wash: "#eaf0e2",
 glyph: "ledger",
 entryTitle: "Entry role: Analyst",
 tagline: "Investment banks advise healthcare companies on mergers and raising money; private equity and venture firms buy or back them. Analysts in both build the financial models, run the valuations, and write the memos that decide where billions flow - and healthcare is one of the largest, busiest sectors in all of finance.",
 stats: [
 { k: "Entry job titles", v: "IB Analyst, PE/VC Analyst" },
 { k: "Recruiting starts", v: "Sophomore spring for junior summer" },
 { k: "Signature deliverable", v: "The model and the memo" },
 { k: "Nashville advantage", v: "A genuine healthcare-PE hub" }
 ],
 field: {
 what: [
 "Healthcare never stops transacting: hospital systems merge, private equity firms buy physician practices and roll them into platforms, venture funds back digital-health startups, and drug companies raise billions for pipelines. Every one of those deals needs people to answer two questions with actual rigor: <b>what is this business worth, and what could go wrong?</b>",
 "On the <b>investment banking</b> side, you advise companies doing deals - building valuation models, drafting pitch books, and managing the blizzard of analysis a live transaction generates. On the <b>investing</b> side (private equity, growth equity, venture), you're the buyer: screening companies, doing due diligence, and writing the investment memo that convinces a committee to commit capital. Both start with the same craft: financial statements, Excel, and disciplined skepticism.",
 "Healthcare finance rewards domain knowledge unusually fast. A generalist can model cash flows; you have to also know that a payer contract renewal, a Medicare rate change, or a single retiring physician can move a valuation by millions. That intersection - finance craft plus healthcare fluency - is exactly what firms struggle to hire, and it's very buildable at Vanderbilt. Nashville is arguably the healthcare-services capital of the country: HCA was founded here, and a dense cluster of healthcare PE firms and investment banks operates within two miles of campus."
 ],
 misconception: "That you need to be a math genius. Deal math is arithmetic - multiplication and division on a good day. What the job actually demands is stamina, obsessive attention to detail (a wrong number in a live deal is a career event), and genuine curiosity about how businesses make money. The bar is carefulness, not calculus.",
 titles: [
 { title: "Investment Banking Analyst - Healthcare", desc: "The classic entry role at Goldman, J.P. Morgan, Leerink, Cain Brothers, TripleTree. Two years of models, pitch books, and live deals." },
 { title: "Private Equity Analyst / Associate", desc: "Buy-side at firms like Shore Capital or Heritage Group: screen practices, run diligence, support portfolio companies post-close." },
 { title: "Venture Capital Analyst - Health", desc: "Source and evaluate digital-health and health-services startups at funds like Frist Cressey or Flare Capital. More qualitative, network-driven." },
 { title: "Corporate Finance / FP&A Analyst (health system)", desc: "Inside HCA, Lifepoint, or VUMC: budgeting, capital planning, M&A support. Saner hours, same toolkit." }
 ],
 day: [
 { time: "8:45a", what: "Scan overnight: a competitor platform just bought a 6-clinic group - pull the multiple if it leaked." },
 { time: "9:30a", what: "Update the dermatology model with the seller's new volume data; EBITDA bridge moves by $400K." },
 { time: "11:00a", what: "Diligence call with the target's billing manager about that payer contract renewal." },
 { time: "1:00p", what: "Build the payer-mix sensitivity table the VP asked for - what happens if the big contract reprices down 5%?" },
 { time: "3:00p", what: "Draft two pages of the investment memo: market section and risk section." },
 { time: "5:00p", what: "Turn partner comments on the memo; triple-check every number against the model." },
 { time: "7:00p", what: "On a live deal this could go late; in a quiet week you're at dinner. Deal flow sets the rhythm." }
 ],
 employers: {
 nashville: ["Heritage Group", "Frist Cressey Ventures", "Council Capital", "Petra Capital Partners", "Cressey & Company", "Brentwood Capital Advisors", "VMG Health", "Martin Ventures", "Jumpstart Health Investors", "HCA (corporate finance)"],
 national: ["Goldman Sachs Healthcare IB", "J.P. Morgan Healthcare IB", "Morgan Stanley", "Leerink Partners", "Cain Brothers / KeyBanc", "TripleTree", "Houlihan Lokey", "Jefferies", "Piper Sandler", "William Blair", "Ziegler", "Shore Capital Partners", "Welsh Carson", "General Atlantic", "Frazier Healthcare", "Bain Capital (healthcare)", "Kaufman Hall"]
 },
 thrive: [
 "You get satisfaction from a spreadsheet where every number <b>ties</b>",
 "You want a concrete verdict at the end of your work: a price, a yes, a no",
 "Pressure and late nights on a live deal sound exciting at least some of the time",
 "You read business news for fun, or could learn to",
 "You want optionality - two years of deal experience opens PE, VC, corporate strategy, and business school doors"
 ]
 },
 project: {
 title: "Project Harmony: should we buy this dermatology group?",
 role: "Analyst, Cumberland Ridge Capital (a fictional Nashville healthcare private equity firm)",
 setting: "Live deal, 3 weeks to an indicative offer",
 duration: "≈ 2 hours",
 premise: [
 "A banker just sent your firm a teaser: <b>Delta Dermatology Partners</b>, a 12-clinic dermatology group across Tennessee and Alabama, is for sale. Your fund invests in exactly this kind of business - physician practices that can anchor a regional “platform” and grow by acquiring smaller clinics. The partners like the sector. Your job is to figure out whether they should like <i>this company</i>, and at what price.",
 "You'll do what a first-year PE analyst actually does on a new deal: normalize the financials, triangulate a valuation, hunt for red flags, and write the memo. Numbers are simplified but the logic is the real thing."
 ],
 fictionNote: "Delta Dermatology and Cumberland Ridge Capital are fictional. The valuation benchmarks are real, though: physician practices have been among the most active categories in healthcare private equity, with primary care historically trading around 4-7× EBITDA and specialty groups around 6-12× - exactly the arbitrage that drives roll-up strategies at real Nashville-area firms.",
 tasks: [
 {
 title: "Find the real earnings: build adjusted EBITDA",
 minutes: 30,
 skills: ["Financial statements", "EBITDA & add-backs", "Excel thinking"],
 brief: "<p>Buyers don't value revenue or net income - they value <b>EBITDA</b> (earnings before interest, taxes, depreciation, and amortization), a proxy for the cash the business throws off. And they value <b>adjusted</b> EBITDA: earnings normalized for one-time costs and owner quirks that won't exist after the sale. Finding those adjustments - honestly - is the analyst's first job on any deal.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Delta Dermatology Partners - summary income statement (last twelve months, $000s)</caption><thead><tr><th>Line item</th><th class=\"num\">Amount</th></tr></thead><tbody><tr><td>Revenue</td><td class=\"num\">48,000</td></tr><tr><td>Physician compensation & benefits</td><td class=\"num\">(19,200)</td></tr><tr><td>Clinical staff wages</td><td class=\"num\">(8,600)</td></tr><tr><td>Medical supplies & drugs</td><td class=\"num\">(4,300)</td></tr><tr><td>Rent & facilities (12 clinics)</td><td class=\"num\">(2,900)</td></tr><tr><td>Billing & administration</td><td class=\"num\">(5,000)</td></tr><tr><td>One-time EMR migration project</td><td class=\"num\">(700)</td></tr><tr><td>Depreciation & amortization</td><td class=\"num\">(1,100)</td></tr><tr><td>Interest expense</td><td class=\"num\">(600)</td></tr><tr><td><b>Pre-tax income</b></td><td class=\"num\"><b>5,600</b></td></tr></tbody></table></div><p>Diligence note from the banker: the founding physician pays herself <b>$800K above</b> the market rate a replacement dermatologist would earn.</p>",
 todo: "<ol><li>Compute <b>reported EBITDA</b>: start from pre-tax income and add back interest, depreciation & amortization.</li><li>Compute <b>adjusted EBITDA</b>: add back genuinely one-time or non-recurring items. Decide - does the EMR project qualify? Does the excess owner compensation?</li><li>Compute the adjusted EBITDA <b>margin</b> (÷ revenue). Specialty practices typically run 15-25% - where does Delta sit?</li></ol>",
 hint: "Add-backs must pass the question: “Will the new owner truly not pay this cost going forward?” A one-time system migration passes. Above-market owner pay passes <i>if</i> a replacement really would cost $800K less. “Marketing we probably won't do again” does not pass - sellers try that one constantly.",
 model: "<p><b>Reported EBITDA:</b> 5,600 + 600 interest + 1,100 D&A = <b>$7.3M</b>.</p><p><b>Adjusted EBITDA:</b> 7,300 + 700 (one-time EMR migration) + 800 (excess owner comp, assuming a market-rate replacement) = <b>$8.8M</b>.</p><p><b>Margin:</b> 8.8 / 48.0 ≈ <b>18.3%</b> - comfortably inside the healthy 15-25% band for specialty groups; neither a red flag nor best-in-class.</p><p><b>The habit that matters:</b> you wrote each adjustment down with its justification. In a real memo, every add-back gets a sentence of defense, because the investment committee will attack exactly those numbers - each $1 of dubious add-back inflates the price by $8-9 at deal multiples. That's why sell-side EBITDA is always “adjusted” upward and buyers exist to argue it back down.</p>"
 },
 {
 title: "Put a price on it: valuation by comparables",
 minutes: 30,
 skills: ["Valuation multiples", "Comparable analysis", "Sensitivity thinking"],
 brief: "<p>The workhorse valuation for private healthcare deals is <b>comparable transactions</b>: what have buyers recently paid for similar businesses, expressed as a multiple of EBITDA? Multiples aren't magic numbers - they move with growth, scale, payer mix, and how badly buyers want the sector. Your job is to pick a defensible range, not a false-precision point.</p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Benchmark: recent physician-practice transaction multiples (EV / adjusted EBITDA)</caption><thead><tr><th>Segment</th><th class=\"num\">Typical range</th><th>What pushes you higher in the range</th></tr></thead><tbody><tr><td>Primary care practices</td><td class=\"num\">4-7×</td><td>Scale, value-based contracts</td></tr><tr><td>Specialty groups (derm, ortho, GI…)</td><td class=\"num\">6-12×</td><td>Platform size, growth, ancillary revenue</td></tr><tr><td>Small “add-on” clinics (1-3 docs)</td><td class=\"num\">3-6×</td><td>Bought by platforms, not funds</td></tr></tbody></table></div><p>Context: Delta is a 12-clinic <b>platform-scale</b> specialty group growing revenue ~8%/year, with the diligence questions from Task 3 still open.</p>",
 todo: "<ol><li>Choose low / base / high multiples for Delta from the specialty range, and justify each in a phrase.</li><li>Multiply by your adjusted EBITDA from Task 1 to get an <b>enterprise value (EV)</b> range.</li><li>Explain in one sentence why your fund might happily pay 9× for Delta while paying only 5× for a two-doctor clinic down the road - the logic that powers every roll-up strategy.</li></ol>",
 model: "<p><b>A defensible range:</b> low 7× (platform scale, but payer-concentration risk unresolved), base 9× (solid mid-range specialty platform with growth), high 11× (if diligence comes back clean and a competitive auction develops).</p><p><b>On $8.8M adjusted EBITDA:</b> EV ≈ <b>$62M / $79M / $97M</b>.</p><p><b>The roll-up logic:</b> a platform bought at 9× can acquire small add-on clinics at 4-5× and, once integrated, have them valued inside the platform at the platform's multiple - buying dollars of EBITDA cheap and marking them up by consolidation. That “multiple arbitrage,” plus real operating synergies (shared billing, purchasing, scheduling), is the engine of physician-practice private equity - and understanding it is table stakes for interviews at any healthcare PE firm.</p>"
 },
 {
 title: "Hunt for what kills the deal: diligence red flags",
 minutes: 30,
 skills: ["Due diligence", "Risk assessment", "Skeptical reading"],
 brief: "<p>Valuation tells you what the business is worth <i>if the story is true</i>. Diligence asks whether it's true. The associate hands you three exhibits from the data room and one instruction: <i>“Find what's going to hurt us.”</i></p>",
 data: "<div class=\"data-block\"><table class=\"d\"><caption>Exhibit A - Revenue by payer</caption><thead><tr><th>Payer</th><th class=\"num\">% of revenue</th><th>Note</th></tr></thead><tbody><tr><td>BlueShield Commercial</td><td class=\"num\">45%</td><td>Contract renews in 14 months</td></tr><tr><td>Medicare</td><td class=\"num\">28%</td><td>Fee schedule set by CMS</td></tr><tr><td>Other commercial</td><td class=\"num\">17%</td><td>Six smaller contracts</td></tr><tr><td>Self-pay / cosmetic</td><td class=\"num\">10%</td><td>Elective, cash-pay</td></tr></tbody></table><table class=\"d\"><caption>Exhibit B - Revenue by physician (top of 18 total)</caption><thead><tr><th>Physician</th><th class=\"num\">% of revenue</th><th class=\"num\">Age</th></tr></thead><tbody><tr><td>Dr. A (founder)</td><td class=\"num\">24%</td><td class=\"num\">63</td></tr><tr><td>Dr. B</td><td class=\"num\">16%</td><td class=\"num\">58</td></tr><tr><td>Dr. C</td><td class=\"num\">12%</td><td class=\"num\">41</td></tr><tr><td>Remaining 15 physicians</td><td class=\"num\">48%</td><td class=\"num\"> - </td></tr></tbody></table><table class=\"d\"><caption>Exhibit C - Same-clinic revenue growth</caption><thead><tr><th>Source of growth</th><th class=\"num\">Contribution to 8% growth</th></tr></thead><tbody><tr><td>Existing 11 clinics (same-store)</td><td class=\"num\">+1.5%</td><td></td></tr><tr><td>New Huntsville clinic (opened last year)</td><td class=\"num\">+6.5%</td><td></td></tr></tbody></table></div>",
 todo: "<ol><li>Identify the <b>three biggest risks</b> hiding in these exhibits. For each: what it is, why it threatens the valuation, and what you'd request or negotiate to address it.</li><li>Decide: are these deal-killers, price-reducers, or structure-shapers?</li></ol>",
 model: "<p><b>Risk 1 - Payer concentration.</b> 45% of revenue rides on one commercial contract that reprices in 14 months, right after closing. A 10% rate cut on that contract cuts revenue ~4.5% and, since costs barely move, could erase ~25% of EBITDA. <i>Ask for:</i> the contract, its rate history, and the payer's ASC/office steering policies; consider an earnout tied to the renewal.</p><p><b>Risk 2 - Key-person concentration.</b> Two physicians in their late 50s/60s produce 40% of revenue. If Dr. A retires post-close, a quarter of collections walks out the door. <i>Ask for:</i> multi-year employment agreements with meaningful rollover equity, non-competes, and a recruiting plan - this is usually a structure-shaper, not a killer.</p><p><b>Risk 3 - Growth quality.</b> “8% growth” is really 1.5% same-store plus one new clinic. The base business is nearly flat, so paying a growth multiple for it is dangerous. <i>Ask for:</i> clinic-level P&Ls, the Huntsville ramp curve, and the pipeline of future sites - then consider valuing base and new-clinic growth separately.</p><p><b>Verdict:</b> none are automatic deal-killers; together they justify anchoring at the low end of your range (7-8×) and structuring protections. Notice the pattern - every exhibit looked fine as an average and alarming in its detail. Averages are where risk hides; diligence is the art of disaggregating.</p>"
 },
 {
 title: "Write the one-page investment memo",
 minutes: 30,
 skills: ["Investment writing", "Synthesis", "Committee communication"],
 brief: "<p>Monday's pipeline meeting decides whether Cumberland Ridge submits an indicative offer. The partners will read one page. Investment memos have a rigid, learnable anatomy - and writing one forces the discipline that separates analysis from opinion: every claim needs a number, every risk needs a response.</p>",
 todo: "<ol><li>Write the memo with these six sections, 1-3 sentences each: <b>Thesis</b> (why this deal, in one sentence) · <b>Business</b> (what it is, size, margin) · <b>Market</b> (why dermatology, why the Southeast) · <b>Valuation</b> (your range and where you'd anchor) · <b>Key risks & mitigants</b> (your top three from Task 3) · <b>Recommendation</b> (proceed / pass, with conditions).</li><li>Rule: every sentence must contain either a number or a decision. Delete anything that's neither.</li></ol>",
 model: "<p><b>Thesis:</b> Platform-scale dermatology group in a consolidating specialty - a chance to buy $8.8M of adjusted EBITDA at a mid-range multiple and grow through add-on acquisitions at half the entry multiple.</p><p><b>Business:</b> 12 clinics, TN/AL; $48M revenue, $8.8M adjusted EBITDA (18.3% margin); 18 physicians.</p><p><b>Market:</b> Dermatology demand grows with demographics and stays largely outpatient; the Southeast remains fragmented, with 30+ independent practices in Delta's footprint as add-on targets.</p><p><b>Valuation:</b> Comparable specialty platforms trade 6-12×; we see $62-97M EV and would anchor an indicative bid near <b>8× / $70M</b> pending diligence.</p><p><b>Key risks & mitigants:</b> (1) 45% payer concentration with a 14-month renewal - earnout tied to renewal terms; (2) two senior physicians = 40% of revenue - rollover equity and employment agreements; (3) same-store growth of only 1.5% - underwrite base business flat, value new-clinic pipeline separately.</p><p><b>Recommendation:</b> Proceed to indicative offer at 8× with the three protections above; walk if the BlueShield contract shows repricing risk beyond 5%.</p><p><b>Compare your version:</b> the most common miss is a thesis that describes the company instead of stating why <i>this buyer</i> wins by owning it. “Nice business” is not a thesis; “cheap EBITDA plus multiple arbitrage” is.</p>"
 }
 ]
 },
 next: {
 courses: [
 "<b>Financial Economics or Corporate Finance</b> coursework - accounting and valuation are the screen",
 "<b>MHS 2140 (Health Care in the U.S.)</b> - payer mix and reimbursement fluency is your differentiator vs. other finance candidates",
 "<b>Economics electives</b>: health economics, industrial organization",
 "Owen undergrad-accessible business courses; consider the Financial Economics or Corporate Strategy minor"
 ],
 campus: [
 "<b>Vanderbilt Investment / Finance Club</b> - stock pitches and modeling reps",
 "<b>Girls Who Invest</b> and <b>SEO Career</b> - structured pipelines into buy-side and banking for eligible students",
 "<b>BLK Capital Management</b> - student-run hedge fund experience",
 "Healthcare case competitions - a healthcare-angle stock pitch stands out instantly"
 ],
 experiences: [
 "Healthcare IB summer analyst programs: <b>Goldman, J.P. Morgan, Morgan Stanley, Leerink, Cain Brothers, Houlihan Lokey, TripleTree, Ziegler</b> - sophomore-spring applications",
 "Nashville buy-side internships: <b>Shore Capital PE Summer Analyst</b>, <b>Heritage Group</b>, <b>Council Capital</b>, <b>Petra Capital</b>, <b>Brentwood Capital Advisors</b>",
 "Early-insight programs: Goldman Possibilities, J.P. Morgan Early Insight, Morgan Stanley Early Insights - freshman/sophomore friendly",
 "<b>VMG Health</b> (Nashville) - healthcare valuation analyst roles, a underrated on-ramp to the whole sector"
 ],
 now: [
 "Do a free Forage IB simulation (J.P. Morgan or Bank of America) this week - bankers actually notice it on freshman resumes",
 "Learn the three financial statements cold, then build one practice LBO from a free Wall Street Prep/Breaking Into Wall Street sample",
 "Follow one healthcare deal in the news end-to-end and write a half-page: who bought whom, at what multiple, and why",
 "Ask your advisor which Vanderbilt alumni are at Leerink, Cain Brothers, and the Nashville PE funds - warm intros beat cold applications"
 ],
 advisorNote: "The advising wiki tracks 25+ healthcare IB and PE internship listings (including every major healthcare bank's summer analyst program), Nashville's full buy-side landscape, and alumni contacts in several of these firms. Banking recruiting timelines are brutal - sophomore spring for junior summer - so if this track clicked, get the timeline from your advisor now."
 }
});
