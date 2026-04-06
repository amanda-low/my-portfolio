# Smaller Product Cards

**Role:** Product Designer (Experimentation & UX Research)
**Timeline:** Q4 2025
**Scope:** iOS, Android | All brands (8 markets)

![Before and after comparison of product card layouts](../images/compact-cards-comparison.png)

---

## Overview

### The Hypothesis

In meal kit apps, users browse dozens of add-on products—sides, desserts, proteins, breakfast items. The prevailing assumption was that smaller, more compact cards would help users see more options at once, improving discovery and driving higher engagement.

We set out to test this with a controlled experiment across 8 markets.

### The Result

The hypothesis was wrong. Compact cards reduced conversions across every key metric:

- **-0.82%** Order Confirmed Rate (statistically significant)
- **-0.32%** Net Average Order Value
- **-0.35%** Add-to-Cart Rate

What seemed like a simple layout optimization revealed deeper truths about how users make purchase decisions in our app.

### My Contribution

I partnered with the experimentation team to analyze results and led the follow-up UX research to understand *why* the experiment failed. I synthesized quantitative and qualitative findings into actionable recommendations and presented the case against shipping to stakeholders.

---

## Research & Discovery

### Experiment Design

We tested two card layouts in the add-on browsing experience:

**Control:** Horizontal cards with full product information—name, description, dietary tags, price, and a prominent "Add" button.

**Variant:** Compact grid cards with reduced information—smaller thumbnails, no description, no dietary tags, and a minimal "+" icon instead of "Add" button.

The experiment ran across US, Canada, Germany, UK, France, Netherlands, Australia, and Belgium.

### Quantitative Results

| Metric | Impact | Significance |
|--------|--------|--------------|
| Order Confirmed Rate | -0.82% | Significant (p < 0.05) |
| Net AOV | -0.32% | Significant |
| Add-to-Cart Rate | -0.35% | Significant |
| Gross AOV | -0.27% | Significant |

The results were consistent across all 8 markets. Not a single market showed positive movement.

![Chart showing negative impact across all metrics](../images/compact-cards-results.png)

### Identifying the Drivers

Deep-dive analysis revealed three primary drivers of the negative impact:

**1. Information Friction**
Removing dietary tags and descriptions forced users into a slower browse-click-evaluate-return loop. Users couldn't filter mentally while scanning—they had to tap into each product to learn basic details.

**2. Disrupted Add Flow**
The "+" icon tested significantly worse than the word "Add." Users hesitated, unsure if tapping would add to cart or open details. This micro-friction compounded across dozens of products.

**3. Reduced Desirability**
Smaller thumbnails made products less appetizing. Food photography drives emotional purchase decisions—shrinking images reduced the "want" factor.

---

## UX Research Validation

### Testing Approach

To validate these hypotheses, I ran unmoderated user testing with 160 participants across US, UK, Germany, and Australia. Users compared two prototypes:

- **Prototype A:** Horizontal cards with full information (similar to control)
- **Prototype B:** Compact grid cards (similar to variant)

### Research Findings

The qualitative results strongly validated the quantitative signals:

| Question | Prototype A | Prototype B |
|----------|-------------|-------------|
| "Which layout made browsing easier?" | **79%** | 71% |
| "Which had all the information you needed?" | **83%** | 69% |
| "Which would you prefer to use?" | **76%** | 74% |

**Key Themes from User Feedback:**

> *"I like seeing the description without having to click. It helps me decide faster."*
> — US participant

> *"The tags are really important to me. I need to know if something is vegetarian before I bother looking at it."*
> — UK participant

> *"The pictures are too small in the grid. I can't really tell what the food looks like."*
> — German participant

### Demographic Insights

One critical finding: users over 55 showed the strongest preference for horizontal cards with full information. This demographic—a significant portion of HelloFresh's customer base—was disproportionately impacted by the compact layout.

![Quote highlights from user research](../images/compact-cards-quotes.png)

---

## The Recommendation

Based on converging evidence from experimentation and research, I recommended:

1. **Do not ship compact cards.** The hypothesis was invalidated across all metrics and markets.

2. **Maintain horizontal layout with full information.** Users need dietary tags, descriptions, and prominent Add buttons to make confident purchase decisions.

3. **Explore alternative discovery improvements.** If the goal is helping users find products faster, invest in filtering, search, or personalized recommendations—not information reduction.

4. **Preserve thumbnail quality.** Food photography is a conversion driver. Any future card redesign should maintain or increase image prominence.

---

## Reflection

### What This Taught Me

**"Simpler" isn't always better.** The intuition that compact cards would improve discovery was reasonable but wrong. Users weren't struggling with *seeing* products—they were struggling with *evaluating* them. Showing more cards doesn't help if each card lacks the information needed to make a decision.

**Quantitative and qualitative research are partners.** The A/B test told us *what* happened. The UX research told us *why*. Neither alone would have given us the full picture or the confidence to make recommendations.

**Negative results are valuable results.** This experiment prevented us from shipping a change that would have hurt customers and revenue across 8 markets. That's not a failed experiment—that's the system working.

### What I'd Do Differently

**Earlier user research:** If we'd tested prototypes before the full experiment, we might have caught the information friction issue earlier and saved engineering time.

**Segment analysis upfront:** The demographic impact on users 55+ was a late discovery. Building age segmentation into the analysis plan from the start would surface these insights faster.

**Alternative variants:** Testing a middle ground—compact cards *with* dietary tags—could have isolated which information was truly essential.

