let string = 'abcef'
let temp = 0
function checker(str) {
	for(let i=0; i < str.length -1 ; i++) { // str.length - 1 coz we dont want to check the
		// last character, if it checks the last character it will return its next character
		// which is not present in the string 
		// OR we can put conditon (< -1 "less than -1")
		if(str.charCodeAt(i) - str.charCodeAt(i+1)  != -1) {
			temp = str.charCodeAt(i) +1
			return String.fromCharCode(temp)
		}
	}
	return undefined
}
// ------------------------ (OR)
function checker(str) {
	for(let i=0; i < str.length ; i++) {
		if(str.charCodeAt(i) - str.charCodeAt(i+1) < -1) {
			temp = str.charCodeAt(i) +1
			return String.fromCharCode(temp)
	}
	return undefined
}
	
console.log(checker(string))
