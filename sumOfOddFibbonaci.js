function sumFibs(num) {
  let a = 1
  let b = 1
  let c = 0
  let arr = [1,1]
  for(let i =0; i< num -2; i++) {
  	c = a +b
  	if(c % 2 !=0 && c<=num) arr.push(c)
  	a = b
  	b = c
  }
  return arr.reduce((acc, value) => acc + value, 0)
}

// ------------------(OR)

function sumFibs(num) {
	let arr = [1,1]
	while((answ = arr[0] + arr[1]) <= num) {
		arr.unshift(answ)
	}
	console.log(arr)
	return arr.reduce((acc, value) => acc + value*(value%2),0)
}

console.log(sumFibs(10))
