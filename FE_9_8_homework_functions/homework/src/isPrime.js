function isPrime(prime) {
	for (let i = 2; i < prime; i++) {
		if (prime % i === 0) {
			return false;
		}
	}
	return prime > 1;
}
