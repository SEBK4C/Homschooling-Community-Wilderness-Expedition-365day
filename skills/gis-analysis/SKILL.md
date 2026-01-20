# GIS Analysis Skill

## Skill Overview

**Name:** gis-analysis  
**Purpose:** Research and analyze geographic locations for site selection  
**Primary Tools:** web_search, web_fetch, perplexity_research  

## When to Use This Skill

Use gis-analysis when:
- Evaluating potential wilderness locations
- Researching terrain, climate, and access
- Analyzing water sources and natural resources
- Mapping emergency access routes
- Comparing multiple location candidates

## Data Sources

### Satellite Imagery & Maps
| Source | URL | Use For |
|--------|-----|---------|
| Google Earth | earth.google.com | Visual reconnaissance, terrain |
| Sentinel Hub | sentinelhub.com | Recent satellite imagery |
| OpenStreetMap | openstreetmap.org | Roads, trails, infrastructure |

### Elevation & Terrain
| Source | URL | Use For |
|--------|-----|---------|
| OpenTopography | opentopography.org | DEM data |
| USGS EarthExplorer | earthexplorer.usgs.gov | US terrain data |

### Climate Data
| Source | URL | Use For |
|--------|-----|---------|
| WorldClim | worldclim.org | Global climate averages |
| Climate-Data.org | climate-data.org | City/region climate profiles |
| Weatherspark | weatherspark.com | Detailed climate analysis |

### Protected Areas
| Source | URL | Use For |
|--------|-----|---------|
| Protected Planet | protectedplanet.net | Global protected areas database |
| National park websites | Varies | Specific regulations, boundaries |

## Analysis Workflow

### Step 1: Initial Screening
Use web_search to identify candidate regions:
```
web_search("wilderness areas [country] suitable group camping")
web_search("[region] land use regulations camping")
```

### Step 2: Climate Profiling
Fetch climate data for each candidate:
```
web_fetch("https://en.climate-data.org/[region-url]/")
```

Key climate parameters:
- Monthly temperature ranges
- Precipitation by month
- Frost days / growing season
- Extreme weather frequency
- Daylight hours (seasonal variation)

### Step 3: Access Analysis
Map access routes and infrastructure:
- Nearest town (supplies, services)
- Nearest hospital (emergency medical)
- Nearest airstrip (evacuation)
- Road access (seasonal limitations)
- Water access (lakes, rivers)

### Step 4: Water Source Assessment
Identify water availability:
- Permanent water sources (rivers, lakes, springs)
- Seasonal variation
- Water quality indicators
- Distance from potential camp sites

### Step 5: Hazard Assessment
Identify natural hazards:
- Flood zones
- Fire risk areas
- Avalanche zones
- Wildlife hazards
- Seismic activity

### Step 6: Regulatory Overlay
Map regulatory boundaries:
- National park boundaries
- Wilderness area boundaries
- Private land parcels
- Indigenous land
- Zoning restrictions

## Location Profile Template

```markdown
# Location Profile: [Name]

## Basic Information
- **Country/Region:** 
- **Coordinates:** [Lat, Lon]
- **Elevation:** [m]
- **Total Area Available:** [ha/km²]
- **Land Ownership:** [Public/Private/Indigenous]

## Climate Summary
| Month | Avg High (°C) | Avg Low (°C) | Precip (mm) | Daylight (h) |
|-------|---------------|--------------|-------------|--------------|
| Jan | | | | |
| Feb | | | | |
... [all months]

- **Climate Classification:** [Köppen code]
- **Frost-Free Days:** [X days]
- **Extreme Weather:** [Types, frequency]

## Access Analysis
- **Nearest Town:** [Name, distance, population]
- **Nearest Hospital:** [Name, distance, level]
- **Nearest Airstrip:** [Name, distance, runway length]
- **Road Access:** [Type, seasonal limitations]
- **Helicopter LZ:** [Availability, coordinates]

## Water Resources
| Source | Type | Distance | Flow/Volume | Quality |
|--------|------|----------|-------------|---------|
| [Name] | [River/Lake/Spring] | [km] | [L/s or ha] | [Notes] |

## Natural Hazards
| Hazard | Risk Level | Notes |
|--------|------------|-------|
| Flood | Low/Med/High | [Details] |
| Fire | Low/Med/High | [Details] |
| Wildlife | Low/Med/High | [Species of concern] |
| Weather | Low/Med/High | [Extreme events] |

## Regulatory Status
- **Land Manager:** [Agency/Owner]
- **Protected Status:** [Type, restrictions]
- **Permits Required:** [Types]
- **Camping Restrictions:** [Duration, size limits]

## Scoring
| Criterion | Weight | Score (1-10) | Weighted |
|-----------|--------|--------------|----------|
| Regulatory pathway | 25% | | |
| Wilderness quality | 15% | | |
| Climate habitability | 15% | | |
| Water availability | 10% | | |
| Resupply access | 10% | | |
| Emergency access | 10% | | |
| Research potential | 5% | | |
| Cost | 5% | | |
| Cultural accessibility | 5% | | |
| **Total** | 100% | | **X/10** |

## Recommendation
[Go/No-Go/Conditional with rationale]

## Next Steps
1. [Specific action]
...
```

## Comparison Matrix Template

```markdown
# Location Comparison: [Set Name]

| Factor | Location A | Location B | Location C |
|--------|------------|------------|------------|
| **Overall Score** | X/10 | X/10 | X/10 |
| Regulatory clarity | | | |
| Permit timeline | | | |
| Climate (comfort) | | | |
| Water availability | | | |
| Access (resupply) | | | |
| Emergency access | | | |
| Cost estimate | | | |
| Language/culture | | | |
| Starlink coverage | | | |
| Wildlife risk | | | |

## Key Tradeoffs
- [Location A vs B consideration]
- [Location B vs C consideration]
...

## Recommendation
**Top Choice:** [Location] because [reasons]
**Runner-up:** [Location] because [reasons]
**Not Recommended:** [Location] because [reasons]
```

## Research Queries

### Climate Research
```
"[Region] annual climate temperature precipitation months"
"[Region] extreme weather events frequency"
"[Region] best months for outdoor activities"
```

### Access Research
```
"[Region] nearest hospital medical services"
"[Region] helicopter charter services"
"[Region] roads access winter conditions"
```

### Regulatory Research
```
"[Region] wilderness camping regulations permit"
"[Region] land use zoning wilderness"
"[Region] protected areas restrictions camping"
```

## Quality Checklist

- [ ] Coordinates verified with multiple sources
- [ ] Climate data from authoritative source
- [ ] Access routes confirmed (not just map)
- [ ] Water sources field-verified if possible
- [ ] Regulatory status confirmed with agency
- [ ] Hazards assessment complete
- [ ] Scoring criteria applied consistently
- [ ] Comparison uses same criteria for all locations
