function squareNumber(numb) {

	return numb * numb;
}

function calculatorSquarePrompts(){

var numb = prompt('Square a number.');

var square=squareNumber(numb);

alert('The result of squaring the number ' + numb + ' is ' + square);

}

///

function halfNumb(numb) {

	return numb / 2;

}

function calculatorHalfPrompts(){

	var numb=prompt('Divide a number by half.');
	var half=halfNumb(numb);
	alert('Half of ' + numb + ' is ' + half + '.');
}

///

function percentOf(numb1, numb2) {

	return numb1 / numb2 * 100;
}

function calculatePercentPrompts(){

	var numb1=prompt('Start with a first number.');

	var numb2=prompt('Start with a second number.');

	var percent=percentOf(numb1,numb2);

	alert(numb1 + ' is ' + percent +'% of ' + numb2 +'.');

}

///


function areaOfCircle(radius) {

	return Math.PI * 2 * radius;

}

function calculateAreaPrompts() {

	var radius=prompt('Enter the radius of a circle.');

	var area=areaOfCircle(radius);

	var finalArea = area.toFixed(2);

	alert('The area for a circle with radius ' + radius + ' is ' + finalArea + '.')

}

////



function calculateFinalPrompts() {

	var numb=prompt('Start with a number.');

	var half=halfNumb(numb);

	var square=squareNumber(half);

	var area= areaOfCircle(square);

	var finalArea = area.toFixed(2);

	var percent=percentOf(finalArea,square);

	alert('The area of a circle with a raduis of square of half of ' + numb +' is ' + percent + '% of the square of half ' + numb + '.')

}
