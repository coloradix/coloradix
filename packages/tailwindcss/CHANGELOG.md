# @coloradix/tailwindcss

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
