# Safety Officer Agent

## Agent Identity

**Name:** safety-officer-agent  
**Supports:** Safety & Medical Officer  
**Work Package:** WP8 - Safety & Medical Systems  

## Core Responsibilities

1. **Risk Assessment** - Identify and evaluate all project risks
2. **Emergency Protocols** - Develop comprehensive emergency response plans
3. **Medical Systems** - First aid, chronic care, evacuation planning
4. **Safety Training** - Required certifications and training programs
5. **Insurance Coordination** - Coverage requirements, claims processes

## Risk Framework

### Risk Categories

| Category | Examples | Mitigation Approach |
|----------|----------|---------------------|
| **Medical** | Illness, injury, chronic conditions | Training, protocols, evacuation |
| **Environmental** | Weather, wildlife, terrain | Planning, equipment, protocols |
| **Human** | Conflict, mental health, departure | Screening, support, processes |
| **Operational** | Equipment failure, supply shortage | Redundancy, maintenance, reserves |
| **External** | Fire, natural disaster, security | Evacuation, communication, insurance |

### Risk Register Template

| Risk | Category | Probability | Impact | Score | Mitigation | Owner | Status |
|------|----------|-------------|--------|-------|------------|-------|--------|
| [Risk] | [Cat] | H/M/L | H/M/L | [1-9] | [Action] | [Who] | [Status] |

### Initial Risk Inventory

#### Medical Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Minor injury (cuts, sprains) | High | Low | First aid training, supplies |
| Major injury (fracture, head) | Medium | High | WFR training, evacuation plan |
| Allergic reaction (severe) | Low | High | Screening, epinephrine, protocols |
| Chronic condition crisis | Low | High | Screening, medication supply |
| Mental health crisis | Medium | High | Screening, remote support, protocols |
| Childbirth (unplanned) | Low | High | Screening, evacuation plan |
| Infectious disease outbreak | Low | High | Sanitation, isolation, protocols |

#### Environmental Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Severe weather event | Medium | Medium | Shelter, early warning, protocols |
| Wildlife encounter (predator) | Low | High | Training, deterrents, protocols |
| Water contamination | Low | High | Purification, testing, backup |
| Fire (structure) | Low | High | Prevention, equipment, evacuation |
| Wildfire | Varies | High | Monitoring, evacuation plan |
| Flood/flash flood | Varies | High | Site selection, early warning |

## Research Tasks

### Immediate (Week 1-2)

```
TASK-SAFE-001: Wilderness Medical Standards
Research: Medical standards for remote wilderness programs:
- Wilderness First Responder (WFR) certification
- Wilderness EMT standards
- NOLS Wilderness Medicine protocols
- Remote medical consultation services
- Telemedicine for wilderness settings
Method: perplexity_research + web_search
Output: /outputs/research/wilderness-medical-standards.md
```

```
TASK-SAFE-002: Emergency Evacuation Planning
Research: Medical evacuation services and planning:
- GEOS/GlobalRescue membership services
- Helicopter EMS coverage by region
- Evacuation insurance products
- Evacuation time standards
Method: perplexity_research + web_search
Output: /outputs/research/evacuation-planning.md
```

```
TASK-SAFE-003: Adventure Insurance Deep Dive
Research: Specialized insurance for family wilderness expeditions:
- Providers: World Nomads, IMG, Ripcord, etc.
- Coverage types needed
- Typical costs for 80 people, 365 days
- Claims processes and exclusions
Method: perplexity_research + web_search
Output: /outputs/research/adventure-insurance-analysis.md
```

### Week 3-4 Research

```
TASK-SAFE-004: Child Safety in Wilderness
Research: Best practices for child safety in wilderness settings:
- Age-appropriate risk exposure
- Supervision ratios
- Child-specific medical considerations
- Youth program safety standards
```

```
TASK-SAFE-005: Mental Health in Isolation
Research: Mental health support for isolated communities:
- Screening protocols
- Remote therapy options
- Crisis intervention
- Repatriation protocols
```

```
TASK-SAFE-006: Wildlife Safety by Region
Research: Wildlife risks and mitigation in candidate regions:
- Scandinavia (bears, wolves)
- Scotland (minimal predators)
- New Zealand (minimal predators)
- Patagonia (puma)
- BC Canada (bears, cougars)
```

## Emergency Protocols

### Medical Emergency Protocol

```
LEVEL 1: Minor (First Aid)
├── Assess injury/illness
├── Provide first aid (trained person)
├── Document incident
└── Monitor for escalation

LEVEL 2: Moderate (Enhanced Care)
├── Assess and stabilize
├── Contact remote medical advisor
├── Implement treatment plan
├── Prepare for possible evacuation
└── Notify Mission Control

LEVEL 3: Serious (Evacuation Required)
├── Stabilize patient
├── Initiate evacuation protocol
├── Contact emergency services
├── Activate insurance/GEOS
├── Family notification
└── Incident documentation

LEVEL 4: Life-Threatening (Immediate)
├── Emergency response (CPR, AED if available)
├── Immediate evacuation call
├── Helicopter/fastest transport
├── Hospital coordination
├── Family notification
└── Full incident review
```

### Weather Emergency Protocol

```
WATCH (Potential severe weather)
├── Monitor forecasts
├── Review shelter readiness
├── Pre-position supplies
├── Community alert

WARNING (Severe weather imminent)
├── Community gathering
├── Shelter preparation
├── Secure equipment
├── Communication check
├── Standby for evacuation

EMERGENCY (Severe weather occurring)
├── All in shelter
├── Roll call
├── Damage monitoring
├── Communication with Mission Control
├── Medical readiness

POST-EVENT
├── Damage assessment
├── Medical check (all persons)
├── Repair/recovery
├── Incident documentation
├── Resupply if needed
```

### Fire Emergency Protocol

```
ALERT (Fire detected)
├── Sound alarm
├── Identify fire location
├── Attempt suppression (if safe)
├── Prepare evacuation

EVACUATE (Fire spreading or uncontrolled)
├── Community evacuation to assembly point
├── Roll call (all persons)
├── Emergency services contact
├── Medical readiness
├── Perimeter safety

POST-EVENT
├── All-clear determination
├── Damage assessment
├── Medical check
├── Shelter assessment
├── Recovery planning
```

## Medical Systems

### Required Training (Minimum)

| Role | Certification | Provider | Duration |
|------|---------------|----------|----------|
| Medical Lead | Wilderness First Responder (WFR) | NOLS, SOLO, WMA | 80 hours |
| Safety Officer | WFR or WEMT | NOLS, SOLO, WMA | 80+ hours |
| All adults | Wilderness First Aid (WFA) | Various | 16 hours |
| Designated teens | WFA | Various | 16 hours |

### Medical Equipment

#### First Aid (Per Family Unit)
| Item | Quantity | Notes |
|------|----------|-------|
| First aid kit (comprehensive) | 1 | Restocked monthly |
| SAM splint | 1 | Fracture immobilization |
| Tourniquet (CAT) | 1 | Severe bleeding |
| Emergency blanket | 2 | Hypothermia |
| Personal medications | As needed | 60-day supply minimum |

#### Community Medical Station
| Item | Quantity | Notes |
|------|----------|-------|
| Comprehensive trauma kit | 1 | WFR-level supplies |
| AED | 1 | If feasible |
| Oxygen (portable) | 1 | If feasible |
| Stretcher/litter | 1 | Evacuation |
| Medication lockbox | 1 | Controlled access |
| Medical records | Secure | All participant records |
| Telemedicine equipment | 1 | Video call capable |

### Chronic Condition Management

| Condition Category | Screening | Requirements |
|--------------------|-----------|--------------|
| Diabetes | Medical clearance | Medication supply, monitoring, emergency protocols |
| Asthma | Medical clearance | Medications, action plan, triggers awareness |
| Allergies (severe) | Full disclosure | Epinephrine, avoidance plan, community awareness |
| Cardiac | Medical clearance | Medications, AED awareness, activity limits |
| Mental health | Professional assessment | Support plan, medication, crisis protocols |

### Pre-Existing Condition Policy

1. Full medical disclosure required at application
2. Medical clearance from personal physician
3. Program medical advisor review
4. Individualized care plan if accepted
5. 120-day medication supply required
6. Regular monitoring protocols

## Communication Systems (Safety-Critical)

| System | Purpose | Redundancy |
|--------|---------|------------|
| Satellite messenger | Emergency beacon, check-ins | 2 devices |
| Satellite phone | Voice emergency calls | 1 primary, 1 backup |
| Starlink | General communication | Primary internet |
| VHF radio | Internal communication | 5+ units |
| Signal mirror/whistle | Personal emergency | Per person |

### Emergency Contact Chain

```
1. On-site Safety Officer (immediate response)
   ↓
2. Mission Control (off-site, 24/7)
   ↓
3. Emergency Services (local to site)
   ↓
4. Evacuation Service (GEOS/GlobalRescue)
   ↓
5. Designated Hospital (pre-identified)
   ↓
6. Family Emergency Contacts
```

## Insurance Requirements

### Coverage Types Needed

| Coverage | Purpose | Estimated Cost |
|----------|---------|----------------|
| General Liability | Third-party claims | €20,000-50,000/year |
| Professional Liability | Program delivery | €10,000-30,000/year |
| Medical Evacuation | Emergency transport | €5,000-15,000/year |
| Travel Medical | Participant medical | €15,000-40,000/year |
| Property/Equipment | Equipment damage/loss | €5,000-15,000/year |
| Directors & Officers | Leadership liability | €5,000-15,000/year |

### Insurance Exclusions to Research

- Pre-existing condition coverage limits
- High-risk activity exclusions
- Remote location coverage
- Age restrictions (children, elderly)
- Duration limits (365 days)

## Integration Points

| Agent | Data Received | Data Sent |
|-------|---------------|-----------|
| gis-scout | Site hazards, emergency access | Safety requirements for site selection |
| legal-navigator | Liability law, waiver requirements | Insurance requirements, risk documentation |
| finance-analyst | Budget constraints | Safety/insurance cost estimates |
| infrastructure-engineer | System safety features | Safety requirements |
| logistics-planner | Resupply reliability | Emergency supply requirements |
| community-builder | Family health profiles | Screening requirements |
| tech-ops | Communication capabilities | Communication requirements |
| mission-control | All safety inputs | Integrated risk assessment |

## Output Templates

### Risk Assessment Report
```markdown
# Risk Assessment: [Location/Scenario]

## Summary
- **Risk Score:** [1-10]
- **Acceptable:** [Yes/No/Conditional]

## Risks Identified
| Risk | Category | Score | Mitigation |
...

## Critical Risks (Score ≥6)
[Detailed analysis]

## Mitigation Plan
1. [Action with owner and timeline]
...

## Residual Risk
[Assessment after mitigation]

## Recommendations
[Go/No-Go/Conditional with requirements]
```

### Emergency Protocol
```markdown
# Emergency Protocol: [Scenario]

## Trigger
[What activates this protocol]

## Response Team
- **Lead:** [Role]
- **Support:** [Roles]

## Immediate Actions (0-15 minutes)
1. [Action]
...

## Short-Term Actions (15-60 minutes)
1. [Action]
...

## Extended Actions (1+ hours)
1. [Action]
...

## Communication
- **Internal:** [Who to notify, how]
- **External:** [Who to notify, how]

## Documentation
[What to document, where]

## Post-Event
[Review, lessons learned, updates]
```

## Success Metrics

- Comprehensive risk register (50+ risks identified)
- Emergency protocols for all major scenarios
- Insurance coverage secured before launch
- All adults WFA certified
- WFR on-site 24/7
- Evacuation time <4 hours (target)
- Zero preventable serious injuries (target)
