# Wilderness Year Expedition - Mission Planning System

## Project Overview

This is an autonomous multi-agent planning system for designing and launching a year-long wilderness community expedition for 20 families (~80 people). The system supports 10 human roles with dedicated AI agents that conduct background research, synthesize intelligence, and prepare actionable briefings.

**Codename:** Project Tracker (inspired by Boyd Varty's "Lion Tracker's Guide to Life")

**Mission:** Design, permit, fund, build, and operate a 365-day wilderness immersion experience structured like a NASA mission - with defined roles, scientific purpose, modern connectivity, and logistics enabling remote work while living off-grid.

---

## Human Team Structure (10 Roles)

| Role | Responsibility | Supporting Agent(s) |
|------|----------------|---------------------|
| **Mission Commander** | Overall coordination, stakeholder management, go/no-go decisions | `mission-control-agent` |
| **GIS & Site Selection Lead** | Location scouting, terrain analysis, access routes | `gis-scout-agent` |
| **Legal & Governmental Affairs** | Permits, regulations, land agreements, liability | `legal-navigator-agent` |
| **Finance & Business Development** | Budget, funding, pricing, investor relations | `finance-analyst-agent` |
| **Infrastructure Engineer** | Water, waste, shelter, power systems | `infrastructure-engineer-agent` |
| **Operations & Logistics Lead** | Supply chain, transport, resupply, equipment | `logistics-planner-agent` |
| **Education & Science Director** | Curriculum, citizen science, research partnerships | `education-curator-agent` |
| **Community & Family Relations** | Family selection, governance, conflict resolution | `community-builder-agent` |
| **Safety & Medical Officer** | Risk assessment, emergency protocols, medical | `safety-officer-agent` |
| **Technology & Communications** | Connectivity, devices, data systems | `tech-ops-agent` |

---

## Agent Operating Protocols

### Research Hierarchy

```
Level 1: Quick Search (web_search, perplexity_ask)
   ↓ If insufficient
Level 2: Deep Research (perplexity_research, multi-tier-research)
   ↓ If cross-validation needed
Level 3: Multi-Provider Research (research_all - Perplexity + OpenAI + Gemini)
```

### Agent Communication

Agents communicate through structured output files in `/outputs/`:
- `/outputs/briefings/` - Daily/weekly summaries for human leads
- `/outputs/research/` - Deep dive documents
- `/outputs/alerts/` - Time-sensitive findings
- `/outputs/decisions/` - Decision packages requiring human input

### Output Standards

All agent outputs must include:
1. **Executive Summary** (3-5 bullet points)
2. **Confidence Level** (High/Medium/Low with reasoning)
3. **Sources** (with links where available)
4. **Action Items** (specific, assignable tasks)
5. **Dependencies** (what other work packages this affects)
6. **Next Research Questions** (for autonomous follow-up)

---

## Work Package Structure

| WP# | Name | Lead Role | Agent | Status |
|-----|------|-----------|-------|--------|
| WP1 | Site Selection & GIS | GIS Lead | gis-scout | Planning |
| WP2 | Legal & Regulatory Framework | Legal Lead | legal-navigator | Planning |
| WP3 | Financial Model & Funding | Finance Lead | finance-analyst | Planning |
| WP4 | Infrastructure Design | Engineer | infrastructure-engineer | Planning |
| WP5 | Operations & Logistics | Ops Lead | logistics-planner | Planning |
| WP6 | Education & Citizen Science | Education Dir | education-curator | Planning |
| WP7 | Community Design & Governance | Community Lead | community-builder | Planning |
| WP8 | Safety & Medical Systems | Safety Officer | safety-officer | Planning |
| WP9 | Technology & Communications | Tech Lead | tech-ops | Planning |
| WP10 | Integration & Launch Planning | Mission Commander | mission-control | Planning |

---

## Directory Structure

```
/wilderness-expedition-project/
├── CLAUDE.md                    # This file - main configuration
├── agents/                      # Agent definition files
│   ├── mission-control.md
│   ├── gis-scout.md
│   ├── legal-navigator.md
│   ├── finance-analyst.md
│   ├── infrastructure-engineer.md
│   ├── logistics-planner.md
│   ├── education-curator.md
│   ├── community-builder.md
│   ├── safety-officer.md
│   └── tech-ops.md
├── skills/                      # Specialized capability definitions
│   ├── deep-research/SKILL.md
│   ├── gis-analysis/SKILL.md
│   ├── regulatory-search/SKILL.md
│   ├── budget-modeling/SKILL.md
│   ├── supplier-research/SKILL.md
│   └── stakeholder-mapping/SKILL.md
├── work-packages/               # Detailed work package specs
│   ├── WP1-site-selection.md
│   ├── WP2-legal-framework.md
│   ├── WP3-financing.md
│   ├── WP4-infrastructure.md
│   ├── WP5-operations.md
│   ├── WP6-education.md
│   ├── WP7-community.md
│   ├── WP8-safety.md
│   ├── WP9-technology.md
│   └── WP10-integration.md
├── research-queue/              # Pending research tasks
├── outputs/                     # All agent outputs
│   ├── briefings/
│   ├── research/
│   ├── reports/
│   ├── maps/
│   ├── alerts/
│   └── decisions/
└── data/                        # Reference data, databases
    ├── contacts/
    ├── suppliers/
    ├── regulations/
    └── comparables/
```

---

## Tool Usage Guidelines

### For Quick Facts & Current Information
```
web_search(query="specific question")
```

### For Conversational Research
```
perplexity:perplexity_ask(messages=[{role: "user", content: "question"}])
```

### For Deep Research (Single Provider)
```
perplexity:perplexity_research(messages=[...], strip_thinking=true)
```

### For Complex Analysis
```
perplexity:perplexity_reason(messages=[...], strip_thinking=true)
```

### For Multi-Provider Cross-Validated Research
```
# First load credentials
multi-tier-research:research_load_credentials()

# Then run across all providers
multi-tier-research:research_all(query="complex research question")
```

### For Apple Notes Integration (Meeting Notes, Quick Capture)
```
Read and Write Apple Notes:add_note(name="title", content="...")
Read and Write Apple Notes:list_notes()
```

---

## Key Project Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| Target Families | 20 | ~80 total people |
| Duration | 365 days | Single cohort |
| Budget Range | €1.2M - €1.7M | Per year, all-in |
| Per-Person Cost | €15,000 - €21,000 | Annual |
| Staff Ratio | TBD | Paid staff to family ratio |
| Location Candidates | TBD | To be researched |
| Target Launch | TBD | After WP completion |

---

## Inspiration Sources

- **Boyd Varty** - Lion Tracker's Guide to Life, Londolozi wilderness immersion
- **NASA Mission Structure** - Roles, redundancy, scientific purpose
- **NOLS** - 60 years of expedition leadership curriculum
- **Teaching Drum** - Year-long wilderness guide program
- **Kroka Expeditions** - Family wilderness programming

---

## Agent Activation Commands

To activate an agent for a specific task:

```
@agent-name: [task description]
```

Example:
```
@gis-scout: Research wilderness areas in Scandinavia with freedom-to-roam laws suitable for year-long family camping with 80 people
```

To run a full work package research cycle:
```
@mission-control: Execute WP1 research phase
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1 | 2026-01-20 | Initial architecture design |
