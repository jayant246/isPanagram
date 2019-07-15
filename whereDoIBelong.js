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

// -----------------------------------------(another soluton)
function getIndex(arr, target) {
arr.push(target)                           // 1st its push the element into array
arr.sort((a,b) => a > b)		   // then sort the array, so its correct positon will be find out
return arr.indexOf(target)		   // return the index, which give its accurate positon
}
console.log(getIndex(arr, target))
