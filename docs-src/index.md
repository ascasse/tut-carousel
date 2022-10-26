---
layout: page.11ty.cjs
title: <motion-carousel> ⌲ Home
---

# &lt;motion-carousel>

`<motion-carousel>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<motion-carousel>` is just an HTML element. You can it anywhere you can use HTML!

```html
<motion-carousel></motion-carousel>
```

  </div>
  <div>

<motion-carousel></motion-carousel>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<motion-carousel>` can be configured with attributed in plain HTML.

```html
<motion-carousel name="HTML"></motion-carousel>
```

  </div>
  <div>

<motion-carousel name="HTML"></motion-carousel>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<motion-carousel>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;motion-carousel&gt;</h2>
    <motion-carousel .name=${name}></motion-carousel>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;motion-carousel&gt;</h2>
<motion-carousel name="lit-html"></motion-carousel>

  </div>
</section>
