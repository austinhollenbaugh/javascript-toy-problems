// Convert number to reversed array of digits
//
// Given a random number:
//
// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.
// Example:
//
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

//Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

// Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.
//
// Eg. if number = 7, and power = 2, result = 50.

//https://www.codewars.com/kata/dans-great-power-generator/train/javascript

function danspower(num, power) {
  var result = 1;
  if (power === 0) return 0;
  for (var i = 1; i <= power; i++) {
   result *= num;
  }
  if (result % 2 != 0) {
    result = Math.round(result / 10) * 10;
    return result;
  }
  return result;
}

//Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//https://www.codewars.com/kata/friend-or-foe/train/javascript

function friend(friends){
  var arr = [];
  friends.filter(function(friend) {
    if (friend.length === 4) {
      arr.push(friend);
    }
  });
  return arr;
}

//An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

// Your task is to take a distance that an athlete is through the race, and return one of the following:
//
// If the distance is zero, return 'Starting Line... Good Luck!'
//
// If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.
//
// If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.
//
// If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.
//
// If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.
//
// Finally, if the athlete has completed te distance, return "You're done! Stop running!"
//
// All distance should be calculated to two decimal places.
//https://www.codewars.com/kata/ironman-triathlon/train/javascript

function iTri(s) {
  var distanceLeft = (140.60 - s).toFixed(2);
  if (s === 0) {
    return 'Starting Line... Good Luck!';
  } else if (s > 0 && s <= 2.4) {
    return {Swim: distanceLeft + ' to go!'};
  } else if (s > 2.4 && s <= 114.4) {
    return {Bike: distanceLeft + ' to go!'};
  } else if (s > 114.4 && s < 130.6) {
    return {Run: distanceLeft + ' to go!'};
  } else if (s >= 130.6 && s < 140.6) {
    return {Run: 'Nearly there!'};
  } else if (s === 140.6) {
    return "You're done! Stop running!";
  } else
};



// Program an algorithm in your selected language that performs exactly 1 complete pass (no more, no less :D) of the Bubblesort algorithm to a list of positive integers. You may assume all arguments provided are arrays containing at least 2 positive integers.
function bubblesortOnce(intArr) {
  for (var i = 0; i < intArr.length; i++) {
    if (intArr[i] > intArr[i + 1]) {
      var first = intArr[i];
      intArr[i] = intArr[i + 1];
      intArr[i + 1] = first;
    }
    console.log(intArr);
  }

  return intArr;
}

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
  else {
    return c + " is above freezing temperature";
  }
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
};
