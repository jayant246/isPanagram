var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
]
// console.log( checkCashRegister(3.26,100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
;
// 3.26, 100 = 96.74
function checkCashRegister(price, paid, cid) {
	let objReturn = {status: "INSUFFICIENT_FUNDS", change: []}
	let totalCash = cid.reduce((acc, value) => {
		return value[1] + acc
	},0)
	let change = paid - price // 0.5
	if(totalCash < change) {
		return objReturn
	}else if (totalCash == change) {
		objReturn.status = 'CLOSED'
		objReturn.change = cid
		return objReturn
	}
	let arrayWithValue = denom.map((value, index) => {
		value.amount = cid[cid.length - 1 -index][1]
		return value
	})
	// console.log(arrayWithValue);
	let temp = []
	arrayWithValue.forEach(value => {
		// console.log(value);
		if(change > value.val){
			let answ = 0
			while(value.amount > 0 && change >= value.val) {
				change -= value.val
				change = change.toFixed(2)
				value.amount -= value.val
				answ += value.val
				// console.log(change);
			}
			temp.push([value.name,answ])
		}
		
	})
		if(change ==0) {
			objReturn.status = 'OPEN'
	 		objReturn.change = temp
			return objReturn
		}
		return {status: "INSUFFICIENT_FUNDS", change: []} 
}
