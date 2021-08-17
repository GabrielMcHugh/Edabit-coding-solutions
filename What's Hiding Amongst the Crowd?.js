function detectWord(str) {
	let regex = /[a-z]/g;
	let word = str.match(regex)
	return word.join('');
}