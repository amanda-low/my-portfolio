# Cart Revamp: Redesigning HelloFresh's Cart for Transparency, Flexibility & Scale

**Role:** Product Designer (UX & Design)
**Timeline:** 3-4 months
**Scope:** Global rollout across iOS, Android, Web | HelloFresh + white-label brands
**Impact:** Shipped globally with directionally positive results and +11.6% engagement with new delivery controls

---

## Overview

### The Challenge

The HelloFresh cart had become a friction point. Through pricing research and user interviews, we uncovered three recurring pain points:

1. **"I want to know why certain add-ons are in my cart."** — Users were confused by items appearing in their cart without context
2. **"Show me how much I'm saving—it makes me feel good about my order."** — The value of their subscription benefits wasn't visible
3. **"I want more flexibility with my delivery without multiple steps."** — Changing delivery required leaving the cart entirely

Beyond user frustrations, the cart was also a critical business touchpoint. It's where customers make pause and cancel decisions. And with Factor integration on the roadmap, we needed a scalable foundation.

### The Price Perception Problem

Our pricing pain point interviews revealed deeper issues around trust and transparency:

- Users felt uncertain about what they were actually paying for
- Surprise charges at checkout led to distrust
- Missing context about surcharges and add-ons created friction
- Many users wanted to see an itemized breakdown of costs

> *"I just want to know what I'm getting and what I'm paying for. When things show up that I don't remember adding, it makes me question everything."*
> — User interview participant

### My Contribution

I contributed to the research plan and partnered with our UX Researcher to conduct pricing pain point interviews. I owned the design variations, led stakeholder alignment on what to test vs. ship as baseline, and coordinated across iOS, Android, and Web platforms.

---

## Research & Discovery

### Synthesizing Multiple Research Streams

I drew from several research sources to build a complete picture:

**Price Clarity Research** revealed that:
- Users struggle to understand their total cost and what's included
- Transparency about pricing builds trust and reduces anxiety
- Savings visibility reinforces value perception and justifies the subscription

**User Interview Themes** from pricing pain point sessions:
- Frustration with unexpected charges and surcharges
- Strong desire to see itemized breakdown of costs
- Positive emotional response when seeing discounts and savings
- Confusion about what add-ons are in cart and why they were added

**Usability Testing Insights** showed:
- Users want clear explanation of additional fees
- Context for *why* items appear matters significantly
- Labels like "Paired with [meal name]" dramatically reduced confusion

[IMAGE PLACEHOLDER: User journey map showing emotional highs and lows across the cart experience, with pain points around pricing clarity highlighted]

### Key Insight

The cart wasn't just a checkout step—it was a moment of truth where users either felt confident in their decision or started questioning their subscription value.

---

## Design Process

### Defining the Scope

Working with Product and Engineering, we identified what should ship to everyone versus what needed validation through experimentation:

**Core enhancements (baseline for all):**
- Clickable food items with links to product details
- Contextual add-on labels explaining why items are in cart
- Improved cart structure and information hierarchy

**Testable features:**
- **Variation 1:** Savings display showing subscription benefits
- **Variation 2:** In-cart delivery date editing

### Design Decisions

**Why contextual add-on labels?**

Research showed users were confused when items appeared in their cart unexpectedly. By adding labels like "Paired with Chicken Parmigiana," "Free Breakfast for Life," or "Subscribed to 1 per week," we provided immediate context that reduced friction and support inquiries.

[IMAGE PLACEHOLDER: Before/after comparison showing add-on items with and without contextual labels]

**Why show savings from benefits only?**

We scoped the savings display to show subscription benefits (loyalty rewards, free items) rather than item-level discounts. This was partly a technical constraint—the backend couldn't easily surface item-level discount data—but also a strategic choice. Benefit savings reinforced subscription value, which aligned with retention goals. We planned to expand to full price breakdown in the 2026 pricing roadmap.

[IMAGE PLACEHOLDER: Savings accordion design showing "$X saved!" with expandable details]

**Why in-cart delivery edit without skip/pause?**

Users wanted delivery flexibility, but adding skip/pause controls to the cart introduced complexity and risk. We scoped to date changes only—solving the core need (rescheduling) without the baggage of skip/cancel decisions that warranted separate UX consideration.

[IMAGE PLACEHOLDER: Edit delivery drawer design showing date selection]

### Prototyping & Testing

I created prototypes for usability testing to validate the design direction. Key findings:

- Contextual labels were immediately understood and appreciated
- The savings accordion generated positive emotional responses ("Oh nice, I didn't realize I was saving that much!")
- Delivery editing felt natural and reduced perceived friction
- No confusion about the new cart structure

---

## Navigating Constraints

### Technical Constraints

The savings display was limited to subscription benefits because item-level discount data wasn't available from the existing backend. Rather than delay the project, we scoped to what was achievable now and documented the fuller vision for future work.

### Cross-Team Dependencies

This project required coordination across:
- **Cart Experience Squad** — owned the user-facing cart
- **Cart Foundation Squad** — owned the underlying data layer
- **Product Analytics** — experiment setup and metrics definition
- **Platform teams** — iOS, Android, and Web implementation

### Stakeholder Alignment

A key challenge was aligning on what to test vs. ship as default. Through collaborative sessions with PM and Analytics, we agreed:
- Core enhancements (clickable items, labels, structure) would ship to everyone
- Savings display and delivery edit would be tested as variations
- We'd evaluate based on both financial metrics *and* behavioral signals

---

## The Solution

The final design introduced four key improvements:

### 1. Clickable Food Items
Every item in the cart now links to its product detail page, letting users quickly verify what they're getting without leaving the cart flow.

### 2. Contextual Add-On Labels
Add-ons now display clear labels explaining their presence:
- "Paired with Chicken Parmigiana" — for meal pairings
- "Free Breakfast for Life" — for promotional items
- "Subscribed to 1 per week" — for recurring add-ons

### 3. Savings Display
A collapsible section showing "$X saved!" with a link to the wallet drawer for details. Users can see the value their subscription provides at the moment of purchase decision.

### 4. In-Cart Delivery Reschedule
An "Edit" button opens a drawer to change delivery date without leaving the cart. Quick, contextual, and non-disruptive.

[IMAGE PLACEHOLDER: Full cart screen showing all four features in context]

---

## Experimentation & Results

We ran a controlled experiment with two variations to isolate the impact of each testable feature:

- **Control:** Core enhancements only
- **Variation 1:** Core + Savings display
- **Variation 2:** Core + Savings display + Delivery edit

### Quantitative Results

| Metric | Result |
|--------|--------|
| Net revenue | +0.23% |
| Net order value | +0.26% |
| Delivered orders | +0.08% |
| Pause rate | -0.39% |

These results were directionally positive but not statistically significant.

### Behavioral Signals

The stronger story emerged from how users engaged with the new features:

- **11.6%** of users clicked the Edit Delivery Drawer
- **+3.6%** increase in users expanding the savings accordion
- More delivery modifications observed across all markets
- **No negative impact** on any metric in any market

---

## Decision-Making Rationale

While the financial metrics weren't statistically significant, we made the decision to roll out globally based on:

1. **Behavioral evidence** — Users actively engaged with the new features. 11.6% delivery drawer engagement is substantial for a new UI element.

2. **No downside risk** — The experiment showed no negative impact across any market or metric. This wasn't a neutral result—it was a green light.

3. **Customer value delivered** — We directly addressed documented pain points from research. Users can now see why items are in their cart, understand their savings, and reschedule delivery without friction.

4. **Foundation for future** — The new cart architecture supports Factor integration and future enhancements. We'd be doing this work eventually; the experiment validated we could do it now without harm.

5. **Prior research validation** — Insights from the Loyalty rewards rollout showed that savings visibility drives engagement. This experiment reinforced that pattern.

---

## Impact

**Shipped to:**
- Platforms: iOS, Android, Web
- Markets: Global (HelloFresh + white-label brands)
- Set as new baseline configuration

**Measured outcomes:**
- +11.6% engagement with delivery controls
- +3.6% engagement with savings visibility
- Increased delivery modifications (more flexibility used)
- Zero negative impact across global markets

---

## Reflection

### What Worked

Scoping the experiment carefully paid off. By separating "what we're confident about" (core enhancements) from "what we need to validate" (savings, delivery edit), we shipped user value quickly while still generating learnings.

The decision to roll out despite non-significant financial results was the right call. Sometimes the absence of negative signal, combined with positive behavioral data and research-backed confidence, is enough to move forward.

### What I'd Do Differently

**Longer experiment duration:** Financial metrics like retention take time to materialize. A longer experiment window might have captured downstream effects.

**Item-level savings:** The technical constraint that limited us to benefit savings only left value on the table. I'd push harder to scope a phased approach that gets us to full price transparency faster.

**Deeper delivery analysis:** 11.6% engagement with delivery editing is promising, but I'd want to understand conversion—how many of those users actually changed their date, and did that reduce missed deliveries?

---

## Credits

This project was a true cross-functional effort:
- **Product Analytics** — Experiment design and measurement
- **Cart Experience Squad** — Implementation and iteration
- **Cart Foundation Squad** — Backend architecture
- **UX Research** — User interviews and usability testing
- **Platform Teams** — iOS, Android, Web coordination
