// sum of all odd fibonacci number less than or equal to num
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

// ------------------(OR) {put fibbonacci numbers which are <= num on front using While loop }

function sumFibs(num) {
	let arr = [1,1]
	while((answ = arr[0] + arr[1]) <= num) { // coz we want that fibbonacci number which is less than or equal to num
		arr.unshift(answ) // here we put that number on the first
	}
	console.log(arr)
	return arr.reduce((acc, value) => acc + value*(value % 2),0) // here value % 2 gives 1 when value is odd and it gives 
	// zero(0) when value is even so, it seperates out the even and odd number
}

console.log(sumFibs(10))
