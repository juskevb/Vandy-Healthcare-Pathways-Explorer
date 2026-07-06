/* Fit quiz - each answer adds weight toward one or more tracks.
 Track ids: strategy-consulting, finance-investing, operations-administration,
 data-analytics-technology, research-scientific-affairs, health-policy-population-health */
window.EXPLORER_QUIZ = [
 {
 q: "It's 11pm and you're weirdly energized by an assignment. Which one is it?",
 opts: [
 { t: "Cracking open a messy, ambiguous question no one has structured yet", w: { "strategy-consulting": 3, "health-policy-population-health": 1 } },
 { t: "A spreadsheet where the numbers finally tie out", w: { "finance-investing": 3, "data-analytics-technology": 1 } },
 { t: "Reorganizing a group project so it actually runs on time", w: { "operations-administration": 3 } },
 { t: "A dataset with a pattern hiding in it", w: { "data-analytics-technology": 3, "research-scientific-affairs": 1 } }
 ]
 },
 {
 q: "Which headline would you actually click first?",
 opts: [
 { t: "“Why this hospital chain is betting big on outpatient surgery”", w: { "strategy-consulting": 2, "operations-administration": 1, "finance-investing": 1 } },
 { t: "“Inside the $9B deal reshaping kidney care”", w: { "finance-investing": 3 } },
 { t: "“New trial data could change how heart failure is treated”", w: { "research-scientific-affairs": 3 } },
 { t: "“What happens when a state extends postpartum Medicaid coverage”", w: { "health-policy-population-health": 3 } }
 ]
 },
 {
 q: "Pick the compliment you'd most want on a performance review.",
 opts: [
 { t: "“Gives the clearest recommendation in the room”", w: { "strategy-consulting": 3 } },
 { t: "“Nothing gets past them - flawless detail under pressure”", w: { "finance-investing": 3 } },
 { t: "“People and processes just work better around them”", w: { "operations-administration": 3 } },
 { t: "“Translates complexity so anyone can act on it”", w: { "data-analytics-technology": 2, "health-policy-population-health": 1, "research-scientific-affairs": 1 } }
 ]
 },
 {
 q: "Your ideal relationship with science and medicine:",
 opts: [
 { t: "I love the science itself - trials, mechanisms, evidence", w: { "research-scientific-affairs": 3, "data-analytics-technology": 1 } },
 { t: "I care about health, but I'd rather work the business side", w: { "strategy-consulting": 2, "finance-investing": 2 } },
 { t: "I want to make the system fairer for whole communities", w: { "health-policy-population-health": 3 } },
 { t: "I want hospitals and clinics to simply run better for patients", w: { "operations-administration": 3 } }
 ]
 },
 {
 q: "Which tool would you rather get genuinely good at?",
 opts: [
 { t: "A slide deck that convinces a CEO", w: { "strategy-consulting": 3 } },
 { t: "A financial model with a valuation at the bottom", w: { "finance-investing": 3 } },
 { t: "SQL and a dashboard everyone checks each morning", w: { "data-analytics-technology": 3 } },
 { t: "A one-page brief a legislator reads before a vote", w: { "health-policy-population-health": 3 } }
 ]
 },
 {
 q: "How do you feel about ambiguity?",
 opts: [
 { t: "Love it - give me the vague problem and three weeks", w: { "strategy-consulting": 3, "health-policy-population-health": 1 } },
 { t: "Fine, as long as the numbers are knowable in the end", w: { "finance-investing": 2, "data-analytics-technology": 2 } },
 { t: "I'd rather improve a concrete thing I can walk through and observe", w: { "operations-administration": 3 } },
 { t: "I trust the evidence - design the study, run it, read the result", w: { "research-scientific-affairs": 3 } }
 ]
 },
 {
 q: "Pick a room to spend your Tuesday afternoon in.",
 opts: [
 { t: "A client boardroom, presenting findings", w: { "strategy-consulting": 2, "finance-investing": 1 } },
 { t: "A hospital hallway, watching where patients wait", w: { "operations-administration": 3 } },
 { t: "A quiet desk with two monitors and a big dataset", w: { "data-analytics-technology": 3 } },
 { t: "A committee hearing on next year's health budget", w: { "health-policy-population-health": 3 } }
 ]
 },
 {
 q: "Ten years from now, the win that would feel best:",
 opts: [
 { t: "Health systems across the country adopted a strategy I shaped", w: { "strategy-consulting": 3 } },
 { t: "I backed companies that changed how care gets delivered", w: { "finance-investing": 3 } },
 { t: "A treatment reached patients faster - and payers actually covered it", w: { "research-scientific-affairs": 3 } },
 { t: "A measurable drop in preventable harm for a whole population", w: { "health-policy-population-health": 2, "operations-administration": 1, "data-analytics-technology": 1 } }
 ]
 }
];
