In this challenge you will receive an input of the form:

```js
[[[[[[[[[[[]]]]]]]]]]]
```
In other words, an array containing an array containing an array containing... an array containing nothing.

Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

Solution
```js
function measureDepth(arr) {
	let str = JSON.stringify(arr)
	let count = 0
	for(let i = 0; i < str.length; i++) {
		if (str[i] === "[") {count++}
	}
	return count
}
```

