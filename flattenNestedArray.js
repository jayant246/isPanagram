
function flatten(arr) {
	return arr.reduce((acc, value) => {
		if(Array.isArray(value)) {
			 return acc.concat(flatten(value))
		}else {
			return acc.concat(value)
		}
	}, [])
}
console.log(flatten([1, [2], [3, [[4]]]])) // logs out [1,2,3,4]

//---------------- using ternary opertaor (? :)
function flatten(arr) {
	return arr.reduce((acc, value) => {
		return acc.concat(Array.isArray(value) ? flatten(value) : value)
	}, [])
}
console.log(flatten([1, [2], [3, [[4]]]])) // logs out [1,2,3,4]


