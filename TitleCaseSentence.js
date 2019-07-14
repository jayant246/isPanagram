function titleCase(str) {
  let answ = str.split(' ').map(value => 
  value[0].toUpperCase() + value.substring(1).toLowerCase())
  return answ.join(' ')
}

console.log(titleCase("I'm a little tea pot")) // logs out I'm A Little Tea Pot

//------------------------------------------------(using string.replace and converting the whole string into lowercase first)
function titleCase(st) {
let answ = str.toLowerCase().split(' ');
let result = answ.map(value => {
            return value.replace(value.charAt(0), value.charAt(0).toUpperCase())
            })
            return result.join(' ')
}
console.log(titleCase("I'm a little tea pot"))
