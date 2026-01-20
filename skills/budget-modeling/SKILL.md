# Budget Modeling Skill

## Skill Overview

**Name:** budget-modeling  
**Purpose:** Build, maintain, and analyze project budgets and financial models  
**Primary Tools:** File creation (xlsx), perplexity_research, web_search  

## When to Use This Skill

Use budget-modeling when:
- Creating initial project budget estimates
- Refining cost estimates with research
- Modeling financial scenarios
- Analyzing pricing sensitivity
- Projecting cash flow

## Budget Structure

### Master Budget Categories

```
PROJECT BUDGET
├── Pre-Launch Costs (One-Time)
│   ├── Site Selection & Due Diligence
│   ├── Legal & Entity Formation
│   ├── Permits & Approvals
│   ├── Marketing & Recruitment
│   └── Training & Preparation
├── Capital Costs (One-Time)
│   ├── Infrastructure - Shelters
│   ├── Infrastructure - Water Systems
│   ├── Infrastructure - Sanitation
│   ├── Infrastructure - Power
│   ├── Technology - Communication
│   ├── Technology - Devices
│   ├── Safety Equipment
│   └── Community Equipment
├── Operating Costs (Annual)
│   ├── Staffing
│   ├── Food & Consumables
│   ├── Logistics & Transport
│   ├── Maintenance & Repairs
│   ├── Insurance
│   ├── Communication Services
│   └── Administration
└── Contingency
    ├── Capital Contingency (% of capital)
    └── Operating Contingency (% of operating)
```

## Cost Research Workflow

### Step 1: Identify Cost Line Items
List all anticipated costs by category

### Step 2: Research Unit Costs
For each line item:
```
web_search("[item] cost price")
web_search("[item] bulk pricing")
```

### Step 3: Validate with Comparables
```
perplexity_research("What does it cost to operate a wilderness 
education program for [X] people?")
```

### Step 4: Apply Assumptions
Document assumptions for each estimate:
- Source of estimate
- Date of estimate
- Quantity assumptions
- Location factors
- Currency conversion

### Step 5: Build Scenarios
- Low estimate (optimistic)
- Mid estimate (expected)
- High estimate (conservative)

## Budget Template

```markdown
# Project Budget: [Version/Date]

## Summary

| Category | Low | Mid | High |
|----------|-----|-----|------|
| Pre-Launch | €X | €X | €X |
| Capital | €X | €X | €X |
| Operating (Year 1) | €X | €X | €X |
| Contingency | €X | €X | €X |
| **TOTAL** | **€X** | **€X** | **€X** |

| Metric | Low | Mid | High |
|--------|-----|-----|------|
| Per Family | €X | €X | €X |
| Per Person | €X | €X | €X |

## Detailed Budget

### Pre-Launch Costs

| Item | Qty | Unit Cost | Low | Mid | High | Source |
|------|-----|-----------|-----|-----|------|--------|
| Site visits | 3 | €3,000 | €6,000 | €9,000 | €12,000 | Estimate |
| Legal/entity | 1 | €15,000 | €10,000 | €15,000 | €25,000 | [Source] |
| [etc.] | | | | | | |
| **Subtotal** | | | **€X** | **€X** | **€X** | |

### Capital Costs

| Item | Qty | Unit Cost | Low | Mid | High | Source |
|------|-----|-----------|-----|-----|------|--------|
| Yurts | 20 | €5,000 | €80,000 | €100,000 | €120,000 | [Vendor] |
| Water system | 2 | €3,000 | €4,000 | €6,000 | €8,000 | [Vendor] |
| [etc.] | | | | | | |
| **Subtotal** | | | **€X** | **€X** | **€X** | |

### Operating Costs (Annual)

| Item | Qty | Unit Cost | Low | Mid | High | Source |
|------|-----|-----------|-----|-----|------|--------|
| Expedition Leader | 2 | €50,000 | €80,000 | €100,000 | €120,000 | [Benchmark] |
| Food (per person/year) | 80 | €4,000 | €240,000 | €320,000 | €400,000 | [Calculation] |
| [etc.] | | | | | | |
| **Subtotal** | | | **€X** | **€X** | **€X** | |

### Contingency

| Item | Basis | Rate | Low | Mid | High |
|------|-------|------|-----|-----|------|
| Capital | Capital costs | 15% | €X | €X | €X |
| Operating | Operating costs | 10% | €X | €X | €X |
| **Subtotal** | | | **€X** | **€X** | **€X** |

## Assumptions

### General
- Currency: EUR
- Location: [TBD]
- Duration: 365 days
- Participants: 80 (20 families)
- Staff: [TBD]

### Specific Assumptions
| Item | Assumption | Basis |
|------|------------|-------|
| Food cost/person/day | €10-15 | Comparable programs |
| Staff salary | €40,000-60,000 | NOLS benchmarks |
| [etc.] | | |

## Risks to Budget

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Currency fluctuation | ±10% | Medium | Hedge if >6 months out |
| Permit delays | +€50k | Medium | Start permit process early |
| [etc.] | | | |

## Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | [Date] | Initial draft | [Name] |
```

## Scenario Modeling

### Scenario Types

1. **Base Case** - Most likely assumptions
2. **Conservative** - Higher costs, lower revenue
3. **Optimistic** - Lower costs, full enrollment
4. **Partial Enrollment** - 50%, 75% enrollment
5. **Early Termination** - 6-month shutdown scenario
6. **Growth** - Second year with returning infrastructure

### Scenario Template

```markdown
# Scenario: [Name]

## Assumptions Changed
| Variable | Base Case | This Scenario | Impact |
|----------|-----------|---------------|--------|
| Enrollment | 20 families | 15 families | -€X revenue |
| [etc.] | | | |

## Financial Impact
| Metric | Base Case | This Scenario | Difference |
|--------|-----------|---------------|------------|
| Total Revenue | €X | €X | €X |
| Total Costs | €X | €X | €X |
| Net Position | €X | €X | €X |
| Per-Family Price | €X | €X | €X |

## Break-Even Analysis
- Break-even enrollment: [X] families
- Break-even price: €[X] per family

## Mitigation Options
1. [Option with impact]
2. [Option with impact]
```

## Research Queries for Budget

### Comparable Costs
```
"wilderness education program costs per student"
"NOLS semester course price cost"
"ecovillage operating budget"
"off-grid community costs per person"
```

### Specific Item Costs
```
"[item] price 2024 2025"
"[item] bulk wholesale pricing"
"[service] rates [region]"
```

### Salary Benchmarks
```
"wilderness guide salary outdoor educator"
"expedition leader salary adventure tourism"
"remote site manager salary"
```

## Quality Checklist

- [ ] All cost categories identified
- [ ] Each line item has source documented
- [ ] Low/mid/high ranges for uncertainty
- [ ] Assumptions clearly stated
- [ ] Scenarios modeled (min. 3)
- [ ] Break-even calculated
- [ ] Contingency appropriate (10-20%)
- [ ] Currency and date noted
- [ ] Risks identified with mitigation
