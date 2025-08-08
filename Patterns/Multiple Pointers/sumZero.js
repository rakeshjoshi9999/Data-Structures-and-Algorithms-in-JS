//create a function sumZero which takes a sorted array as input and
// returns the first two values whose sum turns out to be zero

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(sumZero([-2, -1, 0, 1, 2, 3]));
