# Building Trust at Checkout

**Role:** Product Designer (UX & Design)
**Timeline:** Q2-Q3 2024
**Scope:** iOS, Android, Web | 8 brands globally
**Ownership:** Discovery, Definition, Design, Development, Deployment

---

## The Challenge

The first version of the editable cart launched in Q2 2022, but editing was limited to quantities only—users couldn't view product details or modify attributes like customizations from the cart. As meal selection options grew more complex, the cart struggled to keep up. Without centralized frontend ownership, new features were displayed poorly or not at all.

Users were building increasingly personalized orders, but the cart wasn't adequately reflecting these changes. Customers experienced confusion about what was actually in their box, why items appeared, and what they would pay.

Beyond user frustrations, the cart was a critical business touchpoint—reviewing their order affected customer pause and cancel decisions. With centralization of the mealkit and ready-to-eat codebases on the roadmap, a scalable, modular cart design was needed to clearly communicate complex orders and ensure seamless purchase decisions.

## My Role

A new cross-discipline team was formed in Q1 2022 to own the frontend cart experience. Due to my previous work on price clarity, I was asked to join as the lead product designer. After completing delivery of the Autosave initiative in Q1 2024, I commenced work on Cart Redesign in Q2 2024.

I led usability testing, collaborated with a UX research partner on user interviews, and compiled UX principles to inform the design vision and iterations. I worked with a product owner and engineers to deliver design iterations incrementally for maximum impact. Design delivery included a design system composite for all meal kit brands, collaboration with a UX writer, and documentation of meal selection price logic, display rules, and handover guidelines. Support for engineering delivery included copy localization and UA testing.

---

## What users told us

The cart wasn't just a step toward checkout—it was a moment of truth where users either felt confident in their decision or started questioning their subscription value.

**I don't know what I'm paying**
Price comprehension was breaking the user journey. Unclear pricing was the top UXR pain point, app-wide, in 2023. During usability testing, only 38% of users could correctly calculate the cost of a surcharge meal — some using a calculator to complete the task.

> "I think I have to dig too far in to know my prices. Why don't all meals have a price? It's not communicated well."

**I don't know what's in my cart**
In interviews and usability testing, users struggled to distinguish which meals were included in their subscription versus which had surcharges. They didn't understand why items appeared in their cart and found the mixing of included and premium meals confusing and untrustworthy.

> "I don't like that the meals with extra cost are all mixed in with the free meals... It feels like they are trying to trick me."

---

## Design Principles

Based on this research, I defined three principles to guide the redesign. The Cart Redesign vision was presented in a company knowledge sharing session at the end of Q1 2024.

**Assurance of selections:** Users should feel secure about what they'll receive in their box. More trust = higher engagement.

**Modification of selections:** Users should be able to view and modify all selections during revision in cart, avoiding backwards navigation in the checkout flow.

**Price clarity of selections:** Costs, discounts, and benefits should be simple to understand. We should not ship system complexity to customers.

## Design Decisions

The hierarchy followed the two core jobs of any e-commerce cart: review your order, then confirm and pay. As a subscription service with six editable weeks, the cart needed to consolidate everything into one screen. Since price clarity was a top pain point, I kept paired add-ons in their own section so users always knew which items were included versus which cost extra.

---

## Web release

The existing cart used a single-column layout that pushed order totals below the fold for larger baskets, fragmenting the review experience. With a long-term company strategy to increase basket size—expanding add-on offerings and introducing ready-to-eat options—alternatives like a side drawer wouldn't scale. A two-column desktop layout accommodated a larger, more complex cart while keeping order totals visible, and a full-width cross-selling carousel opened up catalogue discovery.

The primary goal was to validate the new layout without negatively impacting revenue—which the results confirmed. After iterating on the upselling banner to address a small drop in extra meal uptake, the redesign rolled out across all web markets in December 2024.

The design system had just introduced brand tokens, allowing one design to serve multiple brands simultaneously. The cart was one of the first features to leverage this—after validating on HelloFresh, Cart Redesign was rolled out to Chefs Plate, Green Chef, and EveryPlate on web in Q4 2024.

---

## App release and rebrand

The app experiment launched in Q3 2024, bundling delivery rescheduling, savings display, and Free Item for Life labels for validation. Financial metrics were directionally positive but not statistically significant (+0.23% net revenue, +0.26% order value, -0.39% pause rate). Engagement was strong: 11.6% of users clicked the Edit Delivery Drawer, and savings accordion expansion increased by 3.6%. With no negative impact on any metric, these features rolled out across app and web in Q2 2025.

The app experiment also coincided with UI2—HelloFresh's rebrand introducing minimalist typography and a refined color palette. We ran a 2x2 experiment to isolate cart changes from the visual refresh, and UI2 rolled out on HelloFresh alongside the cart features.

## What didn't make the final cut

Price clarity changes and multi-seller layout restructuring were deprioritized due to backend dependencies—we added a "Ships separately" label as a lighter solution. Payment method display was descoped after experiments showed it increased cancellations.

---

## What Worked

**Research-driven confidence:** Clear problem definition from discovery gave me confidence to advocate for features like in-cart delivery editing and make efficient design decisions throughout.

**Strategic scoping and collaboration:** Separating high-confidence changes from those needing validation let us ship value quickly. Close work with the design system team ensured the cart was modular across brands and resilient to the UI2 rebrand.

## What I'd Do Differently

Push harder on price clarity. It was the top UXR pain point, but we deprioritized it due to backend dependencies. The research evidence was strong enough to justify the coordination cost.

Earn the upselling placement. Generic recommendations take up valuable real estate—I'd push to make them personalized or reconsider the section entirely.

Establish guardrails earlier. The cart attracts constant requests from other teams. Clearer criteria upfront for what belongs—and earlier alignment on backend dependencies—would have reduced friction.
