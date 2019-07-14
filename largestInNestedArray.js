let array =[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
let answ = array.map(value => {
	return Math.max(...value)
})
console.log(answ)
// ----------------------------------------------------------------------------------------------------------------
function largest (array) {
	let answer = []
	for(let i = 0; i<array.length; i++) {      		//it enters into the first nested array
		let maxNumber = array[i][0]					//it sets the first element of each nested array to max
		for(let j=0; j < array[i].length; j++) {	
			if(array[i][j] > maxNumber) {			//it compares the first element of nested array to corresponding max no.
				maxNumber = array[i][j]
			}
		}
		answer.push(maxNumber)
	}
	return answer;
}
console.log(largest(array))
