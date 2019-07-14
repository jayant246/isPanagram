let str = "1 2 3 4 5"  
function finder () {
	str = str.split(" ")
	let max = Math.max(...str).toString()
	let min = Math.min(...str).toString()
	return `${max} ${min}`    // or return `${Math.max()} ${Math.min()}`
}
console.log(finder(str))  // logs out "5 1"  (strings)
