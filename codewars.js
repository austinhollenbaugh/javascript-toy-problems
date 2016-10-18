// https://www.codewars.com/kata/grasshopper-personalized-message/javascript
// Personalized greeting
//
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
// Use conditionals to return the proper message:
//
// case	                return
// name equals owner	 'Hello boss'
// otherwise	         'Hello guest'

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}


// https://www.codewars.com/kata/grasshopper-debug/train/javascript
// Debug celsius converter
//
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
// Find the errors in the code to get the celsius converter working properly.
//
// To convert fahrenheit to celsius:
//
// celsius = (fahrenheit - 32) * (5/9)

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9);
  return celsius;
}

// http://www.codewars.com/kata/convert-a-number-to-a-string/
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

var stringToNumber = function(str){
  return parseInt(str);
}
