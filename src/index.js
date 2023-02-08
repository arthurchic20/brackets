module.exports = function check(str, bracketsConfig) {
	let strArr = str.split('')
	let count = true
	do {
		nextPrime:
		for (let i = 0 ; i < strArr.length; i++) { 
			for (let x = 0; x < bracketsConfig.length; x++){
				let el = bracketsConfig[x]
				if (strArr[i] === el[0] && strArr[i + 1] === el[1]) {
					strArr.splice(i, 2)
					count = true
					break nextPrime
				} else {
					count = false
					continue
				}
			}
		}
		if (strArr.length == 0) count = false
	} while (count)	
	return strArr.length != 0 ? false : true 
}