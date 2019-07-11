// type coercion
// let x = [1] + [2]

// console.log(x) // add them as string

// console.log(typeof(x)) // return object

//  console.log(typeof([1, 2,3,4]))

//  let y = [1, 2, 2, 2]

//  console.log(typeof(y)) 

// examples array

// 

// 

// let x = -5

// console.log('ur +ve number is')

// if (x<=0) {
// 	console.log(-x)
// } else {
// 	console.log(x)
// }
// negation
// let a = 5 , b =6

// console.log(~b 

// var temp = 'my name is jayant'

// var word = "Jayant"

// console.log(`the word ${word} ${temp.includes(word) ? 'is' : 'is not'} present in the string`)

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a'
// var idx = array.indexOf(element)

// if(idx !== -1) {

// 	array.forEach(searcher);

// 	console.log(indices)

// }else {
// 	console.log(`element ${element} not exist in array`)
// }

// function searcher(value, index) {
//      if(value === element) {
//      	indices.push(index)
//      }
// }


// let temp = {
// 	name : {
// 	real : 'jayant'
//        }
// }

// function calling(value) {
// 	console.log(temp[value]) 
// }

// calling('name')

// console.log(temp['name'])

// if(!temp['name'].hasOwnProperty('fake')) {
// 	temp['name']['fake'] = []
// }

// console.log(temp['name']['fake'])

// let even = []
// let odd = []
// for(let i =0; i<20; i++ ) {
// 	if(i%2 == 0) {
// 		even.push(i)
// 	} else {
// 		odd.push(i)
// 	}
// }
// console.log(`even are ${even}`)
// console.log(`odd are ${odd}`)

// fcc profile lookup problem


// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookup(name, prop) {
// 	for(let i=0 ; i< contacts.length; i++) {
// 			if(contacts[i]["firstName"] === name) {
// 				if(contacts[i].hasOwnProperty(prop)) {
// 					return contacts[i][prop]
// 				}else if (prop == undefined || prop == ""){
// 					return "please enter a valid property"
// 				}else {
// 					return "No such property"
// 				}
// 			}
// 	}
// 	return "No such contact"
// }
// console.log(lookup("Akira", ))cons

// console.log(Math.ceil(Math.random()*10))

// let num = (Math.random()*10)

// console.log(num)

// console.log(Math.floor(num))
// console.log(Math.floor(Math.random() * 6));

// let max = 10

// let min = 5

// let result = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(result)

// function temp(age) {
// 	return  age == 10 ? "age ten"
// 	: age == 11 ? "age eleven"
// 	: age == 12 ? "age twelve"
// 	: "unspecified";
// }

// // console.log(temp(20))
// // var temp = false
// // let str1 = 'abcde'
// // let str2 = 'aaaaa'
// // let isAnagram = function(val1, val2) {
// // 	if(val1.length === val2.length) {
// // 		for(let i =0 ;i < val1.length; i++) {
// // 			 if(val1.includes(val2[i])) {
// // 			 	temp = true
// // 			 }
// // 		}
// // 	} else {
// // 		return false
// // 	}
// // }

// //  isAnagram(str1, str2)
// //  if(temp === true) {
// //  	console.log('isAnagram')
// //  }else {
// //  	console.log('is not anagram')
// //  }


// var arr = 'abc'

// var mod = arr.split('') //['a', 'b', 'c', 'b', a']

// // var answ = (value) => value.reduce((acc,  cvalue) => {
// // 	if (acc.indexOf(cvalue) === -1) {
// // 		acc.push(cvalue)
// // 	} else {
// // 		return cvalue
// // 	}
// // 	return acc;
// // }, [])
// // var temp = []
// // var sol = (value) => {
// // 	for(let i=0; i <value.length; i++) {
// // 		if (temp.indexOf(value[i]) === -1) {
// // 			temp.push(value[i])
// // 		}else {
// // 			return value[i]
// // 		}
// // 	}
// // 	return null
// // }

// var sol = (value) => {
// 	for(let i=0; i <value.length; i++) {
// 		if (value.indexOf(value[i]) !== i) {
// 			return value[i]
// 		}
// 	}
// 	return null
// }
// console.log(sol(arr))

// destructurig
 
// let obj = (name, age) => ({name, age})

// console.log(obj('jayant', 18))

// let createPerson = (name, age , sex) => ({name, age, sex})

// console.log(createPerson('jayant', 18, 'Male'))

// let array = [1,2,3,4,4,5,'5']

// console.log(array)

// let temp = new Set(array)

// console.log(temp.keys())

// console.log(temp)

// let string = [1,2,3,4,5,6,7]

// string.fill(0 , 1, 3)

// delete string[3]

// console.log(string)

// console.log(3 in string)

// function stringConcat(str) {
// 	var result = ''
// 	for(let i = 0 ; i < arguments.length; i++) {
// 		result += arguments[i] + str //str = something
// 	}
// 	return result;
// }

// console.log(stringConcat(', ', 'red', 'orange', 'blue'))


// // result = somethingsomethingsharmasomethingJavaScriptsomething

//  function firstName() {
// 	let name = 'Jayant';
//      return (function lastName() {
//      	  let sirName = 'Sharma';
//      	  let fullName = `${name} + ${lastName}`
//      	  return fullName;
//      })()
// }
// console.log(firstName())
// 'is2', 'Thi1s', 'T4est', '3a' 
let string= "The quick brown fox jump overthe lazy dog."
// console.log(temp[3])
// let val = 'abbca' 
// for(let i=0; i<val.lengh; i++) {
// 	if(val.indexOf(val[i] === -1))
// }
function checker(temp) {
	let alpha = 'abcdefghijklmnopqrstuvwxyz'
	alpha = [...alpha]
	let val = temp.toLowerCase()
// let answ = 0
// console.log(val)
for(let i=0; i<26; i++) {
	if(val.indexOf(alpha[i]) === -1) {
		// console.log(alpha[i])
		// answ = 1
		// break
;		return false
	}
}
// if(answ === 1) {
// 	return false
// } else {
// 	return true
// }
return true
}
console.log(checker(string))
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }

// // console.log(isPangram(string))
// let str = "The quick brown fox jumps over the lazy dog."
// function checker(str) {
//    let temp = 'abcdefghijklmnopqrstuvwxyz'
//    // return temp.split('').every(item => str.indexOf(item) !== -1)
//    return temp.split('').every(item => str.toLowerCase().includes(item))
// }
// console.log(checker(str))