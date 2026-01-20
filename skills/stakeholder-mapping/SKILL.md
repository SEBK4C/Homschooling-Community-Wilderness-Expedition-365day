# Stakeholder Mapping Skill

## Skill Overview

**Name:** stakeholder-mapping  
**Purpose:** Identify, research, and track key stakeholders, contacts, and potential partners  
**Primary Tools:** web_search, perplexity_research, Apple Notes  

## When to Use This Skill

Use stakeholder-mapping when:
- Identifying key people to contact
- Researching potential partners or advisors
- Building a contact database
- Tracking relationship status
- Planning outreach strategy

## Stakeholder Categories

### Category 1: Inspiration & Advisory
- Thought leaders in wilderness education
- Authors/speakers on relevant topics
- Experienced practitioners

### Category 2: Operational Partners
- Existing wilderness programs
- Equipment suppliers
- Service providers

### Category 3: Academic & Research
- Universities with relevant programs
- Research institutions
- Citizen science platforms

### Category 4: Funding & Investment
- Foundations
- Impact investors
- Corporate sponsors

### Category 5: Regulatory & Government
- Land management agencies
- Permit authorities
- Local government contacts

### Category 6: Community & Families
- Potential participant families
- Homeschool networks
- Alumni of similar programs

## Research Workflow

### Step 1: Identify Stakeholders
```
web_search("[category] leaders experts")
web_search("[organization type] [region]")
perplexity_ask("Who are the leading figures in wilderness education?")
```

### Step 2: Research Individuals/Organizations
```
web_search("[name] background experience")
web_search("[organization] leadership team contact")
web_fetch("[website]/about")
```

### Step 3: Find Contact Information
```
web_search("[name] email contact")
web_search("[organization] contact information")
```

### Step 4: Document in Database
Create stakeholder profile in `/data/contacts/`

### Step 5: Plan Engagement
Prioritize based on relevance and accessibility

## Stakeholder Profile Template

```markdown
# Stakeholder Profile: [Name]

## Basic Information
- **Name:** [Full name]
- **Title/Role:** [Position]
- **Organization:** [Company/Institution]
- **Location:** [City, Country]
- **Website:** [Personal/Org URL]

## Contact Information
- **Email:** [If found publicly]
- **LinkedIn:** [Profile URL]
- **Twitter/X:** [@handle]
- **Phone:** [If available]
- **Assistant/Gatekeeper:** [If applicable]

## Background
[2-3 paragraph summary of relevant background, expertise, 
and why they're relevant to the project]

## Relevance to Project
- **Category:** [Advisory/Partner/Funding/etc.]
- **Relevance Score:** [1-5]
- **Potential Value:** [What they could offer]
- **Our Value to Them:** [What we could offer]

## Connection Points
- [Mutual connection or introduction path]
- [Shared interest or project]
- [Event where they might be reached]

## Previous Interactions
| Date | Type | Summary | Next Step |
|------|------|---------|-----------|
| [Date] | [Call/Email/Meeting] | [Summary] | [Action] |

## Notes
- [Relevant observations]
- [Personality/communication preferences]
- [Timing considerations]

## Status
- **Engagement Level:** [Not contacted / Outreach sent / In dialogue / Active partner / Inactive]
- **Priority:** [High / Medium / Low]
- **Next Action:** [Specific action with date]
- **Owner:** [Team member responsible]
```

## Stakeholder Map Template

```markdown
# Stakeholder Map: [Category or Project Phase]

## Overview Matrix

| Stakeholder | Type | Influence | Interest | Priority | Status |
|-------------|------|-----------|----------|----------|--------|
| [Name] | [Cat] | H/M/L | H/M/L | H/M/L | [Status] |

## Influence-Interest Grid

### High Influence, High Interest (Key Players - Engage Closely)
- [Name]: [Brief note on engagement approach]

### High Influence, Low Interest (Keep Satisfied)
- [Name]: [Brief note on engagement approach]

### Low Influence, High Interest (Keep Informed)
- [Name]: [Brief note on engagement approach]

### Low Influence, Low Interest (Monitor)
- [Name]: [Brief note on engagement approach]

## Engagement Strategy

### Phase 1: Initial Outreach (Month 1-2)
| Stakeholder | Approach | Timeline | Owner |
|-------------|----------|----------|-------|
| [Name] | [Warm intro via X] | Week 2 | [Person] |

### Phase 2: Relationship Building (Month 3-6)
| Stakeholder | Approach | Timeline | Owner |
|-------------|----------|----------|-------|
| [Name] | [Regular check-ins] | Monthly | [Person] |

### Phase 3: Partnership Development (Month 6+)
| Stakeholder | Approach | Timeline | Owner |
|-------------|----------|----------|-------|
| [Name] | [Formal partnership discussion] | Month 6 | [Person] |
```

## Priority Stakeholder Lists

### Advisory/Inspiration
```markdown
| Name | Organization | Why Priority | Status |
|------|--------------|--------------|--------|
| Boyd Varty | Londolozi | Primary inspiration, wilderness immersion expert | To contact |
| Tamarack | Teaching Drum | Year-long program operator | To contact |
| [NOLS Leadership] | NOLS | 60 years expedition expertise | To research |
```

### Research/Academic
```markdown
| Name | Organization | Why Priority | Status |
|------|--------------|--------------|--------|
| [Cornell Lab contact] | Cornell Lab | Citizen science expertise | To research |
| [iNaturalist contact] | iNaturalist/Cal Academy | Platform integration | To research |
```

### Funding
```markdown
| Name | Organization | Why Priority | Status |
|------|--------------|--------------|--------|
| [Foundation program officer] | [Foundation] | Outdoor education focus | To research |
```

## Research Queries

### Finding People
```
"[topic] expert speaker author"
"[organization] executive director founder"
"[field] thought leader influencer"
```

### Background Research
```
"[name] interview podcast"
"[name] biography background"
"[name] [organization] role responsibilities"
```

### Contact Finding
```
"[name] email contact"
"[organization] media press contact"
"[name] LinkedIn profile"
```

### Connection Finding
```
"[name] spoke at [event]"
"[name] board member [organizations]"
"[name] collaborated with"
```

## Outreach Templates

### Cold Introduction (Email)
```
Subject: [Specific topic] - Quick question from [context]

Dear [Name],

[One sentence establishing credibility/connection]

I'm researching [specific topic] for [brief project description], 
and your work on [specific work of theirs] resonated strongly.

[One specific question or small ask]

Would you have 15 minutes for a brief call, or could you point me 
toward any resources you'd recommend?

Thank you for your time,
[Your name]
[One line about you]
```

### Warm Introduction Request
```
Subject: Introduction request - [Name] at [Organization]

Hi [Mutual connection],

I hope this finds you well. I'm working on [brief project description] 
and am hoping to connect with [target name] regarding [specific topic].

I noticed you're connected - would you be comfortable making an 
introduction? I'd be happy to provide a brief intro paragraph 
you could forward.

Thanks for considering,
[Your name]
```

## Quality Checklist

- [ ] All key stakeholder categories covered
- [ ] Profiles complete with background research
- [ ] Contact information verified where possible
- [ ] Influence/interest assessed
- [ ] Engagement priority set
- [ ] Outreach plan with timelines
- [ ] Owners assigned for each relationship
- [ ] Database kept current (weekly review)
