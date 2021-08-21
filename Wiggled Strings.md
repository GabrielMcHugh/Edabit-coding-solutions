Create a function that returns an array of the given string but offset by spaces. Here are some more precise instructions:

- Keep adding spaces on the left until you have the same number of spaces as the word length.
- Then keep removing spaces until you reach the original word.

### Solution
```js
function wiggleString(s) {
	let arr = []
	let wiggleString = s
	for (let i = 0; i < s.length; i++){		arr.push(wiggleString)
		wiggleString = wiggleString.padStart(i+s.length+1)
	}
	for (let i = 0; i <= s.length; i++) {	arr.push(wiggleString)
		wiggleString = wiggleString.slice(1)
	}
	return arr
}

```