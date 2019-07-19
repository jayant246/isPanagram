//----------------------------------------(using array.reverse())
let str = 'jayant'
console.log(str.split('').reverse().join(''))

//----------------------------------------(using forOf loop)

let str = 'jayant'
let adder = ""
for(let char of str) {
	adder = char + adder
}
console.log(adder)

// ---------------------------------------(array.reduce())

let str = 'jayant'
let answ = arr.reduce((acc, val) => val + acc, '')
console.log(answ)

//--------------------------------(using recursion)
let str = 'jayant' // t + n + a + y + a +j
function reverse(string) {
    if(string == '') return ""
	return reverse(string.substring(1)) + string[0]
}
console.log(reverse(str))
