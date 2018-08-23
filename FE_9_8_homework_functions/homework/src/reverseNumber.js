function reverseNumber(rev) {
	rev = rev.toString();
	const negative = -1;
	if (Math.sign(rev) === 1) {
		return parseInt(rev.split('').reverse().join(''));
	} else {
		return negative * parseInt(rev.split('').reverse().join(''));
	}
}