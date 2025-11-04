## Overview
JavaDeveloperProfile is a reusable, self-contained portfolio-style component that presents a Java-focused developer’s profile. It includes a hero section with rotating descriptors, a skills section with progress indicators, featured projects, work experience, and a call-to-action area. Use this when you want a polished, self-contained developer profile section that showcases skills, projects, and experience with engaging animations.

## Available Imports
**Components:**
- `JavaDeveloperProfile` - (named export) Reusable portfolio/profile component for a Java developer that renders hero, skills, projects, experience, and a CTA.

## Component Props & Types
```typescript
interface JavaDeveloperProfileProps {
  'data-id'?: string
}
```

- `data-id` (optional): A string that will be applied as a data-id attribute to the root element of the component.
- No other props are exposed. There are no required props and no default values defined.

Notes:
- The component does not expose event callbacks or render children.
- The root element uses a data-id attribute when provided to aid in testing or querying.

## Import Patterns
Exact import statements to use in your code:
```typescript
// Named export
import { JavaDeveloperProfile } from './JavaDeveloperProfile'
```

## Usage Requirements
- No special React context providers are required.
- The component manages its own internal state for the rotating hero titles and UI sections.
- No external callbacks or event handlers must be wired by the consumer.
- There is no ref exposure on the component.
- The component relies on Tailwind-based styling; ensure your project supports Tailwind if you want the visuals to render as designed.

## How It Works
- On render, the component displays a hero section with a primary headline and a subheading. The adjectives rotate every 2 seconds to briefly display different descriptors.
- A set of action buttons appear in the hero, followed by sections that showcase technical skills with animated progress bars, a grid of featured projects with images and descriptions, and a work experience timeline.
- The component is self-contained and does not require external state management. Each instance operates independently.

## Layout & Appearance
- Full-width layout with multiple vertically stacked sections: Hero, Skills, Projects, Experience, and CTA.
- Uses Tailwind CSS classes for typography, spacing, color, and responsive behavior.
- The root composition and internal sections are designed to be responsive, with grids that adapt to different breakpoints.
- Customization is achieved via global Tailwind configuration and surrounding layout wrappers; the component itself does not expose a className prop.

## Styling & Theming
- Visual styling is provided via Tailwind utility classes embedded in the component.
- The component does not expose a `className` prop; customizing appearance requires adjusting Tailwind configuration or wrapping the component with external layout/styles.
- To adjust colors or typography beyond the built-in design, modify your Tailwind setup or override styles around the component in your app.

## Code Examples

### Example 1: Basic Usage
```tsx
import { JavaDeveloperProfile } from './JavaDeveloperProfile'

function App() {
  return (
    <div>
      <JavaDeveloperProfile />
    </div>
  )
}
```

### Example 2: With Data-ID
```tsx
import { JavaDeveloperProfile } from './JavaDeveloperProfile'

function App() {
  return (
    <div className="p-4">
      <JavaDeveloperProfile data-id="profile-1" />
    </div>
  )
}
```

### Example 3: Layout Integration
```tsx
import { JavaDeveloperProfile } from './JavaDeveloperProfile'

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <JavaDeveloperProfile />
    </div>
  )
}
```