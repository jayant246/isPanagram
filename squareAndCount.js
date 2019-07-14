 function nbDig(n, d) {
 	let squaredArray = []
 	for(let i=0; i<=n; i++) {
 		squaredArray.push(i*i)
 	};
    var count = 0
    for(let value of squaredArray) {
	       let str = value.toString()
	       for(let i =0 ; i<str.length; i++) {
		       if(str[i] == d) {
			      count++
		        }
	        }
    }
return count
console.log(nbDig(10, 1)) // logs out 4
// -----------------------------------------------------------------(best solution)
let count = 0
function counter(n, d) {
	for(let i=0; i<= n; i++) {
		let square = (i*i + "").split('')
		console.log(square)
        square.forEach(value => value == d? count++ : null)
	}
	return count
}
console.log(counter(11, 1))			// 6

// -------------------------------------------------------------------

function nbDig(n, d) {
   var o = '';
     for(var i = 0; i <= n; i++){
       o += Math.pow(i, 2);
       console.log(o)
    }
     console.log(o.split(1))
   return o.split(d).length-1
 } console.log(nbDig(11, 1))
 
