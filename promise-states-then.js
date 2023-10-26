const getRandomNumber = (upperLimit) => {
	const random = Math.random();
	const randomNumber = Math.floor(random * upperLimit) + 1;
	return randomNumber;
};

const getAsynchronousData = new Promise((resolve, reject) => {
	setTimeout(() => {
		const rand = getRandomNumber(2);
		if (rand === 1) {
			resolve('Promise resolved successfully');
		} else {
			reject('Promise rejected with an error');
		}
	}, 1000);
});

getAsynchronousData
	.then((result) => {
		console.log('FULFILLED:', result);
	})
	.catch((error) => {
		console.error('REJECTED:', error);
	})
	.finally(() => {
		console.log('Promise has settled (either fulfilled or rejected).');
	});

console.log('Promise is in the pending state.');