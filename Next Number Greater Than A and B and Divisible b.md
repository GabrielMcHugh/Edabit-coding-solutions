# Next Number Greater Than A and B and Divisible by B

You are given two numbers a and b. Create a function that returns the next number greater than a and b and divisible by b.

Examples
```js
divisibleByB(17, 8) ➞ 24

divisibleByB(98, 3) ➞ 99

divisibleByB(14, 11) ➞ 22
```

```js
function divisibleByB(a, b) {
	let c = (a > b) ? a : b;
	for (let i = c+1; ; i++) {
		if (i % b === 0) return i
	}
}
```