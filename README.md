# miletorix-vitepress-image-group

Vue 3 component to render responsive image groups with automatic layout styling (big, double or icon).

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-image-group) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-image-group) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-image-group)

<p align="center">
  <img src="/assets/demo-1.png" alt="vitepress-enhanced-site-links demo" width="800">
</p>

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/miletorix-vitepress-image-group/](https://miletorix.github.io/miletorix-vitepress-image-group/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@miletorix/vitepress-image-group](https://www.npmjs.com/package/@miletorix/vitepress-image-group)

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

> [!IMPORTANT]
> Type required: `'icon' | 'big' | 'double' | 'auto' | 'manual'`

> [!NOTE]
> **Alt** and **caption** text is optional, default alt text is **ImageGroup - type**

> [!NOTE]
> 5 types of image grouping are supported:
> - `big` (800px wide single image)
> - `double` (two images side by side)
> - `icon` (small 70×70px images in a row)
> - `auto` (full size image)
> - `manual` (manual width and automatic height)

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

![demo-2](./assets/demo-2-1.png) 

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

![demo-3](./assets/demo-3-2.png) 

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

![demo-4](./assets/demo-4-2.png) 

### Image Group - auto

**Input:**
```vue
<ImageGroup
  :sources="[
    'demo-4.jpg'
  ]"
  type="auto"
  caption="Full size image"
/>
```

**Output:**

![demo-5](./assets/demo-5.png) 

### Image Group - manual

**Input:**
```vue
<ImageGroup
  :sources="[
    'demo-3.jpg'
  ]"
  type="manual"
  width="300px"
  caption="Manual image size"
/>
```

**Output:**

![demo-6](./assets/demo-6.png)