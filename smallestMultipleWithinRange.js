function smallestCommons(arr) {
	let number = 0
	arr.sort((a,b) => a-b)   // [1,5]
	let a = arr[0]
	let b = arr[1]
	if(b % a == 0) {
		number = b
	}else {
		number = a * b
	}
	let pair = []
	for(let i = a; i < b; i++) {
		pair.push(i+1)
	}
	let answ = pair.reduce((acc, value) => {
	if(acc % value == 0) return acc
	else {
		let temp = 0
		for(let i =2; i<= value; i++) {
			temp = acc * i
			if(temp % value == 0) return temp;
		}
	}
 },number)
	return answ
}
smallestCommons([1,5]); // range is [1,2,3,4,5] number must be divisible by all the numbers come in b/w the range
