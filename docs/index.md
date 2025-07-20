---
prev: false
next: false
layout: doc
outline: [2, 3]
sidebar: false
---

# miletorix-vitepress-image-group 

Vue 3 component to render responsive image groups with automatic layout styling (big, double or icon).

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-image-group) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-image-group) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-image-group)

<p align="center">
  <img src="/demo-1.png" alt="miletorix-vitepress-image-group demo" width="800">
</p>

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
/>
```

:::danger
Type required: `'big'` | `'double'` | `'icon'`
:::

:::tip
Alt text is optional, default is `"ImageGroup" - ${type}``
:::

:::tip
3 types of image grouping are supported:
- `big` (800px wide single image)
- `double` (two images side by side)
- `icon` (small 64×64px images in a row)
:::

## Examples

### Image Group - `big`

**Input:**

```vue [example.md]
<ImageGroup
  :sources="[
    '/img/demo-2.jpg'
  ]"
  type="big"
/>
```

**Output:**

<ImageGroup
  :sources="[
    'demo-2.jpg'
  ]"
  type="big"
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
/>
```

**Output:**

<ImageGroup
  :sources="[
    'demo-3.jpg',
    'demo-4.jpg'
  ]"
  type="double"
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
/>