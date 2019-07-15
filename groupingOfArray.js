 function chunkArrayInGroups(arr, size) {
  	let round = Math.ceil(arr.length / size)
  	let answ = []
  	for(let i=0; i< round; i++) {
  		let temp = arr.splice(0, size)
  		answ.push(temp)
  	}
  	return answ
  }
// ------------------------------------------
function chunkArrayInGroups(arr, size) {
	let answ = []
	for(let i=0; i<arr.length; i += size) {
		answ.push(arr.slice(i, i+size))
	}
	return answ
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5],2));
