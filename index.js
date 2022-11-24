function sum(n) {
	let num = 0;
	let i = 1;
	while (i <= n) {
		num += i++;
	}
	return num;

	// for (let i = 0; i <= n; i++) {
	// 	num += i;
	// }
	// return num;
}

module.exports = sum;
