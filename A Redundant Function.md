Write a function redundant that takes in a string str and returns a function that returns str.

### Solution
```js
function redundant(str){
	const string = str
	return function () {return str} 
}

```

### New concepts
- Closures