# Deep Research Skill

## Skill Overview

**Name:** deep-research  
**Purpose:** Conduct comprehensive, multi-source research with cross-validation  
**Primary Tool:** multi-tier-research MCP server  

## When to Use This Skill

Use deep-research when:
- Question requires high confidence answer
- Multiple perspectives or sources needed
- Cross-validation between providers valuable
- Research will inform major decisions
- Topic is complex or nuanced

Do NOT use for:
- Quick factual lookups (use web_search)
- Conversational questions (use perplexity_ask)
- Time-sensitive queries where speed matters

## Research Workflow

### Step 1: Load Credentials
```
multi-tier-research:research_load_credentials()
```
This loads API keys from 1Password for all research providers.

### Step 2: Check Provider Status
```
multi-tier-research:research_status()
```
Verify which providers are available before proceeding.

### Step 3: Formulate Query

**Good Research Queries:**
- Specific, well-defined questions
- Include context and scope
- Specify what aspects matter most

**Bad Research Queries:**
- Vague or overly broad
- Multiple unrelated questions bundled
- Missing critical context

**Example - Good:**
"What are the legal requirements for operating a 365-day wilderness family camp for 80 people in Norway, Sweden, and Finland? Include permit types, application processes, duration limits, and any size restrictions."

**Example - Bad:**
"How do I start a wilderness camp?"

### Step 4: Execute Research

**Option A: Single Provider (Faster)**
```
multi-tier-research:research_perplexity(
  query="your question",
  model="sonar-deep-research"
)
```

**Option B: All Providers (Comprehensive)**
```
multi-tier-research:research_all(
  query="your question",
  providers=["perplexity", "openai", "gemini"]
)
```

### Step 5: Synthesize Results

When using research_all, you'll receive results from multiple providers. Synthesize by:

1. **Identify consensus** - What do all/most providers agree on?
2. **Note disagreements** - Where do providers differ?
3. **Assess source quality** - Which providers cite better sources?
4. **Identify gaps** - What wasn't answered?
5. **Form conclusion** - What's the best-supported answer?

### Step 6: Document Output

Save research to `/outputs/research/` with:
- Query asked
- Providers used
- Key findings (consensus)
- Disagreements/uncertainties
- Sources cited
- Confidence level
- Follow-up questions

### Step 7: Clear Credentials (Security)
```
multi-tier-research:research_clear_credentials()
```

## Provider Characteristics

### Perplexity (sonar-deep-research)
- **Strengths:** Web search integration, citations, current information
- **Best for:** Factual queries, recent events, sourced research
- **Time:** 5-15 minutes for deep research

### OpenAI (o4-mini-deep-research)
- **Strengths:** Comprehensive analysis, code execution, structured reports
- **Best for:** Complex analysis, data processing, detailed reports
- **Time:** 5-15 minutes

### Gemini
- **Strengths:** Visual reasoning, document analysis, multi-step research
- **Best for:** Complex queries, deep web navigation
- **Time:** 10-20 minutes

## Research Templates

### Regulatory Research
```markdown
Query: "What are the [specific regulations] for [activity] in [jurisdiction(s)]?
Include: permit types, application process, costs, timelines, restrictions,
recent changes, and any relevant case law or precedents."
```

### Comparable Analysis
```markdown
Query: "Compare [options A, B, C] for [use case] based on:
1. [Criterion 1]
2. [Criterion 2]
3. [Criterion 3]
Include specific examples, costs where available, and pros/cons for each."
```

### Market Research
```markdown
Query: "What is the current market for [product/service]?
Include: market size, key players, pricing ranges, target demographics,
trends, and growth projections. Focus on [specific segment] if available."
```

### Technical Research
```markdown
Query: "What are the best [technology/product] options for [use case]?
Requirements: [list requirements]
Include: specific products, specifications, costs, availability,
and real-world performance reports where available."
```

## Quality Checklist

Before finalizing research output, verify:

- [ ] Query was specific and well-scoped
- [ ] Multiple sources consulted (if using research_all)
- [ ] Consensus and disagreements noted
- [ ] Sources are credible and recent
- [ ] Confidence level is justified
- [ ] Gaps and limitations acknowledged
- [ ] Follow-up questions identified
- [ ] Output saved to correct location

## Error Handling

### Provider Unavailable
If a provider fails, proceed with available providers and note the gap.

### Conflicting Results
Document the conflict, assess source quality, and present both views with your assessment of which is more credible.

### Insufficient Results
Reformulate query and retry, or use web_search for additional sources.

## Output Location

All deep research outputs go to:
```
/outputs/research/[topic-slug]-[date].md
```

Example:
```
/outputs/research/norway-camping-regulations-2026-01-20.md
```
