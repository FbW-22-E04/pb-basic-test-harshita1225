// Add answers here

//task 1. Los or New?

function nameOfCity(cityname) {
  let res = cityname.substring(0, 3);
  const str1 = "new";
  const str2 = "los";
  if (res.toLowerCase().match(str1.toLowerCase())) {
    console.log(cityname);
  } else if (res.toLowerCase().match(str2.toLowerCase())) {
    console.log(cityname);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("london");

//task -2  isDivisible?

const isDivisible = (num) =>
  num % 100 === 0 ? console.log(true) : console.log(false);

isDivisible(1);
isDivisible(1000);
isDivisible(100);

//task -4 What's the weather?

const isRaining = (boolean) =>
  boolean === true
    ? console.log("wet day - you need an umbrella")
    : boolean === false
    ? console.log("dry day - leave your umbrella at home")
    : console.log("boolean is either true or false");

isRaining(true);
//isRaining(false);
//isRaining("free");

//Loops
//task-1 Sequence

function geometricalSequence() {
  let arr = "";
  let n = 9;
  let i = 1;
  while (n != 0) {
    //console.log(i);
    arr += i + " ";
    i = i * 2;
    n = n - 1;
  }
  return console.log(arr);
}

geometricalSequence();

//task - 2 Multiples

function multiplesOfThree() {
  let newStr = "";
  for (let i = 1; i < 6; i++) {
    newStr += 3 * i + " ";
  }
  return console.log(newStr);
}
multiplesOfThree();

//Math
//task -1

function powerOf(int) {
  let powervalue = int ** int;
  return console.log(powervalue);
}
powerOf(3);
powerOf(4);

//Problem Solving
// 1. How many?

function vowelCount(string) {
  let theString = string.toLowerCase();
  let letter;
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < theString.length; i++) {
    letter = theString.charAt(i);
    if (vowels.indexOf(letter) > -1) {
      count = count + 1;
    }
  }
  return console.log(count);
}

vowelCount("hello");
vowelCount("test");
vowelCount("fbw");

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
