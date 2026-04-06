# Cart Revamp: Building Trust at Checkout

**Role:** Product Designer (UX & Design)
**Timeline:** Q3–Q4 2025
**Scope:** iOS, Android, Web | All brands (8)

![Before and after comparison of HelloFresh cart across devices](../images/cart-revamp-comparison.png)

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

> *"I think I have to dig too far in to know my prices. Why don't all meals have a price? It's not communicated well. I feel a little unhappy about that."*
> — Prospective customer, pricing pain point interview

### My Role

A new cross-discipline team was formed in Q1 2022 to own the frontend cart experience. Due to my previous work on price clarity, I was asked to join as the lead product designer. After completing delivery of the Autosave initiative in Q1 2024, I commenced work on Cart Revamp in Q2 2024.

I led usability testing, collaborated with a UX research partner on user interviews, and compiled UX principles to inform the design vision and iterations. I worked with a product owner and engineers to deliver design iterations incrementally for maximum impact. Design delivery included a design system composite for all meal kit brands, collaboration with a UX writer, and documentation of meal selection price logic, display rules, and handover guidelines. Support for engineering delivery included copy localization and UA testing.

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

![User journey map showing emotional highs and lows across the cart experience](../images/cart-revamp-journey-map.png)

### Key Insight

The cart wasn't just a step toward checkout—it was a moment of truth where users either felt confident in their decision or started questioning their subscription value.

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

![Before and after comparison showing add-on items with contextual labels](../images/cart-revamp-labels.png)

**Why show savings from benefits only?**

We scoped the savings display to show subscription benefits (loyalty rewards, free items) rather than item-level discounts. This was partly a technical constraint—the backend couldn't easily surface item-level discount data—but also a strategic choice. Benefit savings reinforced subscription value, which aligned with retention goals. We planned to expand to full price breakdown in the 2026 pricing roadmap.


**Why in-cart delivery edit without skip/pause?**

Users wanted delivery flexibility, but adding skip/pause controls to the cart introduced complexity and risk. We scoped to date changes only—solving the core need (rescheduling) without the baggage of skip/cancel decisions that warranted separate UX consideration.

![Edit delivery drawer showing date selection](../images/cart-revamp-delivery.png)

### Prototyping & Testing

I created prototypes for usability testing to validate the design direction. Key findings:

- Contextual labels were immediately understood and appreciated
- The savings accordion generated positive emotional responses ("Oh nice, I didn't realize I was saving that much!")
- Delivery editing felt natural and reduced perceived friction
- No confusion about the new cart structure

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

### White-label Mealkit Rollout and UI2

The design system had just introduced brand tokens, allowing one design to serve multiple brands simultaneously. The cart was one of the first features to leverage this—after validating on HelloFresh, Cart Revamp was rolled out to Chefs Plate, Green Chef, and EveryPlate on web in Q4 2024.

The Cart Revamp experiment on app in Q3 2024 also coincided with UI2—HelloFresh's rebrand introducing minimalist typography and a refined color palette. Since UI2 was also being tested, we ran a 2x2 experiment: control and variant for both UI1 and UI2, isolating the cart changes from the visual refresh. UI2 was rolled out on HelloFresh in Q2 2025.

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

*Shipped globally across iOS, Android, and Web for HelloFresh and white-label brands.*

---

## Reflection

### What Worked

**Rigorous discovery shaped the entire project.** A clear problem definition from research gave me confidence to navigate design iterations efficiently—and to advocate for features like in-cart delivery editing that directly addressed user pain points.

**Foundational e-commerce knowledge informed the information architecture.** Benchmarking analysis revealed that a standard checkout follows two distinct steps: reviewing the order, then confirming it. As a subscription service, HelloFresh combines both into a single screen—but the underlying jobs-to-be-done remain. The Cart Revamp design reflects this: clear order review at the top, confirmation actions anchored at the bottom, each serving its distinct purpose within a unified experience.

**Close collaboration with the design system team was essential.** Working alongside them ensured the cart was truly modular and scalable—not just across brands, but resilient to visual changes like the UI2 rebrand. This relationship became a foundation for future multi-brand and accessibility initiatives.

**Scoping strategically paid off.** By separating "what we're confident about" from "what needs validation," we shipped user value quickly while generating learnings. Rolling out despite non-significant financial metrics was the right call—behavioral data, zero downside risk, and research confidence justified the decision.

### What I'd Do Differently

**Longer experiment duration:** Financial metrics like retention take time to materialize. A longer experiment window might have captured downstream effects.

**Item-level savings:** The technical constraint that limited us to benefit savings only left value on the table. I'd push harder to scope a phased approach that gets us to full price transparency faster.

**Deeper delivery analysis:** 11.6% engagement with delivery editing is promising, but I'd want to understand conversion—how many of those users actually changed their date, and did that reduce missed deliveries?

