// write a function called same, which accepts two arrays.
// The function should return true if  every  value in the
// array has it's corresponding value squared in the second array.
// The frequency of values must be same.

function same(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (len1 != len2) {
    return false;
  }
  //create a object which contains number in array 1 as key and its occurences
  for (let i = 0; i < len1; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex == -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  //returns true/false
  return true;
}

console.log(same([1, 2, 3, 3], [4, 1, 9, 9]));
