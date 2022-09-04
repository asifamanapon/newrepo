
var numbers = [45, 68, 78, 56, 89, 98];

var element = numbers[1];

numbers[1] = 77;
numbers[3] = 44;

var positionIndex = numbers.indexOf(89);
console.log(positionIndex);