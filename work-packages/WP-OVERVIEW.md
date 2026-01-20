# Project Tracker: Work Package Overview

## Executive Summary

**Project Tracker** is a multi-agent AI planning system supporting a 10-person human team to design, permit, fund, and launch a year-long wilderness expedition for 20 families (~80 people).

The system orchestrates **10 specialized AI agents** that conduct autonomous background research, prepare briefings, and synthesize intelligence across **10 integrated work packages**. Each agent supports a dedicated human role, creating a seamless collaboration between human decision-makers and AI research capabilities.

---

## The Vision

> "What if 20 families could spend a year living in the wilderness together—learning, working remotely, conducting citizen science, and building a genuine community?"

This project combines:
- **NASA mission structure** - Defined roles, redundancy, scientific purpose
- **Modern connectivity** - Starlink enables remote work from wilderness
- **Wilderness education philosophy** - Boyd Varty's tracking mindset, NOLS expedition leadership
- **Citizen science value** - Contributing real research while learning

**Target:** €1.2M-1.7M budget | 20 families | 365 days | Launch TBD

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PROJECT TRACKER SYSTEM                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    HUMAN LEADERSHIP TEAM                         │   │
│  │                                                                  │   │
│  │   Mission      GIS        Legal      Finance    Infrastructure  │   │
│  │   Commander    Lead       Lead       Lead       Engineer        │   │
│  │      ▲          ▲          ▲          ▲            ▲            │   │
│  │      │          │          │          │            │            │   │
│  │   Operations  Education  Community  Safety      Tech           │   │
│  │   Lead        Director   Lead       Officer     Lead           │   │
│  │      ▲          ▲          ▲          ▲            ▲            │   │
│  └──────┼──────────┼──────────┼──────────┼────────────┼────────────┘   │
│         │          │          │          │            │                 │
│  ┌──────┴──────────┴──────────┴──────────┴────────────┴────────────┐   │
│  │                      AI AGENT LAYER                              │   │
│  │                                                                  │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │   │
│  │  │ mission- │ │ gis-     │ │ legal-   │ │ finance- │           │   │
│  │  │ control  │ │ scout    │ │ navigator│ │ analyst  │           │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐           │   │
│  │  │ infra-   │ │logistics-│ │education-│ │community-│           │   │
│  │  │ engineer │ │ planner  │ │ curator  │ │ builder  │           │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘           │   │
│  │  ┌──────────┐ ┌──────────┐                                      │   │
│  │  │ safety-  │ │ tech-    │                                      │   │
│  │  │ officer  │ │ ops      │                                      │   │
│  │  └──────────┘ └──────────┘                                      │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                              │                                          │
│  ┌───────────────────────────┴──────────────────────────────────────┐   │
│  │                      RESEARCH TOOLS                               │   │
│  │                                                                   │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐               │   │
│  │  │ Web Search  │  │ Perplexity  │  │ Multi-Tier  │               │   │
│  │  │ + Fetch     │  │ Deep        │  │ Research    │               │   │
│  │  │             │  │ Research    │  │ (All APIs)  │               │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘               │   │
│  └───────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Work Package Structure

### Overview Matrix

| WP | Name | Human Lead | Agent | Duration | Key Deliverable |
|----|------|------------|-------|----------|-----------------|
| WP1 | Site Selection & GIS | GIS Lead | gis-scout | 12 weeks | Location recommendation |
| WP2 | Legal & Regulatory | Legal Lead | legal-navigator | 16 weeks | Permit pathway |
| WP3 | Financial Model | Finance Lead | finance-analyst | 12 weeks | Budget & funding plan |
| WP4 | Infrastructure Design | Engineer | infrastructure-engineer | 14 weeks | System specifications |
| WP5 | Operations & Logistics | Ops Lead | logistics-planner | 14 weeks | Supply chain plan |
| WP6 | Education & Science | Education Dir | education-curator | 16 weeks | Curriculum & partnerships |
| WP7 | Community Design | Community Lead | community-builder | 14 weeks | Governance & selection |
| WP8 | Safety & Medical | Safety Officer | safety-officer | 12 weeks | Risk assessment & protocols |
| WP9 | Technology & Comms | Tech Lead | tech-ops | 10 weeks | Connectivity plan |
| WP10 | Integration & Launch | Mission Commander | mission-control | Ongoing | Project coordination |

### Work Package Dependencies

```
Phase 1: Foundation (Weeks 1-12)
├── WP1: Site Selection ──────────────────────┐
├── WP3: Financial Model ─────────────────────┤
├── WP9: Technology ──────────────────────────┤
└── WP10: Integration (ongoing) ──────────────┴───► Site Decision Gate

Phase 2: Planning (Weeks 8-20)
├── WP2: Legal/Regulatory ◄── depends on WP1 ─┐
├── WP4: Infrastructure ◄── depends on WP1 ───┤
├── WP5: Logistics ◄── depends on WP1 ────────┤
└── WP8: Safety ◄── depends on WP1 ───────────┴───► Design Complete Gate

Phase 3: Community (Weeks 12-24)
├── WP6: Education ◄── depends on WP2, WP4 ───┐
└── WP7: Community ◄── depends on WP2, WP3 ───┴───► Launch Ready Gate
```

---

## Human Role Descriptions

### Strategic Leadership

| Role | Responsibility | Time Commitment | Agent Support |
|------|----------------|-----------------|---------------|
| **Mission Commander** | Overall coordination, stakeholder management, go/no-go decisions | 20 hrs/week | mission-control |
| **Finance Lead** | Budget, funding, pricing, investor relations | 15 hrs/week | finance-analyst |
| **Legal Lead** | Permits, regulations, liability, entity structure | 15 hrs/week | legal-navigator |

### Technical Leadership

| Role | Responsibility | Time Commitment | Agent Support |
|------|----------------|-----------------|---------------|
| **GIS Lead** | Location scouting, terrain analysis, site selection | 15 hrs/week | gis-scout |
| **Infrastructure Engineer** | Water, sanitation, shelter, power systems | 15 hrs/week | infrastructure-engineer |
| **Tech Lead** | Connectivity, communications, data systems | 10 hrs/week | tech-ops |

### Operations Leadership

| Role | Responsibility | Time Commitment | Agent Support |
|------|----------------|-----------------|---------------|
| **Operations Lead** | Supply chain, transport, resupply logistics | 15 hrs/week | logistics-planner |
| **Safety Officer** | Risk assessment, emergency protocols, medical | 15 hrs/week | safety-officer |

### Community Leadership

| Role | Responsibility | Time Commitment | Agent Support |
|------|----------------|-----------------|---------------|
| **Education Director** | Curriculum, citizen science, research partnerships | 15 hrs/week | education-curator |
| **Community Lead** | Family selection, governance, community culture | 15 hrs/week | community-builder |

---

## Agent Capabilities

### Research Depth Levels

| Level | Tool | Speed | Best For |
|-------|------|-------|----------|
| Quick | web_search | Seconds | Facts, current info |
| Moderate | perplexity_ask | 10-30 sec | Conversational research |
| Deep | perplexity_research | 5-15 min | Comprehensive single-source |
| Cross-Validated | multi-tier-research | 10-30 min | High-stakes decisions |

### Agent Specializations

| Agent | Primary Skills | Key Outputs |
|-------|----------------|-------------|
| mission-control | Coordination, synthesis, stakeholder mapping | Weekly briefings, decision packages |
| gis-scout | GIS analysis, climate research, regulatory scanning | Location profiles, comparison matrices |
| legal-navigator | Regulatory search, permit research, precedent analysis | Jurisdiction profiles, permit pathways |
| finance-analyst | Budget modeling, comparable research, funding search | Financial models, grant opportunities |
| infrastructure-engineer | Supplier research, technical specifications | System designs, equipment lists |
| logistics-planner | Supply chain research, transport analysis | Logistics plans, vendor database |
| education-curator | Curriculum research, partnership development | Curriculum frameworks, research protocols |
| community-builder | Selection criteria, governance research | Selection process, governance charter |
| safety-officer | Risk assessment, protocol development | Risk registers, emergency protocols |
| tech-ops | Connectivity research, equipment evaluation | Technology plans, equipment specs |

---

## Key Deliverables Timeline

### Phase 1: Foundation (Months 1-3)

| Week | Deliverable | Owner | Status |
|------|-------------|-------|--------|
| 2 | Initial location scan (10+ candidates) | GIS Lead | Pending |
| 4 | Preliminary budget model | Finance Lead | Pending |
| 4 | Starlink coverage analysis | Tech Lead | Pending |
| 6 | Top 5 location profiles | GIS Lead | Pending |
| 8 | Comparable pricing analysis | Finance Lead | Pending |
| 10 | Location comparison matrix | GIS Lead | Pending |
| 12 | **GATE: Site Selection Decision** | Mission Commander | Pending |

### Phase 2: Planning (Months 3-5)

| Week | Deliverable | Owner | Status |
|------|-------------|-------|--------|
| 14 | Permit pathway (selected site) | Legal Lead | Pending |
| 16 | Infrastructure system design | Engineer | Pending |
| 16 | Supply chain plan | Ops Lead | Pending |
| 18 | Risk assessment complete | Safety Officer | Pending |
| 20 | **GATE: Design Complete** | Mission Commander | Pending |

### Phase 3: Community (Months 5-6)

| Week | Deliverable | Owner | Status |
|------|-------------|-------|--------|
| 20 | Curriculum framework | Education Director | Pending |
| 22 | Family selection criteria | Community Lead | Pending |
| 22 | Governance charter | Community Lead | Pending |
| 24 | **GATE: Launch Ready Decision** | Mission Commander | Pending |

---

## Budget Summary

| Category | Low | Mid | High |
|----------|-----|-----|------|
| Pre-Launch | €120,000 | €175,000 | €255,000 |
| Infrastructure | €200,000 | €290,000 | €425,000 |
| Operations (Year 1) | €700,000 | €850,000 | €1,020,000 |
| Contingency | €120,000 | €175,000 | €255,000 |
| **TOTAL** | **€1,140,000** | **€1,490,000** | **€1,955,000** |
| Per Family (20) | €57,000 | €74,500 | €97,750 |
| Per Person (~80) | €14,250 | €18,625 | €24,438 |

---

## Critical Success Factors

1. **Location with clear permit pathway** - Without regulatory clarity, project cannot proceed
2. **20 committed families** - Community must be fully subscribed
3. **Adequate funding** - Budget must be secured before launch
4. **Safety systems validated** - Insurance, medical, evacuation must be robust
5. **Remote work viability** - Starlink must enable family income continuation

---

## Risk Summary

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| No viable location | Low | Critical | Broad search, multiple regions |
| Insufficient family interest | Medium | Critical | Early market validation |
| Permit denial | Medium | Critical | Multiple jurisdiction backup |
| Budget overrun | Medium | High | Conservative estimates, contingency |
| Mid-year family departure | Medium | High | Strong selection, support systems |
| Medical emergency | Low | High | Training, protocols, evacuation plan |
| Technology failure | Low | Medium | Redundant systems |

---

## Next Steps

### Immediate Actions (Week 1)

1. **Activate all agents** - Begin parallel research across all work packages
2. **Stakeholder outreach** - Contact Boyd Varty, Teaching Drum, NOLS
3. **Market validation** - Survey homeschool community interest
4. **Budget refinement** - Deep dive on cost estimates

### Decision Gates

| Gate | Target Date | Decision |
|------|-------------|----------|
| Site Selection | Week 12 | Top 3 locations approved |
| Design Complete | Week 20 | All systems designed, permits initiated |
| Launch Ready | Week 24 | Go/No-Go for family recruitment |
| Family Selection | Week 36 | 20 families committed |
| Final Launch | Week 48 | Expedition begins |

---

## Document Index

| Document | Location | Purpose |
|----------|----------|---------|
| CLAUDE.md | /CLAUDE.md | Master project configuration |
| Agent Definitions | /agents/*.md | Individual agent specifications |
| Skills | /skills/*/SKILL.md | Specialized capability guides |
| Work Packages | /work-packages/WP*.md | Detailed WP specifications |
| Research Outputs | /outputs/research/*.md | Agent research deliverables |
| Briefings | /outputs/briefings/*.md | Synthesized briefings |
| Data | /data/*/ | Contacts, suppliers, regulations |
