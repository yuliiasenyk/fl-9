let login = prompt('Please enter your login', '');
let letters = login.length;
let result;
const date = new Date().getHours();

if (login === null || letters === 0) {
	result = 'Canceled';
} else if (letters < 4) {
	result = 'I don\'t know any users having name length less than 4 symbols';
} else if (login !== 'User') {
	result = 'I don’t know you';
} else {
	getPassword(prompt('Please enter your password', ''));
}
function getPassword(password) {
if (password === null) {
	result = 'Canceled';
} else if (password !== 'SuperUser') {
	result = 'Wrong password';
} else if (date > 20) {
	result = 'Good evening!';
} else {
	result = 'Good day';
}
}
alert(result);