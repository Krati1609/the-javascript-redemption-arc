one-liner notes for Day 1:

* **Variables (`let` vs `const` vs `var`):** Use `const` by default for fixed values, `let` for reassignable variables (both block-scoped); never use `var` (buggy function scope).
* **Dynamic Typing:** Variables don't have static types—values do, meaning a variable can hold a `Number`, then a `String`, at runtime.
* **Primitive Types:** The 7 primitives (`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`) store raw values directly, unlike reference objects.
* **The `typeof null` Bug:** `typeof null` returns `"object"` due to a legacy 1995 C-pointer bug—always check `val === null` explicitly.
* **Type Coercion & Math:** `+` concatenates if any operand is a string, but `-`, `*`, `/` force string operands into numbers.
* **Falsy Values:** Only 6 values evaluate to `false` in conditions: `false`, `0`, `""`, `null`, `undefined`, and `NaN` (everything else is truthy).
* **Strict Equality (`===`):** Always use `===` over `==` because `===` checks both value and type without performing implicit type conversion.
* **Arrow Functions (`=>`):** Concise ES6 lambda-style functions; single expressions implicitly return their result without requiring `return` or `{}`.
* **Template Literals:** Multi-line string interpolation wrapped in backticks (``${variable}``) instead of ugly `+` concatenations.
* **Basic String Methods:** `.length` reads total characters as a property, while `.split(" ")` breaks strings into arrays of words based on delimiters.