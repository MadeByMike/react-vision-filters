# React Vision Filters

A simple React component to add vision filters to a website.

## Why?

Allows basic simulation of common vision impairments including:

- Protanopia
- Protanomaly
- Deuteranopia
- Deuteranomaly
- Tritanopia
- Tritanomaly
- Achromatopsia
- Achromatomaly
- Low-contrast

This is useful for testing in UI development. Integrate it with a documentation or a design system website to give developers feedback about how components might look for different users.

## Usage

`npm install react-vision-filters`

Or:

`yarn add react-vision-filters`

Then:

`import { VisionFilters } from "react-vision-filters";`

And, wrap any component with `<VisionFilters>` E.g:

```javascript
<VisionFilters>
  <img src="https://picsum.photos/300" />
</VisionFilters>
```
