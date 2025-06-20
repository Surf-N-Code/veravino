# VeraVino Logo Assets

This document describes the new logo assets created for VeraVino, the AI-powered wine advisor.

## Logo Concept

The VeraVino logo combines:
- **Wine Elements**: Wine glass and grape cluster representing the wine industry
- **AI Elements**: Subtle circuit-like connections representing AI technology
- **Brand Colors**: 
  - Primary: `rgb(30,58,43)` - Deep forest green (sophistication)
  - Background: `rgb(248,244,240)` - Warm cream (elegance)
  - Accent: `rgb(207,220,255)` - Light blue (technology/AI)

## Available Logo Files

### SVG Files
- `public/logo.svg` - Full horizontal logo with text (200x60px)
- `public/logo-horizontal.svg` - Compact horizontal version for headers (180x40px)
- `public/logo-icon.svg` - Icon-only version for favicons and small spaces (60x60px)
- `public/logo-white.svg` - White version for dark backgrounds (200x60px)

### React Component
- `src/components/VeraVinoLogo.tsx` - Embeddable React component with customizable props

## Usage Guidelines

### In Headers/Navigation
```jsx
import VeraVinoLogo from "@/components/VeraVinoLogo";

<VeraVinoLogo width={140} height={32} />
```

### As SVG Image
```jsx
<Image src="/logo-horizontal.svg" alt="Vera Vino" width={140} height={32} />
```

### For Favicons
Use `logo-icon.svg` as the base for generating favicon files of different sizes.

### Dark Backgrounds
Use `logo-white.svg` when placing the logo on dark backgrounds.

## Brand Colors

```css
:root {
  --vera-vino-primary: rgb(30, 58, 43);    /* Deep forest green */
  --vera-vino-background: rgb(248, 244, 240); /* Warm cream */
  --vera-vino-accent: rgb(207, 220, 255);     /* Light blue */
}
```

## Logo Variations

1. **Full Logo**: Use for main branding, websites, business cards
2. **Horizontal Logo**: Use in navigation bars, headers, limited width spaces  
3. **Icon Only**: Use for social media avatars, favicons, mobile app icons
4. **White Version**: Use on dark backgrounds, photos, or colored backgrounds

## Implementation Notes

- All logos are vector-based (SVG) for crisp scaling at any size
- Text uses Inter font family for consistency with the website
- AI circuit elements are subtle and don't overpower the wine theme
- The wine glass and grapes are stylized but recognizable
- Colors maintain accessibility contrast ratios