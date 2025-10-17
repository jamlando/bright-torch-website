# Bright Torch Consulting - Global Style Guide

## Brand Colors

### Primary Colors
- **Slate Blue**: `#2E4057` - Primary brand color for headers, navigation, and key elements
- **Malibu Blue**: `#5BC0EB` - Secondary accent color for CTAs and highlights
- **Knoxville Orange**: `#FF8200` - Action color for buttons, links, and important CTAs
- **Charcoal**: `#333333` - Primary text color for body content
- **Light Gray**: `#F5F5F5` - Background color for sections and cards

### Usage Guidelines
- **Slate Blue**: Use for main navigation, primary headings, and footer backgrounds
- **Malibu Blue**: Use for secondary CTAs, hover states, and accent elements
- **Knoxville Orange**: Use for primary CTAs, active states, and urgent actions
- **Charcoal**: Use for all body text, descriptions, and secondary content
- **Light Gray**: Use for section backgrounds, card backgrounds, and subtle dividers

## Typography

### Font Families
- **Headings**: Merriweather (serif) - Professional, authoritative feel
- **Body Text**: Lato (sans-serif) - Clean, readable, modern

### Font Sizes
- **H1**: 48px (3rem) - Main page headlines
- **H2**: 36px (2.25rem) - Section headings
- **H3**: 28px (1.75rem) - Subsection headings
- **H4**: 24px (1.5rem) - Card titles
- **H5**: 20px (1.25rem) - Small headings
- **H6**: 18px (1.125rem) - Minor headings
- **Body**: 16px (1rem) - Default text size
- **Small**: 14px (0.875rem) - Captions, metadata
- **XSmall**: 12px (0.75rem) - Fine print

### Font Weights
- **Merriweather**: Regular (400), Bold (700)
- **Lato**: Light (300), Regular (400), Bold (700)

## Spacing System

### Tailwind Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### Common Spacing Patterns
- **Section Padding**: py-16 (64px vertical)
- **Card Padding**: p-6 (24px all around)
- **Button Padding**: px-6 py-3 (24px horizontal, 12px vertical)
- **Form Field Spacing**: mb-4 (16px between fields)

## Component Styles

### Buttons
- **Primary Button**: 
  - Background: Knoxville Orange (#FF8200)
  - Text: White
  - Padding: px-6 py-3
  - Font: Lato Bold, uppercase
  - Hover: Darker orange (#E67300)
  - Border Radius: 6px

- **Secondary Button**:
  - Background: Transparent
  - Border: 2px solid Malibu Blue (#5BC0EB)
  - Text: Malibu Blue
  - Padding: px-6 py-3
  - Font: Lato Bold, uppercase
  - Hover: Background Malibu Blue, text white

### Cards
- **Background**: Light Gray (#F5F5F5)
- **Border**: 1px solid #E5E5E5
- **Border Radius**: 8px
- **Padding**: 24px
- **Shadow**: Subtle drop shadow (shadow-sm)

### Forms
- **Input Fields**:
  - Border: 1px solid #D1D5DB
  - Border Radius: 6px
  - Padding: 12px 16px
  - Focus: Border Knoxville Orange, outline none
  - Background: White

- **Labels**:
  - Font: Lato Bold
  - Color: Charcoal (#333333)
  - Size: 14px
  - Margin Bottom: 8px

## Layout Guidelines

### Grid System
- **Container**: Max width 1200px, centered
- **Grid Columns**: 12-column grid system
- **Gutters**: 24px between columns
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Responsive Design
- **Mobile First**: Design for mobile, scale up
- **Touch Targets**: Minimum 44px for interactive elements
- **Readable Text**: Minimum 16px font size on mobile
- **Adequate Spacing**: Sufficient white space for readability

## Accessibility Standards

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear focus states

### Navigation
- **Keyboard Accessible**: All interactive elements reachable via keyboard
- **Focus Indicators**: Clear visual focus states
- **Skip Links**: Available for screen readers

## Icon Guidelines

### Service Icons
- **Compass**: Strategy and direction
- **Progression Arrow**: Change and transformation
- **Gear Diagram**: Operations and processes
- **Torch**: Leadership and illumination

### Icon Style
- **Style**: Clean, minimal, rounded edges
- **Size**: 24px for inline, 48px for standalone
- **Color**: Slate Blue (#2E4057) or Charcoal (#333333)
- **Format**: SVG preferred for scalability

## Image Guidelines

### Photography Style
- **Authentic**: Real people, real situations
- **Professional**: High quality, well-lit
- **Knoxville/Southeast Theme**: Regional relevance
- **Emotional**: Conveying transformation and growth

### Image Specifications
- **Hero Images**: 1920x1080px minimum
- **Card Images**: 400x300px
- **Profile Images**: 300x300px
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Optimization**: WebP format when supported

## Animation & Interactions

### Micro-interactions
- **Hover Effects**: Subtle color transitions (200ms ease)
- **Button Press**: Slight scale down (0.95) on active
- **Form Focus**: Smooth border color transition
- **Page Transitions**: Fade in/out (300ms ease)

### Performance
- **Animation Duration**: Keep under 300ms
- **Easing**: Use ease-out for entrances, ease-in for exits
- **Reduced Motion**: Respect prefers-reduced-motion setting

## Content Guidelines

### Tone of Voice
- **Professional**: Authoritative but approachable
- **Empathetic**: Understanding of client challenges
- **Confident**: Clear about capabilities
- **Grounded**: Practical and realistic

### Writing Style
- **Headlines**: Clear, benefit-focused
- **Body Text**: Conversational but professional
- **CTAs**: Action-oriented, specific
- **Technical Terms**: Explain when necessary

## Implementation Notes

### CSS Custom Properties
```css
:root {
  --color-slate-blue: #2E4057;
  --color-malibu-blue: #5BC0EB;
  --color-knoxville-orange: #FF8200;
  --color-light-gray: #F5F5F5;
  --color-charcoal: #333333;
}
```

### Tailwind Configuration
- Extend default colors with brand palette
- Configure custom font families
- Set up responsive breakpoints
- Define custom spacing values

### Component Library
- Create reusable components following these guidelines
- Document component props and usage
- Maintain consistency across all pages
- Test accessibility compliance
