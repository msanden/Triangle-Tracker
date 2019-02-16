
function triangleTracker() {

  var lengthA = parseInt(document.getElementById('lengthA').value);
  var lengthB = parseInt(document.getElementById('lengthB').value);
  var lengthC = parseInt(document.getElementById('lengthC').value);

  lengths = [lengthA, lengthB, lengthC];

  if (lengths[0]+lengths[1]<=lengths[2] || lengths[0]+lengths[2]<=lengths[1] ||
      lengths[1]+lengths[2]<=lengths[0]) {
      alert('Sorry, the lengths cannot form a triangle.');
    }
    else if (lengths[0]==lengths[1] && lengths[0]==lengths[2] &&
      lengths[1]==lengths[2]) {
      alert('This is an equilateral triangle.');
    }
    else if (lengths[0]==lengths[1] || lengths[0]==lengths[2] ||
      lengths[1]==lengths[2]) {
      alert('This is an isosceles triangle.');
    }
    else if (lengths[0]+lengths[1]>lengths[2] || lengths[0]+lengths[2]>lengths[1]
      || lengths[1]+lengths[2]>lengths[0]) {
      alert('This is a scalene triangle.');
    }
    else {
      alert('Sorry, your input cannot be processed.')
    }
}
