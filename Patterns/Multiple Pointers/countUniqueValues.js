//Implement a function countUniqueVales which accepts sorted array and
//returns the count of unique values in the array
function countUniqueValues(arr) {
  //take two pointers and place them at the i=0 and j=i+1 of the array
  let i = 0;
  let j = i + 1;
  let length = arr.length;
  while (j < length) {
    //iterate through array and when the ith value and jth value are different
    //assign arr[j] value to arr[i] else increment j
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8]));
