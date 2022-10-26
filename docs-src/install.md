---
layout: page.11ty.cjs
title: <motion-carousel> ⌲ Install
---

# Install

`<motion-carousel>` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

## Local Installation

```bash
npm i motion-carousel
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specifiers to full URLs.

### HTML

```html
<script type="module" src="https://unpkg.com/motion-carousel?module"></script>
```

### JavaScript

```html
import {MyElement} from 'https://unpkg.com/motion-carousel?module';
```
