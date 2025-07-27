---
prev: false
next: false
layout: doc
outline: [2, 3]
sidebar: false
---

# miletorix-vitepress-image-group 

Vue 3 component to render responsive image groups with automatic layout styling (big, double or icon).

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-image-group)  
![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-image-group)  
![license](https://img.shields.io/npm/l/@miletorix/vitepress-image-group)

<p align="center">
  <img src="/demo-1.png" alt="miletorix-vitepress-image-group demo" width="800">
</p>

## Limitations

- No lazy loading customization (yet).
- Only accepts array of strings as `sources`.

## Installation

```sh [npm]
npm i @miletorix/vitepress-image-group
```

## Usage

### Configuration

```typescript  [docs/.vitepress/theme/index.ts]
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

```vue [example.md]
<ImageGroup
  :sources="[
    'demo-2.jpg'
  ]"
  type="big"
  caption='"Rolling hills", Moravia, Czech Republic.'
/>
```

**Output:**

<ImageGroup
  :sources="[
    'demo-2.jpg'
  ]"
  type="big"
  caption='"Rolling hills", Moravia, Czech Republic.'
/>

### Image Group - `double`

**Input:**

```vue [example.md]
<ImageGroup
  :sources="[
    '/img/demo-3.jpg',
    '/img/demo-4.jpg'
  ]"
  type="double"
  caption="Images from both sides."
/>
```

**Output:**

<ImageGroup
  :sources="[
    'demo-3.jpg',
    'demo-4.jpg'
  ]"
  type="double"
  caption="Images from both sides."
/>

### Image Group - `icon`

**Input:**

```vue [example.md]
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

<ImageGroup
  :sources="[
    'edge-logo.png',
    'chrome-logo.png',
    'firefox-logo.png',
    'safari-logo.png'
  ]"
  type="icon"
  caption="Browser icons: MS Edge, Google Chrome, Mozzila Firefox, Apple Safari"
/>

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

<ImageGroup
  :sources="[
    'demo-4.jpg'
  ]"
  type="auto"
  caption="Full size image"
/>

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

<ImageGroup
  :sources="[
    'demo-3.jpg'
  ]"
  type="manual"
  width="300px"
  caption="Manual image size"
/>