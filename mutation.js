 let arr = ['jayant', 'TJA']
 function mutation(arr) {
	arr[0] = arr[0].toLowerCase()
	arr[1] = arr[1].toLowerCase()
	for(let i=0; i<arr[1].length; i++) {
	if(!arr[0].includes(arr[1][i])) {
		return false;
	} 
}
return true;
}
console.log(mutation(arr))

//------------------------------------------(another solution using every)
function mutation(arr) {
	arr[0] = arr[0].toLowerCase()
	arr[1] = arr[1].toLowerCase()
  let orig = arr[0].split(" ") // ['j', 'a', 'y', 'a', 'n', 't']
  let test = arr[1].split(" ") // ['t', 'j', 'a']
  return test.every(value => orig.includes(value)) // return true or false, whether every element of test is included in orig or not
}

//-----------------------------------------(using indexOf)

let str = 'abccaba'

function mutation(str) {
	for(let i=0; i< str.length; i++) {
		if(str.indexOf(str[i]) !== i) {
			return str[i];
		}
	}
}
console.log(mutation(str)) // return the element which repeat first in the string
			   // return 'c' as it comes again

