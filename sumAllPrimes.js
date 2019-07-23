function sumPrimes(num) {
	let sum = 0
	function check(num) {       // this will check if number is prime or not
	if(num <= 1 || typeof num !== 'number') {
		return false
	}else if(num ===2) {
		return true
	}else if (num%2 === 0) {
		return false
	}
	for(let i=3; i*i <= num;i += 2) {
		if(num%i === 0) {
			return false
		}
	}
   return true
}
  for(let i = 2; i<=num; i ++) {
		if(check(i)) {
			sum += i
		}
	}
	return sum
}	
console.log(sumPrimes(10)) // gives 17
