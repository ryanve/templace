# templace
Progressively load template content via JavaScript. Useful for wrapping low-priority heavy content like `iframe` embeds such to load after initial page load and only when JavaScript is enabled

```
npm install templace
```

## usage

```html
<template data-templace>
  <iframe src="..."></iframe>
</template>
```

#### Include `script` late in page for best performance benefits

```html
<script src="templace.js" async defer></script>
```

#### Templacements happen automagically when the script loads or anytime you invoke the export

```js
templace()
```

#### Normalize `template` CSS for browsers without support

```css
template {
  display: none;
}
```

## status
It's a simple minimum viable package with more granular features in consideration

## demo
https://ryanve.github.io/templace/
