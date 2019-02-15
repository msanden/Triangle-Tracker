
function triangleTracker() {
  var lengthA = parseInt(document.getElementById('lengthA').value);
  var lengthB = parseInt(document.getElementById('lengthB').value);
  var lengthC = parseInt(document.getElementById('lengthC').value);

  lengths = [lengthA, lengthB, lengthC];

  for (var index = 0; index<lengths.length; index++) {
    if (lengthA+lengthB<=lengthC || lengthA+lengthC<=lengthB || lengthB+lengthC
      <=lengthA) {
      alert('The lengths cannot form a triangle');
      break;
    }
    else if (lengthA==lengthB && lengthA==lengthC && lengthB==lengthC) {
      alert('This is an equilateral triangle');
      break;
    }
    else if (lengthA==lengthB || lengthA==lengthC || lengthB==lengthC) {
      alert('This is an isosceles triangle');
      break;
    }
    else {
      alert('This is a scalene triangle');
      break;
    }
  }
}
triangleTracker();
