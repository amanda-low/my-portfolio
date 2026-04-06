# Portfolio Style Guide

## Typography

### Fonts

| Font | Usage | Weight | Google Fonts |
|------|-------|--------|--------------|
| **Averia Serif Libre** | Headings, logo, page titles | 700 (Bold) | [Link](https://fonts.google.com/specimen/Averia+Serif+Libre) |
| **Manrope** | Body text, navigation, descriptions | 300 (Light), 400, 500 | [Link](https://fonts.google.com/specimen/Manrope) |
| **Cormorant Garamond** | Accent text (optional) | 400, 500, 600 | [Link](https://fonts.google.com/specimen/Cormorant+Garamond) |

### Font Usage

#### Averia Serif Libre Bold (Uppercase)
- Site logo/name: `clamp(2rem, 4vw, 2.4rem)`
- Page titles (ABOUT, CONTACT): `clamp(3rem, 8vw, 5rem)`
- Work/project titles: `clamp(1.5rem, 3vw, 2.25rem)`
- All headings (h1-h4): Always uppercase

#### Manrope Light
- Homepage description: `clamp(0.9rem, 1.8vw, 1.25rem)`, sentence case
- Navigation links: `0.875rem`, uppercase, letter-spacing `0.08em`
- Body text: `1rem`, weight 300
- Bio text: `1.0625rem`
- Footer: `0.75rem`, uppercase, letter-spacing `0.08em`

### Text Styles

| Element | Font | Size | Weight | Case | Letter Spacing |
|---------|------|------|--------|------|----------------|
| Logo | Averia Serif Libre | clamp(2rem, 4vw, 2.4rem) | 700 | Uppercase | 0.04em |
| Nav links | Manrope | 0.875rem | 300 | Uppercase | 0.08em |
| Page titles | Averia Serif Libre | clamp(3rem, 8vw, 5rem) | 700 | Uppercase | 0.02em |
| Work titles | Averia Serif Libre | clamp(1.5rem, 3vw, 2.25rem) | 700 | Uppercase | - |
| Hero description | Manrope | clamp(0.9rem, 1.8vw, 1.25rem) | 300 | Sentence | - |
| Body text | Manrope | 1rem | 300 | Sentence | - |
| Category labels | Manrope | 0.6875rem | 500 | Uppercase | 0.15em |
| Footer | Manrope | 0.75rem | 300 | Uppercase | 0.08em |
| Back/Next links | Manrope | 0.6875rem | 500 | Uppercase | 0.1em |

---

## Colors

### Color Palette

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Background | `--color-bg` | #FAFAF8 | Page background (warm off-white) |
| White | `--color-bg-white` | #FFFFFF | Cards, form backgrounds |
| Text | `--color-text` | #1A1A1A | Primary text, headings |
| Text Muted | `--color-text-muted` | #737373 | Secondary text, descriptions |
| Accent | `--color-accent` | #1A1A1A | Links, buttons |
| Border | `--color-border` | #E8E8E6 | Dividers, form borders |

---

## Spacing

### Spacing Scale

| Variable | Value | Pixels (base 16px) |
|----------|-------|-------------------|
| `--space-xs` | 0.5rem | 8px |
| `--space-sm` | 1rem | 16px |
| `--space-md` | 1.5rem | 24px |
| `--space-lg` | 2rem | 32px |
| `--space-xl` | 3rem | 48px |
| `--space-2xl` | 4rem | 64px |
| `--space-3xl` | 6rem | 96px |

### Layout

| Variable | Desktop | Mobile |
|----------|---------|--------|
| `--site-padding` | 3rem | 1.5rem |
| `--max-content-width` | 1200px | 1200px |

---

## Layout Patterns

### Header
- Centered, stacked layout
- Logo on top, navigation below
- Spacing between logo and nav: `--space-xs`
- Navigation gap: `--space-xl`
- Nav items: Work, About, CV, Contact

### Two-Column Pages (About, Contact)
- Grid: `1fr 1fr` or `1fr 1.2fr`
- Left: Large page title at top, content/details at bottom
- Right: Image or form
- Gap: `--space-2xl`
- Contact page (simplified): single column, no form

### Work Grid
- Single column layout
- Items alternate direction (image left/right)
- Each item: two-column grid `1fr 1fr`
- Gap between items: `--space-3xl`
- Image aspect ratio: 4:3

### Case Study Pages
- Content width: 750px
- No h2 section titles; h3 as primary headings with descriptive titles
- Header meta: Role, Timeline, Scope (platform + brands), Ownership stepper

### Case Study Navigation
- Flex row with space-between
- Max-width: 750px (matches content width)
- Left: "← Back to Work"
- Right: "Next: {Case Study Name} →"

### Research Carousel
- Full-width: 1200px max
- Shows 2 images at a time
- Per-item navigation with peek of adjacent images
- Titles above images
- Lightbox with navigation and captions

---

## Components

### Navigation
- Active link: underlined with `text-underline-offset: 4px`
- Hover: `opacity: 0.5`
- CV link opens in new tab

### Buttons
- Padding: `1rem 2rem`
- Font: `0.6875rem`, uppercase, letter-spacing `0.15em`
- Primary: black background, inverts on hover
- Border: `1px solid` (primary), `2px solid` (form inputs)

### Form Inputs
- Border: `2px solid --color-text`
- Padding: `0.875rem 1rem`
- Focus: border color changes to `--color-text-muted`

### Images
- Work images: `object-fit: cover`, scale to 1.05 on hover
- About photo: natural aspect ratio, aligned with page title via `margin-top`

### Footer
- All text uppercase with letter-spacing `0.08em`
- Links: LinkedIn, Twitter, Dribbble

---

## Animations

### Transitions

| Variable | Value | Usage |
|----------|-------|-------|
| `--transition-slow` | 0.8s cubic-bezier(0.16, 1, 0.3, 1) | Page elements, images |
| `--transition-base` | 0.4s cubic-bezier(0.16, 1, 0.3, 1) | General transitions |
| `--transition-fast` | 0.2s ease | Hover states |

### Effects
- **Fade up**: Elements animate in with `translateY(30px)` to `translateY(0)`
- **Scroll reveal**: Work items fade in on scroll with `translateY(40px)`
- **Image hover**: Scale to 1.05

---

## Responsive Breakpoints

### Mobile (max-width: 768px)
- Site padding reduces to 1.5rem
- Two-column layouts become single column
- Navigation gap reduces to `--space-lg`
- Page titles reduce to 2.5rem
- Work items stack vertically

---

## Content Structure

### Case Studies
1. **Cart Revamp** (HelloFresh) - Building trust at checkout
2. **AI Illustration Update** (HelloFresh) - Scaling design migration with AI
3. **Product Card Component** (HelloFresh) - First accessible multi-brand component
4. **Mobile Search** (HelloFresh) - AI-assisted design workflows

### Contact Information
- Location: Berlin, Germany
- Email: amanda.r.low@outlook.com
- LinkedIn: https://www.linkedin.com/in/amanda-r-low/

---

## Design Inspiration
Based on [Squarespace Aue Sobol template](https://aue-sobol-fluid-demo.squarespace.com/) - minimal, editorial aesthetic with:
- Large serif headings
- Light sans-serif body text
- Generous whitespace
- Clean, refined interactions
