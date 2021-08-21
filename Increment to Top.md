Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max before hand)

### Solution
```js
function incrementToTop(arr) {
	let current = arr[1]
	let currentMax = arr[1]
	let oldMax = 0
	//when a new max is found, this no multiplies the steps because it represents prior elements stepping from this no to the next
	let oldMaxCounter = 1
	let steps = 0
	//traverse over array
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < currentMax) {
			//step value to current max
			steps += currentMax - arr[i]
			//increment counter
			oldMaxCounter++;

		} else {
			//set new max
			oldMax = currentMax;
			currentMax = arr[i]
			//increment all old values to this new value and add to total steps
			steps += (currentMax - oldMax)*oldMaxCounter
		}

	}
	return steps
	
}

```

### Improved Solution





