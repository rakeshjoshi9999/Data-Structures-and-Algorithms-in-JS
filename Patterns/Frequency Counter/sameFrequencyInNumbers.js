//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let frequency1 = {};
  let frequency2 = {};
  for (let value of String(num1).split("")) {
    frequency1[value] = (frequency1[value] || 0) + 1;
  }

  for (let value of String(num2).split("")) {
    frequency2[value] = (frequency2[value] || 0) + 1;
  }

  for (let value in frequency1) {
    if (frequency1[value] != frequency2[value]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(22, 222));
