# Birthday website

A static, responsive birthday letter designed to feel warm, respectful, and personal.

## Add her photograph

1. Put the photograph at `dist/her-photo.jpg`.
2. In `dist/index.html`, replace the entire `<div class="portrait-placeholder">…</div>` block with:

```html
<img class="portrait-photo" src="her-photo.jpg" alt="A favourite photograph of her" />
```

3. Add this rule to `dist/styles.css`:

```css
.portrait-photo { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
```

Open `dist/index.html` in a browser to preview the site locally.
