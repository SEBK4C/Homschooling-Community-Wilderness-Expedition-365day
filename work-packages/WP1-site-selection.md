# Work Package 1: Site Selection & GIS

## Work Package Overview

| Attribute | Value |
|-----------|-------|
| **WP Number** | WP1 |
| **Title** | Site Selection & GIS |
| **Human Lead** | GIS & Site Selection Lead |
| **Supporting Agent** | gis-scout-agent |
| **Duration** | 12 weeks |
| **Dependencies** | None (parallel start) |
| **Dependent WPs** | WP2, WP4, WP5, WP8, WP9 |

## Objectives

1. Identify 10+ candidate wilderness locations globally
2. Complete detailed profiles for top 5 candidates
3. Conduct preliminary regulatory assessment per location
4. Develop comprehensive comparison matrix
5. Recommend top 3 locations for detailed due diligence
6. Support WP2 (Legal) with location-specific regulatory research

## Deliverables

| Deliverable | Format | Due | Status |
|-------------|--------|-----|--------|
| D1.1 Initial Location Scan | Research doc | Week 2 | Pending |
| D1.2 Tier 1 Region Profiles (5) | Location profiles | Week 4 | Pending |
| D1.3 Tier 2 Region Profiles (5) | Location profiles | Week 6 | Pending |
| D1.4 Climate Analysis Matrix | Comparison table | Week 6 | Pending |
| D1.5 Access Route Analysis | Maps + narrative | Week 8 | Pending |
| D1.6 Water Source Assessment | Technical report | Week 8 | Pending |
| D1.7 Comparison Matrix | Decision matrix | Week 10 | Pending |
| D1.8 Top 3 Recommendation | Decision brief | Week 12 | Pending |

## Research Tasks (Agent Queue)

### Week 1-2: Initial Scanning

| Task ID | Description | Method | Output |
|---------|-------------|--------|--------|
| GIS-001 | Scandinavian camping regulations | multi-tier-research | /outputs/research/scandinavia-regulations.md |
| GIS-002 | Scotland planning permissions | perplexity_research | /outputs/research/scotland-planning.md |
| GIS-003 | NZ DOC concessions | perplexity_research | /outputs/research/nz-doc-concessions.md |
| GIS-004 | Patagonia land access | perplexity_research | /outputs/research/patagonia-land.md |
| GIS-005 | BC Crown Land regulations | perplexity_research | /outputs/research/bc-crown-land.md |

### Week 3-4: Tier 1 Deep Dives

| Task ID | Description | Method | Output |
|---------|-------------|--------|--------|
| GIS-006 | Norway location profile | gis-analysis skill | /outputs/research/profile-norway.md |
| GIS-007 | Sweden location profile | gis-analysis skill | /outputs/research/profile-sweden.md |
| GIS-008 | Scotland location profile | gis-analysis skill | /outputs/research/profile-scotland.md |
| GIS-009 | NZ location profile | gis-analysis skill | /outputs/research/profile-nz.md |
| GIS-010 | BC Canada location profile | gis-analysis skill | /outputs/research/profile-bc.md |

### Week 5-6: Tier 2 Profiles + Climate

| Task ID | Description | Method | Output |
|---------|-------------|--------|--------|
| GIS-011 | Patagonia location profile | gis-analysis skill | /outputs/research/profile-patagonia.md |
| GIS-012 | Tasmania location profile | gis-analysis skill | /outputs/research/profile-tasmania.md |
| GIS-013 | Iceland location profile | gis-analysis skill | /outputs/research/profile-iceland.md |
| GIS-014 | Romania location profile | gis-analysis skill | /outputs/research/profile-romania.md |
| GIS-015 | Portugal location profile | gis-analysis skill | /outputs/research/profile-portugal.md |
| GIS-016 | Climate comparison matrix | web_fetch + analysis | D1.4 |

### Week 7-8: Access & Water

| Task ID | Description | Method | Output |
|---------|-------------|--------|--------|
| GIS-017 | Access route mapping (top 5) | gis-analysis skill | D1.5 |
| GIS-018 | Water source assessment | perplexity_research | D1.6 |
| GIS-019 | Emergency access analysis | gis-analysis skill | /outputs/research/emergency-access.md |

### Week 9-12: Comparison & Recommendation

| Task ID | Description | Method | Output |
|---------|-------------|--------|--------|
| GIS-020 | Final comparison matrix | Analysis | D1.7 |
| GIS-021 | Stakeholder briefing prep | Synthesis | Briefing deck |
| GIS-022 | Top 3 recommendation | Decision analysis | D1.8 |

## Integration Points

### Inputs Needed From Other WPs
| From WP | Data Needed | When |
|---------|-------------|------|
| WP3 (Finance) | Budget constraints for site | Week 4 |
| WP4 (Infrastructure) | Infrastructure requirements | Week 4 |
| WP9 (Tech) | Connectivity requirements | Week 2 |

### Outputs Provided To Other WPs
| To WP | Data Provided | When |
|-------|---------------|------|
| WP2 (Legal) | Location candidates for legal review | Week 4 |
| WP4 (Infrastructure) | Terrain, water, climate data | Week 8 |
| WP5 (Logistics) | Access routes, distances | Week 8 |
| WP8 (Safety) | Hazards, emergency access | Week 8 |
| WP9 (Tech) | Coordinates for coverage analysis | Week 4 |

## Decision Gates

### Gate 1.1: Initial Screening (Week 2)
- **Decision:** Which 10 regions to profile?
- **Criteria:** Regulatory pathway exists, climate habitable, accessible
- **Decider:** GIS Lead + Mission Commander
- **Output:** Approved region list

### Gate 1.2: Tier 1 Selection (Week 6)
- **Decision:** Which 5 locations for detailed analysis?
- **Criteria:** Top scores on comparison matrix
- **Decider:** GIS Lead + Mission Commander + Legal Lead
- **Output:** Tier 1 finalist list

### Gate 1.3: Final Recommendation (Week 12)
- **Decision:** Top 3 recommended locations
- **Criteria:** Full analysis, cross-WP input integrated
- **Decider:** Full leadership team
- **Output:** Location recommendation with rationale

## Risks

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| No viable locations found | Low | Critical | Expand search criteria | GIS Lead |
| Regulatory research inconclusive | Medium | High | Engage local contacts early | Legal Lead |
| Climate data insufficient | Low | Medium | Use multiple data sources | GIS Agent |
| Access routes seasonal | Medium | Medium | Assess all seasons | GIS Agent |

## Resources Required

### Human Time
- GIS Lead: 20 hours/week
- Mission Commander: 2 hours/week (reviews)
- Legal Lead: 4 hours/week (regulatory input)

### Agent Time
- gis-scout-agent: Continuous research support
- legal-navigator-agent: Regulatory research support

### Tools
- Google Earth Pro
- Climate data sources (WorldClim, Climate-Data.org)
- Map creation tools

### Budget
- Site visit budget: €15,000 (for top 3 candidates)
- Data/tools: €500

## Success Criteria

| Criterion | Target | Measurement |
|-----------|--------|-------------|
| Locations profiled | ≥10 | Count of complete profiles |
| Profile completeness | 100% | All template fields populated |
| Regulatory clarity | ≥3 with clear pathway | Legal review confirmation |
| Comparison matrix | All criteria scored | Matrix completion |
| Recommendation confidence | High | Team alignment on top 3 |

## Weekly Checkpoints

| Week | Checkpoint | Verification |
|------|------------|--------------|
| 2 | Initial scan complete | 10+ candidates identified |
| 4 | Tier 1 profiles complete | 5 profiles delivered |
| 6 | Tier 2 profiles + climate | 5 more profiles + climate matrix |
| 8 | Access + water complete | Technical reports delivered |
| 10 | Comparison matrix complete | All locations scored |
| 12 | Recommendation delivered | Decision brief approved |
