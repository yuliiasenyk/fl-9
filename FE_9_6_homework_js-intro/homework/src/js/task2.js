let sideA = Number(prompt('Length of side A:', '0')),
    sideB = Number(prompt('Length of side B:', '0')),
    angle = Number(prompt('Angle between A and B:', '0'));
let result;
const straight_angle = 180;
const half = 0.5;
const radian = Math.PI / straight_angle * angle;
let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2) - 2 * sideA * sideB * Math.cos(radian)),
	trianglePerimeter = sideA + sideB + sideC,
	triangleSquare = half * sideA * sideB * Math.sin(radian)
	
if (isNaN(sideA) || isNaN(sideB) || isNaN(angle) ||
    sideA < 0 || sideB < 0 || angle < 0 || angle > straight_angle) {
    result = 'Invalid data';
} else {
result = 
	'C length: ' + Math.round(sideC * 100) / 100 + '\n' +
	'Triangle square: ' + Math.round(triangleSquare * 100) / 100 + '\n' +
	'Triangle perimeter: ' + Math.round(trianglePerimeter * 100) / 100;
}

console.log(result);


