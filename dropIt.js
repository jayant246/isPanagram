// check description
// mutate the original array
function dropElements(arr, func) {
  // Drop them elements.
  let answ = []
  arr.forEach((value,index) => {
    if(func(value)) {
      answ =  arr.splice(index) // use splice here coz when we get the first true for value in array we splice the whole array
      // so that next value will not be checked and Object.freeze() will freeze that new value if use slice
      // e.g. for [1,2,3] 1 gets true and freeze will do it for [1,2,3] and for 2 it also give true so it will again
      // slice the value from 2 i.e [2,3] and freeze will do it [2,3] and so the answ is [2,3].
      //Object.freeze(answ)
    }
     })
  return answ
 }
 console.log(dropElements([1,2,3], function(n) {return n < 3; })) // logs out 1,2,3
 console.log(dropElements([4,5], function(n) {return n < 3; }))   // [] as no vlaue matches the condition
 
 // ----------------------(using for loop) 
 
 let arr = [1,2,3]
function dropElements(arr, func) {
	for(let i=0; i<arr.length; i++) {
		if(func(arr[i])) {
			return arr.slice(i)
		}
	}
	return []
}
console.log(dropElements(arr, function(n) {return n < 3})) // logs out [1,2,3]
 
 // ----------------------(using findIndex)
 
 function dropElements(arr, func) {
  let index = arr.findIndex(func)
  if(index >= 0) {
      return arr.slice(index)
    }
  return []
 }

