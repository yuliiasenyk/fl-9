//first
function findType(x) {
	return typeof x;
}

//second
function forEach(array, innerFunc) {
	for (let i = 0; i < array.length; i++) {
		innerFunc(array[i])
	}
}

//third
function map(array, innerFunc) {
	let newArray = [];
	forEach(array, function (el) {
		newArray.push(innerFunc(el));
	});
	return newArray;
}

//forth
function filter(array, innerFunc) {
	let filtArray = [];
	forEach(array, function (el) {
		if (innerFunc(el)) {
			filtArray.push(el);
		}
	});
	return filtArray;
}

//fifth
function getAdultAppleLovers(data) {
	return map(filter(data, function (el) {
			return el.age >= 18 && el.favoriteFruit === 'apple';
		}),
		function (el) {
			return el.name;
		});
}

//sixth
function keys(array) {
	let arrayKeys = [];
	for (let key in array) {
		if (array.hasOwnProperty(key)) {
			arrayKeys.push(key)
		}
	}
	return arrayKeys
}

//seventh
function values(array) {
	let arrayValues = []
	for (let key in array) {
		if (array.hasOwnProperty(key)) {
			arrayValues.push(array[key])
		}
	}
	return arrayValues
}

//eighth
function showFormattedDate(date) {
	let monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return `It is ${date.getDate()} of ${monthsNames[date.getMonth()]}, ${date.getFullYear()}`;
}


/*
data for 5th task

let data = [
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		"age": 39,
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
  },
	{
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		"age": 38,
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
  },
	{
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		"age": 2,
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
  },
	{
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		"age": 17,
		"eyeColor": "green",
		"name": "Weiss",
		"favoriteFruit": "banana"
  }
];
*/
