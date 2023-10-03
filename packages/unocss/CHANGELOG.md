# @coloradix/unocss

## 2.2.0

### Minor Changes

- c92b26b: Fix and change color format, from `hsl` to `rgb`

## 2.1.0

### Minor Changes

- ea14ece: Update dependencies

### Patch Changes

- Updated dependencies [ea14ece]
  - @coloradix/colors@1.1.0

## 2.0.0

### Major Changes

- 0287d2f: Customizability
  - Build options with attribute or class selector

```typescript
const radix = coloradix({
  /* color */
})
  .alias({
    /* alias */
  })
  .build({
    selector: "attribute" /* or "class" */,
  });
```

## 1.1.0

### Minor Changes

- ab49c80: Release 1.0.0
  - add @coloradix/colors as dependency

### Patch Changes

- Updated dependencies [ab49c80]
  - @coloradix/colors@1.0.0

## 1.0.0

### Major Changes

- 4587ae9: Release 1.0.0
