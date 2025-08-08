// write a function called same, which accepts two arrays.
// The function should return true if  every  value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be same.

function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  let frequencyCounter_1 = {};
  let frequencyCounter_2 = {};

  //frequency counters
  for (let num of arr1) {
    frequencyCounter_1[num] = (frequencyCounter_1[num] || 0) + 1;
  }
  //frequency counters
  for (let num of arr2) {
    frequencyCounter_2[num] = (frequencyCounter_2[num] || 0) + 1;
  }

  for (let key in frequencyCounter_1) {
    //check whether key**2 exists in other counter
    if (!(key ** 2 in frequencyCounter_2)) {
      return false;
    }
    //check whether frequency is same as other one
    if (frequencyCounter_2[key ** 2] != frequencyCounter_1[key]) {
      return false;
    }
  }
  //returns true/false
  return true;
}

console.log(same([1, 2, 3, 5], [4, 1, 9, 9]));
