---
title: Typescript method decorators
---

## Why / When

### When to use decorators

https://saul-mirone.github.io/a-complete-guide-to-typescript-decorator/

It's common to add new methods and properties to a class to accommodate new features. Often these methods are decorative in nature, in that they introduce special case behaviour that is not specific to the class. The problem with decorative additions is that they complicate their host classes with logic that is rarely used.

Decorators offer a remedy for this. Place each addition in its own function and wrap the target class with it.

### how do you tell a piece is code is decorative?

## composition

## aspect oriented

## pros
- Removes duplication of embellishment code across different classes
- Distinguishes core responsibility from embellishment
- Simplify classes

## cons
- identity of decorated object
- can make code hard to understand
- complicates designs when decorators have effect on each other eg. when order matters