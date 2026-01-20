# Supplier Research Skill

## Skill Overview

**Name:** supplier-research  
**Purpose:** Research, evaluate, and compare suppliers for equipment and services  
**Primary Tools:** web_search, web_fetch, perplexity_research  

## When to Use This Skill

Use supplier-research when:
- Identifying vendors for equipment categories
- Comparing products on specifications and price
- Evaluating vendor reliability and reputation
- Finding specialty/niche suppliers
- Building vendor relationship database

## Supplier Categories

### Infrastructure Equipment
- Shelters (yurts, tents, domes)
- Water purification systems
- Composting toilets
- Solar power systems
- Heating systems

### Technology Equipment
- Satellite communication (Starlink, phones)
- Radios and communication devices
- Power banks and chargers
- Cameras and monitoring equipment

### Operations & Logistics
- Food suppliers (bulk, freeze-dried)
- Transportation services
- Helicopter charter
- Drone delivery services

### Safety & Medical
- First aid supplies
- Emergency beacons
- Evacuation services
- Insurance providers

## Research Workflow

### Step 1: Category Scoping
Define what you're looking for:
- Product category
- Key specifications/requirements
- Quantity needed
- Budget range
- Geographic constraints (shipping)

### Step 2: Initial Search
```
web_search("[product category] suppliers wilderness outdoor")
web_search("best [product] for off-grid living")
web_search("[product] comparison review")
```

### Step 3: Vendor Deep Dive
For promising vendors:
```
web_fetch("[vendor website]/products/[category]")
web_search("[vendor name] reviews reputation")
web_search("[vendor name] warranty support")
```

### Step 4: Specification Comparison
Create comparison matrix with key specs

### Step 5: Price Research
```
web_search("[product name] price buy")
web_search("[product] dealer distributor [region]")
```

### Step 6: Validate with Research
For major purchases:
```
perplexity_research("What are the best [products] for [use case]? 
Compare leading options on [criteria].")
```

## Supplier Profile Template

```markdown
# Supplier Profile: [Company Name]

## Basic Information
- **Company:** [Name]
- **Website:** [URL]
- **Location:** [HQ, Shipping from]
- **Founded:** [Year]
- **Specialty:** [Primary products/services]

## Products Relevant to Project

| Product | Model | Specifications | List Price | Notes |
|---------|-------|----------------|------------|-------|
| [Name] | [Model] | [Key specs] | [€] | [Notes] |

## Evaluation

### Quality
- **Build Quality:** [1-5]
- **Materials:** [Description]
- **Certifications:** [List any]
- **Warranty:** [Duration, coverage]

### Service
- **Customer Service:** [1-5]
- **Technical Support:** [Available?]
- **Return Policy:** [Terms]
- **Lead Time:** [Typical]

### Pricing
- **Price Level:** [Budget/Mid/Premium]
- **Volume Discounts:** [Available?]
- **Shipping:** [Included? Cost?]
- **Payment Terms:** [Options]

### Reputation
- **Years in Business:** [X]
- **Reviews:** [Summary of sentiment]
- **Industry Standing:** [Notes]
- **References:** [If available]

## Contact Information
- **Sales Contact:** [Name, email, phone]
- **Support Contact:** [Name, email, phone]
- **Account Manager:** [If assigned]

## Order History
| Date | Products | Quantity | Total | Status |
|------|----------|----------|-------|--------|

## Notes
- [Relevant observations]

## Recommendation
- **Overall Rating:** [1-5]
- **Recommended for:** [Use cases]
- **Cautions:** [Any concerns]
```

## Product Comparison Template

```markdown
# Product Comparison: [Category]

## Requirements
- [Requirement 1]
- [Requirement 2]
...

## Options Evaluated

| Feature | Option A | Option B | Option C |
|---------|----------|----------|----------|
| Model | [Name] | [Name] | [Name] |
| Manufacturer | [Name] | [Name] | [Name] |
| [Spec 1] | [Value] | [Value] | [Value] |
| [Spec 2] | [Value] | [Value] | [Value] |
| Price | [€] | [€] | [€] |
| Warranty | [Terms] | [Terms] | [Terms] |
| Lead Time | [Days] | [Days] | [Days] |
| Shipping | [Cost] | [Cost] | [Cost] |

## Scoring

| Criterion | Weight | Option A | Option B | Option C |
|-----------|--------|----------|----------|----------|
| Meets specs | 30% | [1-5] | [1-5] | [1-5] |
| Quality | 25% | [1-5] | [1-5] | [1-5] |
| Price | 20% | [1-5] | [1-5] | [1-5] |
| Support | 15% | [1-5] | [1-5] | [1-5] |
| Availability | 10% | [1-5] | [1-5] | [1-5] |
| **Total** | 100% | [X] | [X] | [X] |

## Recommendation

**Recommended:** [Option] because [reasons]

**Alternative:** [Option] if [conditions]

## Procurement Action
- [ ] Confirm specifications with vendor
- [ ] Request formal quote
- [ ] Check references
- [ ] Negotiate terms
- [ ] Place order
```

## Key Research Queries

### Finding Suppliers
```
"[product] manufacturers suppliers"
"[product] dealers distributors [region]"
"best [product] brands wilderness outdoor"
```

### Comparing Products
```
"[product A] vs [product B] comparison"
"[product category] reviews 2024 2025"
"[product] real world test long term review"
```

### Evaluating Vendors
```
"[company name] reviews reputation"
"[company name] customer service experience"
"[company name] warranty claims"
```

### Pricing Research
```
"[product] price comparison"
"[product] bulk discount wholesale"
"[product] used refurbished marketplace"
```

## Vendor Database Structure

Maintain supplier database in `/data/suppliers/`:

```
/data/suppliers/
├── infrastructure/
│   ├── shelters.md
│   ├── water-systems.md
│   ├── sanitation.md
│   └── power.md
├── technology/
│   ├── connectivity.md
│   ├── communication.md
│   └── devices.md
├── operations/
│   ├── food-suppliers.md
│   ├── transport.md
│   └── equipment.md
└── services/
    ├── helicopter.md
    ├── insurance.md
    └── medical.md
```

## Quality Checklist

- [ ] Multiple vendors researched per category
- [ ] Specifications match requirements
- [ ] Prices verified (not just list price)
- [ ] Shipping costs and logistics considered
- [ ] Reviews and reputation checked
- [ ] Warranty and support evaluated
- [ ] Lead times confirmed
- [ ] Backup suppliers identified for critical items
