function diffArray(arr1, arr2) {
	let arr = []
	arr1.forEach(value => {
		if(arr2.indexOf(value) == -1) {
			arr.push(value)
		}
	})
	arr2.forEach(value => {
		if(arr1.indexOf(value) == -1) {
			arr.push(value)
		}
	})
	return arr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
