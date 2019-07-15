let string = "The quick brown fox jumps over the lazy dog."
function isPanagram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = [...alphabet]
    str = str.toLowerCase()
    for(let i =0; i<26; i++) {			//26 is bcz alphabets are 26
       if(str.indexOf(alphabet[i]) === -1) {    	// str.indexOf(alphabet[i]) === -1 it checks
       	return false;								// whether every aplhabet is includes in str
       }
    }
    return true;
}
console.log(isPanagram(string))

soln 2
function isPanagram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabet = [...alphabet]
    str = str.toLowerCase()
    return alphabet.every(value => str.includes(value))
}
console.log(isPanagram(string))

soln 3 
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
console.log(isPangram(string))
