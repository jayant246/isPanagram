function whatIsInName(arr, source) {
  let keys = Object.keys(source) // last
  let answ = []
  answ =arr.filter(value => {
  	for(let i=0; i<keys.length; i++) {
  		if(!value[keys[i]] || value[keys[i]] !== source[keys[i]]) {
  			return false
  		}
  	}
  	return true
  })
  console.log(answ)
  return answ
}
whatIsInName([{ first: "Romeo", last: "Montague" }, { first: "Marcelo", last: null },
 { first: "Tybalt", last: "Capulet" }], { last : "Capulet" });

// ----------------------------------------------------------(another solution)
function whatIsInName(arr, source) {
  let keys = Object.keys(source) // last
  let answ = [] 
  arr.forEach(value => {
  	let checker = keys.every(keyValue => {
  		if(value[keyValue] && value[keyValue] === source[keyValue]) {
  			return true
  		}
  		return false;
  	})

      if(checker) {
      	answ.push(value)
      }
  })
      console.log(answ)

      return answ;
 }
whatIsInName([{ first: "Romeo", last: "Montague" }, { first: "Marcelo", last: null },
 { first: "Tybalt", last: "Capulet" }], { last : "Capulet" });
