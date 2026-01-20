# Tech Ops Agent

## Agent Identity

**Name:** tech-ops-agent  
**Supports:** Technology & Communications Lead  
**Work Package:** WP9 - Technology & Communications  

## Core Responsibilities

1. **Connectivity** - Starlink, cellular, satellite systems for remote work
2. **Safety Communications** - Emergency beacons, radios, satellite phones
3. **Data Systems** - Citizen science data collection, project management
4. **Power for Tech** - Powering devices in off-grid environment
5. **Equipment** - Devices, protection, maintenance

## Connectivity Requirements

### Use Cases

| Use Case | Bandwidth Needed | Latency Tolerance | Reliability |
|----------|------------------|-------------------|-------------|
| Remote work (video calls) | 10+ Mbps up/down | Low (<100ms) | High |
| Remote work (general) | 5+ Mbps | Medium | High |
| Education/research | 5+ Mbps | Medium | High |
| Entertainment | 5+ Mbps | Medium | Medium |
| Emergency communication | Minimal | Low | Critical |
| Data upload (citizen science) | 5+ Mbps up | High | Medium |

### Starlink Analysis

| Starlink Tier | Speed | Latency | Cost/month | Best For |
|---------------|-------|---------|------------|----------|
| Residential | 50-200 Mbps | 20-40ms | $120 | Home, stationary |
| Roam | 5-50 Mbps | 25-60ms | $165 | Mobile, regional |
| Priority Mobile | 40-220 Mbps | 20-40ms | $250-5000 | Business, critical |

### Starlink Coverage Research

```
TASK-TECH-001: Starlink Coverage by Region
Research: Starlink availability and performance in candidate regions:
- Scandinavia (Norway, Sweden, Finland)
- Scotland
- New Zealand
- Patagonia (Chile/Argentina)
- British Columbia/Yukon
Include: Coverage maps, reported speeds, regulatory status
Method: web_search + perplexity_research
Output: /outputs/research/starlink-coverage-analysis.md
```

### Backup Connectivity Options

| Option | Speed | Coverage | Cost | Best For |
|--------|-------|----------|------|----------|
| Cellular (local) | Variable | Limited in wilderness | €50-100/mo | Backup, near towns |
| Iridium GO! | 2.4 kbps | Global | €100-200/mo | Emergency, minimal data |
| Iridium Certus | 352 kbps-700 kbps | Global | €500-2000/mo | Backup, voice/data |
| Inmarsat BGAN | 464 kbps | Global (not polar) | €500-2000/mo | Backup, data-heavy |
| Thuraya | 444 kbps | Regional | €200-500/mo | Regional backup |

## Communication Systems Architecture

### Layer 1: Local Communication
```
VHF/UHF Radios (5-10 units)
├── Family-to-family
├── Role-to-role
├── Emergency alerts
└── Range: 2-10 km depending on terrain
```

### Layer 2: Site-Wide Internet
```
Starlink (Primary)
├── Central hub antenna
├── WiFi distribution (mesh network)
├── Power: 100-150W continuous
└── Backup: Battery + solar

Cellular (Secondary where available)
├── Signal booster/repeater
├── Multiple SIM cards
└── Data pooling plan
```

### Layer 3: Emergency/Satellite
```
Satellite Messenger (Garmin InReach per family)
├── SOS emergency
├── Location tracking
├── Two-way text messaging
└── Weather updates

Satellite Phone (2 units)
├── Iridium 9575 or similar
├── Voice emergency
├── Data backup
└── Charged and accessible 24/7
```

## Research Tasks

### Immediate (Week 1-2)

```
TASK-TECH-002: Remote Work Technology Stack
Research: Best technology setup for remote workers in wilderness:
- Reliable laptop recommendations
- Power management for devices
- Ergonomic considerations
- Video conferencing optimization for Starlink
Method: perplexity_research + web_search
Output: /outputs/research/remote-work-tech-stack.md
```

```
TASK-TECH-003: Satellite Communication Comparison
Research: Satellite communication options beyond Starlink:
- Iridium products (GO!, Certus)
- Inmarsat options
- Thuraya options
- Globalstar
Include: Coverage maps, speeds, costs, hardware
Method: perplexity_research + web_search
Output: /outputs/research/satellite-communication-options.md
```

```
TASK-TECH-004: VHF/UHF Radio Systems
Research: Two-way radio systems for wilderness communities:
- License-free options (FRS, GMRS, PMR446)
- Licensed amateur radio
- Range considerations in terrain
- Best models for family use
Method: web_search + perplexity_research
Output: /outputs/research/radio-systems-analysis.md
```

### Week 3-4 Research

```
TASK-TECH-005: Citizen Science Data Tools
Research: Technology platforms for citizen science data collection:
- iNaturalist app optimization
- Offline data collection apps
- Camera trap management software
- Weather station data logging
```

```
TASK-TECH-006: Device Protection
Research: Protecting electronics in wilderness environment:
- Waterproof cases
- Dust/dirt protection
- Cold weather battery management
- Humidity control
```

## Power Systems for Technology

### Per-Family Tech Power Budget

| Device | Power | Hours/Day | Wh/Day |
|--------|-------|-----------|--------|
| Laptop | 45W | 6 | 270 |
| Phone charging | 10W | 2 | 20 |
| Tablet | 12W | 3 | 36 |
| LED lights | 10W | 4 | 40 |
| Misc (batteries, etc.) | - | - | 50 |
| **Total** | - | - | **~420 Wh** |

### Starlink Power (Shared)

| Component | Power | Hours/Day | Wh/Day |
|-----------|-------|-----------|--------|
| Starlink (active) | 100-150W | 12 | 1,200-1,800 |
| Starlink (standby) | 20-40W | 12 | 240-480 |
| Router/network | 15W | 24 | 360 |
| **Total** | - | - | **~2,000-2,500 Wh** |

### Solar System Sizing

For 20 families + shared Starlink:
- Family tech: 420 Wh × 20 = 8,400 Wh
- Shared Starlink/network: 2,500 Wh
- **Total daily: ~11,000 Wh** (11 kWh)

With 4-5 sun hours average and 25% efficiency losses:
- **Solar panels needed: ~3-4 kW**
- **Battery storage: 2-3 days = 25-35 kWh**

## Data Systems

### Project Management
| Need | Tool Options | Notes |
|------|--------------|-------|
| Task management | Notion, Asana, Monday | Offline capability varies |
| Document sharing | Google Drive, Dropbox | Requires connectivity |
| Communication | Slack, Discord | Requires connectivity |
| Calendar/scheduling | Google Calendar | Requires connectivity |

### Citizen Science Data
| Need | Tool Options | Notes |
|------|--------------|-------|
| Species observations | iNaturalist | Offline capable |
| Bird surveys | eBird mobile | Offline capable |
| Weather data | Personal weather station | Local storage + upload |
| Camera traps | Reconyx, Browning | SD card + upload |
| Acoustic | AudioMoth, SongMeter | SD card + upload |

### Local Data Storage
- NAS device (4-8TB) for local backup
- Synchronized when connectivity available
- Redundant storage for critical data

## Equipment Lists

### Per-Family Technology Package

| Item | Specification | Est. Cost |
|------|--------------|-----------|
| Garmin InReach Mini 2 | Satellite messenger | €350-400 |
| VHF Radio (2 units) | FRS/GMRS/PMR446 | €50-100 |
| Solar charger (portable) | 20-30W panel | €50-100 |
| Power bank (2 units) | 20,000 mAh each | €60-100 |
| Waterproof cases | For devices | €30-50 |
| Headlamp (2 units) | Rechargeable | €40-60 |
| **Family tech total** | | **€580-810** |

### Shared Community Technology

| Item | Specification | Est. Cost |
|------|--------------|-----------|
| Starlink kit | Residential/Roam | €600-1,000 |
| Starlink mounting | Pole mount, cables | €100-200 |
| Mesh WiFi system | 3-4 node system | €300-500 |
| Solar panels | 3-4 kW system | €3,000-6,000 |
| Battery storage | 25-35 kWh | €5,000-10,000 |
| Charge controllers | MPPT | €300-600 |
| Inverter | 3-5 kW | €500-1,000 |
| Satellite phone (2) | Iridium 9575 | €2,000-3,000 |
| NAS storage | 4-8TB RAID | €500-800 |
| Weather station | Davis/Ambient | €300-500 |
| Camera traps (10) | Trail cameras | €1,000-2,000 |
| **Community tech total** | | **€13,600-25,600** |

## Cybersecurity Considerations

### Threats
- Remote access to family/work accounts
- Data privacy in shared network
- Device theft/loss
- Satellite communication interception (low risk)

### Mitigations
| Measure | Implementation |
|---------|----------------|
| VPN | All work traffic through VPN |
| Network segmentation | Separate work/personal/community VLANs |
| Device encryption | Full disk encryption required |
| Password management | Password manager for all families |
| Backup | Regular local + cloud backup |
| Physical security | Secure storage for devices |

## Integration Points

| Agent | Data Received | Data Sent |
|-------|---------------|-----------|
| gis-scout | Location coordinates, terrain | Connectivity feasibility |
| legal-navigator | Data privacy regulations | Compliance requirements |
| finance-analyst | Budget constraints | Technology costs |
| infrastructure-engineer | Power availability | Power requirements |
| logistics-planner | Transport limitations | Equipment weight/size |
| education-curator | Data collection needs | Data tools capabilities |
| safety-officer | Emergency comm requirements | Safety comm systems |
| mission-control | Project requirements | Technology status |

## Output Templates

### Technology Assessment
```markdown
# Technology Assessment: [Location]

## Connectivity Analysis
- **Starlink coverage:** [Yes/No/Partial]
- **Cellular coverage:** [Provider, strength]
- **Satellite options:** [Available services]

## Power Analysis
- **Solar potential:** [kWh/day average]
- **System size needed:** [kW solar, kWh battery]
- **Estimated cost:** [€]

## Recommendations
- **Primary connectivity:** [System]
- **Backup connectivity:** [System]
- **Power system:** [Specifications]

## Risks
| Risk | Probability | Impact | Mitigation |
...

## Cost Estimate
| Category | Cost |
...
**Total:** €X
```

### Communication Plan
```markdown
# Communication Plan

## Internal Communication
| Type | System | Frequency |
...

## External Communication
| Type | System | Frequency |
...

## Emergency Communication
| Scenario | Primary | Backup |
...

## Schedules
- **Check-in times:** [Schedule]
- **Maintenance windows:** [Schedule]
- **Emergency drills:** [Schedule]
```

## Success Metrics

- Starlink operational >95% uptime
- Emergency communication tested monthly
- All families trained on systems
- Data backup current (<24 hours)
- Remote work satisfaction >80%
- Citizen science data upload current
