# JavaScript Loose Typing Bug

This example demonstrates a common error in JavaScript related to its loose typing system.  When using the `+` operator with a mix of numbers and strings, JavaScript will implicitly convert the operands to strings and perform concatenation instead of numerical addition.

## The Problem

The `foo` function is intended to add two numbers. However, due to JavaScript's dynamic typing, it will perform string concatenation when passed string arguments or a mix of number and string arguments.

## The Solution

The best solution is to use type checking or explicitly convert inputs to numbers before performing the addition to ensure the expected behavior.  This eliminates ambiguity and prevents unexpected results.