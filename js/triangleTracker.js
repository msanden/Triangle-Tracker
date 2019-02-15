

function triangleTracker() {
/*var lengthA = parseInt(prompt('Enter a length'));
var lengthB = parseInt(prompt('Enter a length'));
var lengthC = parseInt(prompt('Enter a length'));*/

var lengthA = parseInt(document.getElementById('lengthA').value);
var lengthB = parseInt(document.getElementById('lengthB').value);
var lengthC = parseInt(document.getElementById('lengthC').value);

if (lengthA+lengthB<=lengthC || lengthA+lengthC<=lengthB || lengthB+lengthC<=lengthA) {
alert('The lengths cannot form a triangle');
}
else if (lengthA==lengthB && lengthA==lengthC && lengthB==lengthC) {
alert('This is an equilateral triangle');
}
else if (lengthA==lengthB || lengthA==lengthC || lengthB==lengthC) {
alert('This is an isosceles triangle');
}

else {
alert('This is a scalene triangle');
}
}
funtionTracker();
