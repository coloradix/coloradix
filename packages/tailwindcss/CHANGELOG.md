# @coloradix/tailwindcss

## 2.3.2

### Patch Changes

- packages improvements
- Updated dependencies
  - @coloradix/colors@1.2.1

## 2.3.1

### Patch Changes

- 3ffc161: Update dependencies

## 2.3.0

### Minor Changes

- b34563a: Update peers, fix color format and new utility
  - update peer and fix color format

### Patch Changes

- Updated dependencies [b34563a]
  - @coloradix/colors@1.2.0

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

## 1.7.0

### Minor Changes

- ab49c80: Release 1.0.0
  - add @coloradix/colors as dependency

### Patch Changes

- Updated dependencies [ab49c80]
  - @coloradix/colors@1.0.0

## 1.6.0

### Minor Changes

- c903d56: type module

## 1.5.1

### Patch Changes

- 2a49987: Improve typing and docs

## 1.5.0

### Minor Changes

- 917a440: New build options

```typescript
// from
const radix = coloradix({
  /* color */
})
  .alias({
    /* alias */
  })
  .overlay(true)
  .enable(true);
// to
const radix = coloradix({
  /* color */
})
  .alias({
    /* alias */
  })
  .build(/* DEFAULT : { overlay = true } = {} */);
```

## 1.4.0

### Minor Changes

- 92061a2: New radix colors

## 1.3.0

### Minor Changes

- 7126444: update radix colors

## 1.2.0

### Minor Changes

- 7891ab2: Update dependencies

## 1.1.0

### Minor Changes

- 1063a6f: Refactoring alias

## 1.0.0

### Major Changes

- f85ac13: Initial Release 1.0.0

## 1.0.0

### Major Changes

- Release 1.0.0
