let arr = [2,4,6,3,8]
function findOutlier(arr){
  //your code here
  let answer = arr.filter(value => value%2 === 0)
	if(answer.length >= 2) {
		answer = arr.filter(value => value%2 !==0)
		return parseInt(answer);     // to convert the solo element of array into integer
	}else {
		answer = arr.filter(value => value%2 === 0)
		return parseInt(answer);
	}
}
console.log(findOutlier(arr));
// let arr = [2,4,3,6,8] logs 3 out
// let arr = [1,3,5,4,7] logs 4 out

//-----------------------------------------------------------------------

function remover(arr) {
	let even = arr.filter(value => value%2 === 0) 
	let odd = arr.filter(value => value%2 !==0)
    return even.length === 1 ? even[0] : odd[0] // even value is the odd one
}
console.log(remover(arr))
