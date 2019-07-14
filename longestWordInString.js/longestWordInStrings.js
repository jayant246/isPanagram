let str = "The quick brown fox jumped over the lazy dog"
function longest(str) {
let answ = str.split(' ')
let answer = []
for(let value of answ) {
	answer.push(value.length)
}
return  Math.max(...answer)

}
console.log(longest(str))
// -------------------------------------------------------------------------------------------------------
// ## or 2nd method

function longest(str) {
	let words = str.split(' ')
	let maxLength = 0;
	for(let i=0; i< words.length; i++) {
		if(words[i].length> maxLength) {
			maxLength = words[i].length
		}
	}
	return maxLength;
}
