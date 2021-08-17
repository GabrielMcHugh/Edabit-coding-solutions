// Create a function that 
// takes an array of numbers 
// and return both the minimum 
// and maximum numbers, in that order.

function minMax(arr) {
	let min = arr[0]
	let max = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {min = arr[i];}
		if (max < arr[i]) {max = arr[i];}
	}
	let result = [min, max]
	return result
}
