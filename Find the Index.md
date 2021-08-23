Create a function that takes an array and a string as arguments and return the index of the string.

### Solutions

```js
function findIndex(arr, str) {
	return arr.indexOf(str)
}

```

### Test
```js
findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f')
> 3

```

### What I learnt
Array.prototype.indexOf()