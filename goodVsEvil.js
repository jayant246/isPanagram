function goodVsEvil(good, evil) {
	let goodWorth = [1,2,3,3,4,10] // [1,1,1,1,1,1]
	let evilWorth = [1,2,2,2,3,5,10] //[1,1,1,1,1,1,1]
	let goodSum = good.split(' ').reduce((acc, cval, index) => acc + cval * goodWorth[index], 0)
	let evilSum = evil.split(' ').reduce((acc, cval, index) => acc + cval * evilWorth[index], 0)
	return goodSum > evilSum ? "good wins"
			: goodSum < evilSum ? "evil wins"
			: "its a draw"
}
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')) //=== 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
