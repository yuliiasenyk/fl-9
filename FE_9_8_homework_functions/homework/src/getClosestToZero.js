function getClosestToZero(...array) {
	let zero = array[0];
	for (let i = 0; i < array.length; i++) {
		if (Math.abs(zero) > array[i]) {
			zero = array[i];
		}
	}
	return zero;
}
