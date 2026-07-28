---
name: Al-Fitya
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1b'
  on-tertiary-container: '#838483'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e3e1'
  tertiary-fixed-dim: '#c6c7c5'
  on-tertiary-fixed: '#1a1c1b'
  on-tertiary-fixed-variant: '#454746'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  display-xl-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style
The design system embodies a professional, NGO-centric aesthetic that merges contemporary minimalism with a refined Islamic identity. The personality is authoritative yet welcoming, aiming to evoke a sense of trust, global scale, and intellectual clarity. 

The style is rooted in **Minimalism** with a heavy emphasis on structural grid alignment and purposeful whitespace. It utilizes a high-contrast monochromatic base to ensure content remains the focal point, while subtle tonal variations provide a premium, editorial feel. The transition to desktop-first requires an expansive use of "negative space" to prevent the dense information architecture typical of NGOs from feeling cluttered, moving away from mobile-centric compactness toward a spacious, intentional web experience.

## Colors
The palette is strictly monochromatic and neutral, relying on hex values #000000 and #090909 for primary typography and structural elements. The background strategy uses a tiered approach: #F3F3F3 serves as the primary canvas, while #F8F8F8 and #F1F1EF act as subtle differentiators for section backgrounds and surface containers. 

This low-chroma environment ensures that photography and call-to-action elements command immediate attention. The "Modern Islamic Identity" is communicated not through color, but through the sophisticated interplay of these tones, creating an "archival" or "institutional" atmosphere suitable for a global NGO.

## Typography
Typography is the primary vehicle for the brand’s "Modern Islamic" character. **Be Vietnam Pro** is used for headlines, providing a contemporary, friendly, yet professional voice. For long-form NGO reports and body copy, **Inter** provides systematic legibility. **JetBrains Mono** is introduced for labels and metadata to add a layer of technical precision and institutional modernism.

Desktop scales are significantly enlarged to embrace the screen real estate. Display sizes use tight letter-spacing to maintain a "graphic" look, while body copy is set with generous line-height to ensure maximum readability for educational and editorial content.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop, centered within the viewport at a maximum width of 1280px. A 12-column structure is used with 32px gutters, allowing for versatile editorial layouts—such as offset 4-column sidebars or balanced 6-column splits.

Whitespace is treated as a core design element. Section gaps are intentionally large (128px) to provide a "breathable" premium feel that distinguishes the NGO from a standard corporate site. On mobile, the grid collapses to 4 columns with reduced margins (20px), ensuring the content remains accessible without losing the sense of airiness.

## Elevation & Depth
In line with the professional minimalist aesthetic, this design system avoids heavy shadows. Instead, it employs **Tonal Layers** and **Low-Contrast Outlines**. 

Depth is communicated through color blocking (e.g., a #F8F8F8 card on a #F3F3F3 background) and 1px borders in #000000 at very low opacity (5-10%). This creates a "flat-plus" look where elements feel integrated into the page rather than floating above it. For hover states on interactive cards, a subtle, highly diffused ambient shadow may be used to provide tactile feedback without breaking the clean, architectural silhouette.

## Shapes
Shapes follow a **Soft** (0.25rem) radius to maintain a professional and sturdy appearance. This slight rounding prevents the UI from feeling "sharp" or "aggressive" while avoiding the playfulness of higher roundedness levels. Buttons and input fields use the base 4px radius, while larger containers like cards may scale up to 8px (rounded-lg) to soften the overall visual weight of the desktop layout.

## Components
- **Buttons:** Primary buttons are solid #000000 with white text, utilizing a rectangular shape with a 4px radius. Secondary buttons use a 1px #000000 border with no fill.
- **Cards:** NGO impact cards use a #F8F8F8 fill with a subtle 1px border. They prioritize large-scale imagery and "Display" typography. Padding within cards is generous (32px or 48px on desktop).
- **Inputs:** Text fields are minimal, featuring a bottom-border-only design or a very light #000000 (10% opacity) full border, using JetBrains Mono for placeholder text.
- **Lists:** Bulleted lists in editorial sections use custom geometric markers (small squares or dashes) rather than standard circles to align with the minimalist theme.
- **Chips:** Used for "Project Categories" or "Tags," these are rendered in #F1F1EF with 12px JetBrains Mono text, keeping a strictly rectangular or slightly softened corner profile.
- **Navigation:** The desktop header is transparent or #F3F3F3, utilizing uppercase labels in Inter for a disciplined, clean top-level architecture.