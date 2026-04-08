# Portfolio Project Instructions

## Overview
Personal portfolio site for Amanda Low, Product Designer. Minimal, editorial aesthetic inspired by Squarespace Aue Sobol template.

## Typography Rules

### Fonts (Google Fonts)
- **Averia Serif Libre** - Headings, titles, and homepage description (weight 300 for description, 700 for headings)
- **Manrope Light (300)** - Body text, navigation, descriptions

### Key Decisions
- Homepage description uses Averia Serif Libre Light, sentence case
- All other Averia Serif Libre headings are uppercase
- Navigation uses Manrope Light uppercase with letter-spacing 0.08em
- Active nav link has animated underline
- Footer text is uppercase

## Color Palette
- Background: `#FAFAF8` (warm off-white)
- Text: `#1A1A1A`
- Muted text: `#737373`
- Border: `#E8E8E6`
- Light gray (image backgrounds): `#F5F5F3`

## Layout Constraints
- Max content width: 1200px
- Case study image sections: 1400px max
- Site padding: 3rem (desktop), 1.5rem (mobile)
- All content areas must have consistent width and padding

## Interactions
- Header logo and nav fade in on page load with stagger
- Logo letter-spacing expands on hover
- Nav links, footer links, back/next links have animated underline on hover
- Work grid images lift up (4px) on hover
- Buttons lift up (2px) on hover
- Magnifying glass expand button: always visible at 40% opacity, full opacity on hover
- Zoomable case study images: zoom-in cursor on hover, slight lift; click opens zoomable lightbox

## Navigation
- Work, About, CV (opens PDF in new tab)
- CV links to `cv.pdf` in root folder

## Page Structures

### Homepage
- Centered header with logo + nav stacked
- Hero description (Averia Serif Libre Light, left-aligned, sentence case)
- Work grid with alternating image positions
- Case studies labeled by category

### About Page
- Two-column: title + bio on left, photo on right
- 80px gap between title and bio
- Photo cropped 10% from top (reduced headroom)
- Photo cropped 3% from bottom using clip-path
- No grey background below image
- Email address with filled envelope icon
- Current photo: `images/about-photo-1.jpg`

### Case Study Pages
- Navigation row at top: "← Back to Work" (left) and "Next: {name} →" (right)
- Case studies link to each other in sequence
- Content width: 750px for text, bottom nav also 750px max-width
- Full-width image sections with light gray background (`#F5F5F3`)
- **Structure:** No h2 section titles; h3 as primary headings with descriptive titles
- **Header meta:** Role, Timeline, Scope (includes platform + brands), Ownership stepper
- Comparison labels: `.comparison-labels` with `.comparison-label--before` and `.comparison-label--after`
- Support for multi-column layouts:
  - `.case-section__row` - two columns
  - `.case-section__row--thirds` - three columns
  - `.case-section__col-single` - single column matching row column width
- **Research carousel:** Full-width 1200px, shows 2 images at a time, per-item navigation with peek
- **Lightbox:** Navigation arrows and captions for carousel images; single images have no navigation
- **Zoomable images:** All case study images should be zoomable. Add `case-image--zoomable` to the container div and `zoomable-image` class to the img element. Requires `zoomable-lightbox` HTML element at bottom of page (before main.js script). Shows zoom-in cursor on hover; click opens lightbox with zoom controls (+/- buttons, 50%-200% range).

## Footer
- All text uppercase with letter-spacing
- Email: amanda.r.low@outlook.com
- LinkedIn: https://www.linkedin.com/in/amanda-r-low/

## Case Studies (in order)
1. Cart Revamp (HelloFresh)
2. Smaller Product Cards (HelloFresh)
3. Mobile Search (HelloFresh)

## Responsive
- Breakpoint: 768px
- Mobile: single column layouts, reduced padding
- Multi-column case study rows stack on mobile

## Files
- `css/styles.css` - All styles with CSS variables
- `js/main.js` - Scroll animations, form handling
- `cv.pdf` - CV file (to be added)
- See `STYLEGUIDE.md` for complete documentation

## Key Images
- `images/cart-revamp-hero.png` - Homepage hero for Cart Revamp (device mockups, transparent background)
- `images/compact-cards-hero.jpg` - Homepage hero for Compact Cards (device mockups, optimized)
- `images/cart-revamp-comparison.png` - Full-width comparison image in case study (has Before/After labels)
- `images/about-photo-1.jpg` - About page photo (cropped 10% from top)
- `images/mobile-search-hero.jpg` - Homepage hero for Mobile Search (placeholder)
- `images/mobile-search-benchmarking.jpg` - Competitive analysis (placeholder)
- `images/mobile-search-vision.jpg` - Vision diagram (placeholder)
- `images/mobile-search-final.jpg` - Final search UI (placeholder)

## GitHub
- Repo: https://github.com/amanda-low/my-portfolio
- Branch naming: use descriptive names like `march-2026`
