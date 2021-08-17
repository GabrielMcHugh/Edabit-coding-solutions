function isAvgWhole(arr) {
	let sum = 0
	let i
	for (i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	let avg = (sum / i)
	return Number.isInteger(avg)
	}

console.log(isAvgWhole([1,1,1]));