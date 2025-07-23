# miletorix-vitepress-image-group

Vue 3 component to render responsive image groups with automatic layout styling (big, double or icon).

<p align="center">
  <img src="https://github.com/miletorix/miletorix-vitepress-image-group/raw/main/assets/demo-1.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/miletorix-vitepress-image-group/](https://miletorix.github.io/miletorix-vitepress-image-group/)

## Styling

The layout is controlled via CSS classes:

- `.image-preview-icon`
- `.image-preview-big`
- `.image-preview-double`

You can override these classes in your own styles.

## Limitations

- No lazy loading customization (yet).
- Only accepts array of strings as `sources`.

## Installation

```sh
npm i @miletorix/vitepress-image-group
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
 
import { ImageGroup } from '@miletorix/vitepress-image-group' // [!code ++]
import '@miletorix/vitepress-image-group/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('ImageGroup', ImageGroup) // [!code ++]
  }
}
```

### Image Group

```vue
<ImageGroup
  :sources="[
    'path-to-image...'
  ]"
  type="type..."
  alt="alt text..."
  caption="caption text..."
/>
```

> Type required: `'big'` | `'double'` | `'icon'`

> **Alt** and **caption** text is optional, default alt text is **ImageGroup - type**

> 3 types of image grouping are supported:
> - `big` (800px wide single image)
> - `double` (two images side by side)
> - `icon` (small 64×64px images in a row)

## Examples

### Image Group - `big`

**Input:**

```vue
<ImageGroup
  :sources="[
    'demo-2.jpg'
  ]"
  type="big"
  caption="Rolling hills, Moravia, Czech Republic"
/>
```

**Output:**

![demo-2](https://github.com/miletorix/miletorix-vitepress-image-group/raw/main/assets/demo-2-1.png) 

### Image Group - `double`

**Input:**

```vue [example.md]
<ImageGroup
  :sources="[
    '/img/demo-3.jpg',
    '/img/demo-4.jpg'
  ]"
  type="double"
  caption="Images from both sides"
/>
```

**Output:**

![demo-3](https://github.com/miletorix/miletorix-vitepress-image-group/raw/main/assets/demo-3-2.png) 

### Image Group - `icon`

**Input:**

```vue
<ImageGroup
  :sources="[
    '/img/edge-logo.png',
    '/img/chrome-logo.png',
    '/img/firefox-logo.png',
    '/img/safari-logo.png'
  ]"
  type="icon"
  caption="Browser icons: MS Edge, Google Chrome, Mozilla FireFox, Apple Safari"
/>
```

**Output:**

![demo-4](https://github.com/miletorix/miletorix-vitepress-image-group/raw/main/assets/demo-4-2.png) 