# Regulatory Search Skill

## Skill Overview

**Name:** regulatory-search  
**Purpose:** Research permits, regulations, and legal requirements by jurisdiction  
**Primary Tools:** web_search, web_fetch, perplexity_research, multi-tier-research  

## When to Use This Skill

Use regulatory-search when:
- Identifying permit requirements for a location
- Understanding land use regulations
- Researching legal structures and liability
- Finding precedent projects and their permits
- Tracking regulatory changes

## Research Hierarchy

### Level 1: Government Sources (Primary)
Always start with official government sources:
- National park services
- Environmental agencies
- Land management agencies
- Local/regional planning departments
- Business registration authorities

### Level 2: Industry Sources (Secondary)
Professional organizations and industry guides:
- Outdoor education associations
- Tourism industry bodies
- Legal firms specializing in outdoor/environmental
- Insurance industry guidance

### Level 3: Precedent Research (Tertiary)
Similar projects and their experiences:
- Existing wilderness programs
- Ecovillages and intentional communities
- Academic research on regulations

## Research Workflow

### Step 1: Identify Regulatory Authority
```
web_search("[country/region] wilderness camping permit authority")
web_search("[country/region] land use planning department")
```

### Step 2: Find Official Regulations
```
web_fetch("[government agency URL]/camping-permits")
web_fetch("[government agency URL]/land-use-regulations")
```

### Step 3: Research Specifics
Use deep research for complex questions:
```
perplexity_research("What permits are required for a 365-day 
80-person wilderness camp in [jurisdiction]?")
```

### Step 4: Find Precedents
```
web_search("[similar program name] permits licenses [jurisdiction]")
web_search("wilderness education program permits [jurisdiction]")
```

### Step 5: Cross-Validate
For important jurisdictions, use multi-provider research:
```
multi-tier-research:research_all(
  query="Legal requirements for extended wilderness camping 
  programs in [jurisdiction]"
)
```

## Jurisdiction Profile Template

```markdown
# Regulatory Profile: [Jurisdiction]

## Regulatory Authorities

| Domain | Agency | Website | Contact |
|--------|--------|---------|---------|
| Land Use | [Name] | [URL] | [Email/Phone] |
| Environment | [Name] | [URL] | [Email/Phone] |
| Business | [Name] | [URL] | [Email/Phone] |
| Youth Programs | [Name] | [URL] | [Email/Phone] |
| Health/Safety | [Name] | [URL] | [Email/Phone] |

## Required Permits

| Permit | Issuing Authority | Purpose | Timeline | Cost |
|--------|-------------------|---------|----------|------|
| [Name] | [Agency] | [Description] | [Weeks] | [€] |

### Permit Details

#### [Permit Name 1]
- **Legal Basis:** [Law/Regulation citation]
- **Eligibility:** [Who can apply]
- **Application Process:** [Steps]
- **Required Documents:** [List]
- **Processing Time:** [Duration]
- **Cost:** [Fees]
- **Duration/Renewal:** [Validity, renewal process]
- **Conditions:** [Key requirements]
- **Appeal Process:** [If denied]

#### [Permit Name 2]
[Same structure]

## Key Restrictions

| Restriction | Source | Details |
|-------------|--------|---------|
| Group size limits | [Citation] | [Specifics] |
| Duration limits | [Citation] | [Specifics] |
| Structure restrictions | [Citation] | [Specifics] |
| Environmental requirements | [Citation] | [Specifics] |
| Insurance requirements | [Citation] | [Specifics] |

## Precedent Projects

| Project | Permits Held | Location | Notes |
|---------|--------------|----------|-------|
| [Name] | [List] | [Location] | [Relevant learnings] |

## Legal Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk] | H/M/L | H/M/L | [Action] |

## Recommended Legal Counsel

| Firm/Individual | Specialty | Location | Contact |
|-----------------|-----------|----------|---------|
| [Name] | [Area] | [City] | [Contact] |

## Assessment Summary

- **Regulatory Clarity:** [High/Medium/Low]
- **Pathway Exists:** [Yes/No/Uncertain]
- **Estimated Timeline:** [X months]
- **Estimated Cost:** [€X]
- **Key Challenges:** [List]
- **Recommendation:** [Proceed/Caution/Avoid]

## Sources
- [Source 1 with date accessed]
- [Source 2 with date accessed]
...

## Disclaimer
This research is for planning purposes only and does not constitute 
legal advice. Professional legal counsel should be consulted before 
making binding commitments.
```

## Common Regulatory Categories

### Land Access Permits
- Camping permits (public land)
- Land lease agreements (private land)
- Concession permits (conservation land)
- Indigenous land agreements
- Easement rights

### Building/Structure Permits
- Temporary structure permits
- Yurt/tipi exemptions
- Sanitation permits
- Water use permits

### Business/Commercial Permits
- Business registration
- Tourism operator license
- Education provider registration
- Food service license

### Safety/Health Permits
- First aid provider registration
- Child care/youth program license
- Insurance requirements
- Emergency planning approval

### Environmental Permits
- Environmental impact assessment
- Waste management approval
- Water discharge permit
- Fire management plan

## Research Query Templates

### Basic Permit Query
```
"[jurisdiction] camping permit requirements group size duration"
"[jurisdiction] wilderness education program license requirements"
```

### Specific Regulation Query
```
"[jurisdiction] [permit type] application process requirements"
"[jurisdiction] [activity] legal requirements regulations"
```

### Precedent Query
```
"[similar program name] how did they get permits in [jurisdiction]"
"[jurisdiction] wilderness school operating permits example"
```

### Legal Structure Query
```
"best legal structure for wilderness education program [jurisdiction]"
"nonprofit vs for-profit outdoor education [jurisdiction] requirements"
```

## Quality Checklist

- [ ] Official government sources consulted
- [ ] Regulations cited with specific references
- [ ] Multiple sources cross-referenced
- [ ] Date of regulations verified (not outdated)
- [ ] Precedent projects identified
- [ ] Legal counsel recommended
- [ ] Disclaimer included
- [ ] Confidence level stated with basis
