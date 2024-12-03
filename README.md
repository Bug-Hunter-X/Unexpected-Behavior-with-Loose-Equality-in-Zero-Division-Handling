# Unexpected Behavior with Loose Equality in Zero Division Handling

This code demonstrates a subtle bug in JavaScript related to loose equality (`==`) and zero division handling. The function `foo` intends to return 0 if either input `a` or `b` is 0. However, due to how JavaScript handles type coercion, there is unexpected behavior.

## Bug Description

The function `foo` correctly handles the case where `a` is 0. However, when `b` is 0, it throws an error rather than returning 0 as intended. This is because JavaScript implicitly converts the result of the `a / b` operation into a Number type. If b is 0, it throws an error since division by zero is undefined.

## Solution

The solution involves using strict equality (`===`) for accurate type checking to avoid unintended coercion. The solution file provides the corrected function.