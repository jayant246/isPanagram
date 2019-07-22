function pairElement(str) {
 	let arr = []
 	str.split('').forEach((value, index) => {
 		//arr.push([])
 		//arr[index].push(value)
 		//value == 'A' ? arr[index].push('T')
 		//:value == 'T' ? arr[index].push('A')
 		//:value == 'G' ? arr[index].push('C')
 		//:arr[index].push('G')
    
 		value == 'A' ? arr[index].push(value,'T')
 		:value == 'T' ? arr[index].push(value,'A')
 		:value == 'G' ? arr[index].push(value,'C')
 		:arr[index].push(value,'G')
 	})
 	return arr
}
console.log(pairElement("GCG")) // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]

//-----------------------------------------------------(using objects) 

function pairElement(str) {
	let pair = {
		A : 'T',
		T : 'A',
		G : 'C',
		C : 'G'
	}
	let arr = []
	str.split('').forEach(value => {
		if(pair[value]) arr.push([value, pair[value]])
	})
	return arr;
}

console.log(pairElement("ATCG")); // [ [ 'A', 'T' ], [ 'T', 'A' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
