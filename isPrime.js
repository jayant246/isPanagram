function isPrime(num) {
	if(num <= 1 || typeof num !== 'number') {
		return false
	}else if(num ===2) {
		return true
	}else if (num%2 === 0) {
		return false
	}
	for(let i=3; i*i <= num;i++) {
		if(num%i === 0) {
			return false
		}
	}
   return true
}

//----------------------------------------------------
function isPrime(num) {
  if(num < 2) return false;
  for(var i = 2; i <= num / 2; i++) 
    if(num % i == 0) return false;
  return true;
}
