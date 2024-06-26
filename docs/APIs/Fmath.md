---
sidebar_position: 3
---

# fmath library

<!-- This file is automatically generated. -->
<!--   Manual edits will be overwritten!   -->

<!-- markdownlint-disable -->

`fmath` contains a set of mathematical functions that work with FixedPoint numbers and integers. `fmath` replaces Lua's `math` library in game scripts (you can use Lua's `math` library outside of game scripts).

## Functions
### `max_fixedpoint()`
```tsx
fmath.max_fixedpoint(): FixedPoint
```
Returns the maximum value a fixedpoint integer can take.


---
### `random_fixedpoint()`
```tsx
fmath.random_fixedpoint(
  min: FixedPoint,
  max: FixedPoint
): FixedPoint
```
Returns a random fixedpoint value in the range [`min`, `max`]. `max` must be greater or equal to `min`.


---
### `random_int()`
```tsx
fmath.random_int(
  min: int,
  max: int
): int
```
Returns an integer in the range [`min`, `max`]. `max` must be greater or equal to `min`.


---
### `sqrt()`
```tsx
fmath.sqrt(x: FixedPoint): FixedPoint
```
Returns the square root of `x`. `x` must be greater or equal to 0.


---
### `from_fraction()`
```tsx
fmath.from_fraction(
  numerator: int,
  denominator: int
): FixedPoint
```
Returns the fixedpoint value representing the fraction `numerator`/`denominator`. `denominator` must not be equal to zero.


---
### `to_int()`
```tsx
fmath.to_int(value: FixedPoint): int
```
Returns the integral part of the `value`.


---
### `abs_fixedpoint()`
```tsx
fmath.abs_fixedpoint(value: FixedPoint): FixedPoint
```
Returns the absolute value.


---
### `to_fixedpoint()`
```tsx
fmath.to_fixedpoint(value: int): FixedPoint
```
Returns a fixedpoint value with the integral part of `value`, and no fractional part.


---
### `sincos()`
```tsx
fmath.sincos(angle: FixedPoint): FixedPoint, FixedPoint
```
Returns the sinus and cosinus of `angle`. `angle` is in radian.


---
### `atan2()`
```tsx
fmath.atan2(
  y: FixedPoint,
  x: FixedPoint
): FixedPoint
```
Returns the principal value of the arc tangent of y/x. Returns a value in the range [0, 2π[.


---
### `tau()`
```tsx
fmath.tau(): FixedPoint
```
Returns τ (aka 2π).

