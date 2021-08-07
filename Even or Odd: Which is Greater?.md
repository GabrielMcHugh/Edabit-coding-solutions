## Even or Odd: Which is Greater?
Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.

If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

Examples
```js
evenOrOdd("22471") ➞ "Even and Odd are the same"

evenOrOdd("213613") ➞ "Even and Odd are the same"

evenOrOdd("23456") ➞ "Even is greater than Odd"
```

## Solution
```js
function evenOrOdd(str) {
	let arr = str.split("").map(Number)
	let evens = arr.filter(num => num % 2 === 0);
	let odds = arr.filter(num => num % 2 === 1);
	const reducer = (accumulator, currentValue) => accumulator + currentValue
	let evenSum = evens.reduce(reducer)
	let oddSum = odds.reduce(reducer)
	let result = ( evenSum > oddSum ) ? "Even is greater than Odd"
		: ( evenSum < oddSum ) ? "Odd is greater than Even"
		: "Even and Odd are the same"
	return result;
}
```

## What it taught me
It introduced me to the split, filter and reduce functions