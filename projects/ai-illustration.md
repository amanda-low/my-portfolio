# Scaling Illustrations with AI

**Role:** Product Designer (Design Ops)
**Timeline:** Q2 2026 (ongoing)
**Scope:** Web, React Native | 8 brands
**Ownership:** Discovery, Definition, Design

---

## The Challenge

In mid-2025, HelloFresh defined a new 3D illustration style to modernize the brand. But rollout was slow to start. The problem? 34 teams across 8 brands had been storing and implementing their own illustrations. There was no centralized inventory, no clear ownership map, and assets lived in dozens of locations.

## My Role

I was asked to help unblock the migration because of my experience bridging the design-engineering gap while embedded in engineering teams. I had strong relationships with developers and engineering managers, hands-on experience with multi-brand rollouts, and a track record of navigating complexity.

## The AI-Assisted Approach

The new 3D illustration style had already been established, and new assets could easily be generated with a custom ChatGPT prompt.

An audit was needed to map and replace the old-style illustrations. I investigated whether Claude Code could help us scale what would otherwise require a long period of tedious manual work. After some testing, I found it could search codebases for image files and be trained to recognize the difference between photos, 2D illustrations, and 3D illustrations—transforming an overwhelming migration into a manageable, systematic process.

---

## What We Found

Claude Code searched for image asset file types across the codebase, then helped classify each by content type, content size, location, platform, and team ownership.

Out of 382 assets found, Claude identified 211 illustrations in the old 2D style (163 on web, 48 on mobile app) owned by 34 teams in 7 different storage locations. There were also 27 animations in the old 2D style that would need replacing.

## Visualizing the Audit

The CSV had the data, but I needed a way to see illustrations alongside their screens—essential for helping teams recreate assets and for reviewing pull requests. Claude suggested an HTML site to share the audit with stakeholders.

Once built, an unexpected benefit emerged: I could spot misclassifications immediately. Some 3D illustrations had been tagged as 2D; photos had been labeled as illustrations. Since I could customize the UI, I added a review feature so designers could reassign assets from their own teams. What started as a communication tool became an interactive platform for 34 teams to filter, review, and correct the data themselves.

The site also solved another problem: there had been no central repository. With illustrations scattered across teams and storage locations, maintaining consistency for common states required constant coordination. Now everyone had a single source of truth.

## Prioritization Framework

With the audit complete, I planned the cross-team migration effort. Prioritization was based on impact and efficiency, with a small number still to be categorized:

- Design system components (6) — cascades automatically
- Cross-platform concepts (19) — replace once, use everywhere
- Logged-in screens (103) — core experience
- Logged-out pages (73) — acquisition

---

## Low-Effort Implementation

Since Claude had already identified each file's name, location, and owning team, it could also handle the replacement. Teams could run the swap themselves, or I could create pull requests for them to review.

---

## Progress So Far

The project is ongoing, but key milestones have been reached:

- Audit complete
- Migration plan established
- Illustration request workflow set up via Jira
- ChatGPT prompts documented for consistent 3D generation

## What's Next

- Audit native iOS and Android codebases for remaining legacy illustrations
- Work with design systems team to centralize storage and create reusable components
- Update 2D animations to the 3D style
