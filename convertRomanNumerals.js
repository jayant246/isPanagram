let roman = {
	1000 : 'M',
  900 : 'CM',
	500 : 'D',
  400 : 'CD',
	100 : 'C',
  90 : 'XC',
	50 : 'L',
	40 : 'XL',
	10 : 'X',
	9 : 'IX',
	5 : 'V',
	4 : 'IV',
	1 : 'I'
}
function convertToRoman(num) {
 	let keys = Object.keys(roman).sort((a,b) => b - a)
 	let answ = ''
 	for(let i=0; i<keys.length;i++) {
 		while(num >= keys[i]) {
 			num -= keys[i]
 			answ += roman[keys[i]]
 		}
 	}
 	return answ
}
console.log(convertToRoman(3999)); // "MMMCMXCIX"
