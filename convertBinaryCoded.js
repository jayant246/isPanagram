function binaryAgent(str) {
  return str.split(' ').reduce((acc,value) => {
  	return acc.concat(String.fromCharCode(parseInt(value, 2)))
  },'')
}
console.log(binaryAgent("01000001 01110010 01100101")) // logs out 'Are'
