##First N Mid
Create a function that takes a string and returns the first character of every word if the length of the word is even and the middle character if the length of the word is odd.

Examples
```js
stmid("Alexa have to paid") ➞ "ehtp"
// "e" is the middle character of "Alexa"
// "h" is the first character of "have"

stmid("Th3 0n3 4nd 0n1y") ➞ "hnn0"

stmid("who is the winner") ➞ "hihw"
```

##Solution
```js
function stmid(str) {
	let arr = str.split(" ")
	result = arr.map(parity)
	return result.join("")
}

//Determines parity of string
function parity(str) {
	if (str.length % 2 === 0) {
		return firstChar(str)
	}
	return middleChar(str)
}

function firstChar(str) {
	return str[0]
}

function middleChar(str) {
	let length = str.length
	let prox = ((length-1)/2)
	return str[prox]
}
```