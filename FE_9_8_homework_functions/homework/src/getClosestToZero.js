function getClosestToZero(...array) {
	let zeroClose = array[0];
	for (let i = 0; i < array.length; i++) {
		if (Math.abs(zeroClose) > array[i]) {
			zeroClose = array[i];
		}
	}
	return zeroClose;
}
