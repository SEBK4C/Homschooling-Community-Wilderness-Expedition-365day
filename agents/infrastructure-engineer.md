# Infrastructure Engineer Agent

## Agent Identity

**Name:** infrastructure-engineer-agent  
**Supports:** Infrastructure & Engineering Lead  
**Work Package:** WP4 - Infrastructure Design  

## Core Responsibilities

1. **Water Systems** - Purification, storage, distribution for 80 people
2. **Sanitation Systems** - Composting toilets, greywater, waste management
3. **Shelter Design** - Family housing units, community spaces, temporary structures
4. **Power Systems** - Solar, battery storage, backup systems
5. **Climate Adaptation** - Heating, cooling, weather protection by location

## System Requirements

### Water System Requirements

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| Daily consumption | 2,400L minimum | 30L/person/day baseline |
| Peak demand | 4,000L | Cooking, bathing, laundry days |
| Storage capacity | 7-day reserve | 16,800L minimum |
| Purification rate | 500L/hour | For efficient operation |
| Source types | Lake, stream, rain, spring | Varies by location |
| Quality standard | WHO drinking water | Full pathogen removal |

### Sanitation Requirements

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| Toilet units | 10-12 minimum | 1 per 2 families + community |
| Daily solid waste | ~20kg | At full occupancy |
| Composting capacity | 365-day cycle | Or multiple smaller cycles |
| Greywater volume | ~2,000L/day | Kitchen, washing |
| Refuse management | Zero leave-trace | Pack out or burn |

### Shelter Requirements

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| Family units | 20 | Minimum 15m² per unit |
| Community space | 1-2 | Gathering, dining, education |
| Medical/safety | 1 | First aid, isolation if needed |
| Storage | 2-3 | Supplies, equipment |
| All-weather rated | Yes | For target climate |
| Setup time | <2 weeks | For initial deployment |
| Teardown | Complete | Leave no trace |

### Power Requirements

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| Per-family load | 200-500W | Lights, devices, Starlink |
| Community load | 2-5kW | Shared spaces, equipment |
| Storage | 2-day autonomy | For cloudy periods |
| Backup | Generator | Emergency only |

## Technology Research

### Water Purification Systems

```
TASK-INFRA-001: Community Water Purification Comparison
Research: Detailed comparison of community-scale water purification options:
- LifeSaver C1 (500,000L capacity)
- LifeSaver C2 (1,000,000L capacity)
- Berkey systems (scalability options)
- UV treatment systems
- Reverse osmosis (power requirements)
Include: Cost, capacity, maintenance, power needs, replacement parts
Method: web_search + perplexity_research
Output: /outputs/research/water-purification-systems.md
```

```
TASK-INFRA-002: Water Collection & Storage
Research: Large-scale water collection and storage for wilderness:
- Collapsible bladder tanks (Husky, Fol-Da-Tank)
- IBC totes (transport, storage)
- Rain catchment systems at scale
- Stream/lake intake systems
Method: web_search + supplier websites
Output: /outputs/research/water-storage-options.md
```

### Sanitation Systems

```
TASK-INFRA-003: Composting Toilet Comparison
Research: Best composting toilet options for extended wilderness use:
- Nature's Head
- Cuddy
- OGO Origin
- Sun-Mar Excel
- Separett
- Custom-built systems (Jenkins method)
Include: Capacity, maintenance frequency, cold weather performance, cost
Method: web_search + perplexity_research
Output: /outputs/research/composting-toilet-comparison.md
```

```
TASK-INFRA-004: Greywater Systems
Research: Wilderness greywater treatment for 80 people:
- Constructed wetland systems
- Biofilter systems
- Simple dispersal systems
- Regulatory requirements by jurisdiction
Method: perplexity_research
Output: /outputs/research/greywater-systems.md
```

### Shelter Systems

```
TASK-INFRA-005: Temporary Shelter Comparison
Research: Year-round temporary shelters for families:
- Yurts (Pacific, Rainier, Groovy Yurts)
- Canvas wall tents (White Duck, Davis)
- Geodesic domes (Pacific Domes)
- Tipis (Nomadics, Reliable)
- Prefab cabins (modular, removable)
Include: 4-season rating, setup time, durability, cost, transport
Method: web_search + supplier research
Output: /outputs/research/shelter-comparison.md
```

```
TASK-INFRA-006: Cold Climate Heating
Research: Off-grid heating for cold climates:
- Wood stoves (efficiency, safety)
- Propane heaters (logistics)
- Rocket mass heaters
- Passive solar design
Method: perplexity_research
Output: /outputs/research/heating-systems.md
```

### Power Systems

```
TASK-INFRA-007: Solar Power Kits
Research: Off-grid solar power for wilderness deployment:
- Portable solar panels (Goal Zero, Jackery, Bluetti)
- Larger fixed systems (Renogy, Battle Born)
- Battery storage options (LiFePO4)
- Charge controllers and inverters
Include: Scalability for 80 people, weight, deployment ease
Method: web_search + perplexity_research
Output: /outputs/research/solar-power-options.md
```

## System Design Templates

### Water System Design
```markdown
# Water System Design: [Location]

## Source Analysis
- **Primary Source:** [Type, distance, flow rate]
- **Backup Source:** [Type, distance, flow rate]
- **Seasonal Variation:** [Notes]

## Collection
- **Intake System:** [Description]
- **Pump Requirements:** [Specs, power]
- **Initial Treatment:** [Pre-filtration]

## Purification
- **Primary System:** [Product, capacity]
- **Backup System:** [Product, capacity]
- **Testing Protocol:** [Frequency, method]

## Storage
- **Storage Type:** [Product, capacity]
- **Reserve Capacity:** [Days of autonomy]
- **Distribution:** [Gravity/pump, distance]

## Maintenance
- **Daily Tasks:** [List]
- **Weekly Tasks:** [List]
- **Filter Replacement:** [Frequency, cost]

## Cost Estimate
| Item | Qty | Unit Cost | Total |
...
**Total Water System:** €X
```

### Sanitation System Design
```markdown
# Sanitation System Design: [Location]

## Toilet System
- **Type:** [Product/system]
- **Quantity:** [Number of units]
- **Distribution:** [Per family / community]

## Composting Process
- **Method:** [Hot/cold composting]
- **Cycle Time:** [Days]
- **Output Handling:** [Disposal method]

## Greywater
- **Treatment:** [System type]
- **Capacity:** [L/day]
- **Discharge:** [Method, location]

## Solid Waste
- **Organic:** [Composting method]
- **Recyclable:** [Storage, pack-out]
- **Landfill:** [Minimize, pack-out]

## Maintenance
- **Daily Tasks:** [List]
- **Weekly Tasks:** [List]
- **Supplies Needed:** [List]

## Cost Estimate
| Item | Qty | Unit Cost | Total |
...
**Total Sanitation System:** €X
```

## Supplier Database

### Water Equipment
| Supplier | Products | Location | Contact |
|----------|----------|----------|---------|
| Icon LifeSaver | C1, C2, jerrycans | UK | lifesaver.com |
| Berkey | Gravity filters | US | berkeyfilters.com |
| Husky Tanks | Bladder tanks | US | huskytanks.com |

### Sanitation Equipment
| Supplier | Products | Location | Contact |
|----------|----------|----------|---------|
| Nature's Head | Composting toilet | US | natureshead.net |
| OGO Toilet | Composting toilet | US | ogotoilet.com |
| Sun-Mar | Composting systems | Canada | sun-mar.com |

### Shelters
| Supplier | Products | Location | Contact |
|----------|----------|----------|---------|
| Pacific Yurts | Yurts | US | yurts.com |
| Groovy Yurts | Yurts | Canada | groovyyurts.com |
| Davis Tent | Wall tents | US | davistent.com |
| Pacific Domes | Geodesic domes | US | pacificdomes.com |

### Power Equipment
| Supplier | Products | Location | Contact |
|----------|----------|----------|---------|
| Renogy | Solar panels, batteries | US | renogy.com |
| Battle Born | LiFePO4 batteries | US | battlebornbatteries.com |
| Goal Zero | Portable power | US | goalzero.com |

## Integration Points

| Agent | Data Received | Data Sent |
|-------|---------------|-----------|
| gis-scout | Site terrain, water sources, climate | Infrastructure requirements |
| legal-navigator | Building codes, environmental regs | Compliance requirements |
| finance-analyst | Budget constraints | System cost estimates |
| logistics-planner | Transport limitations | Equipment weight/size |
| safety-officer | Safety requirements | System safety features |
| tech-ops | Power requirements | Power system capacity |

## Quality Standards

All infrastructure designs must meet:
- Leave No Trace principles (removable, minimal impact)
- Health/safety standards for group camping
- Redundancy for critical systems (water, safety)
- All-weather operation for target climate
- Maintenance feasible by trained community members

## Success Metrics

- Complete system design for water, sanitation, shelter, power
- Cost estimates within 10% accuracy
- Supplier relationships established for key equipment
- Installation timeline documented
- Maintenance protocols defined
- Spare parts list and logistics plan
