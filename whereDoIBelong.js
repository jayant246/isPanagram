let arr = [1,2,3,3,4]
let target = 4.5
function getIndex(arr, target){
arr.sort((a,b) => a>b)     // sort the array
let answ = arr.findIndex(value => value >= target)
if(answ == -1) {
	answ = arr.length
}
return answ;
 }
console.log(getIndex(arr, target)) // it will give the index of target element where it should be placed
