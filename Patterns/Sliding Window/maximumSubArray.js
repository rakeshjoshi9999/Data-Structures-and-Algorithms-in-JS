//write a function called maxSubarraySum which accepts an array of integres
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array

function maxSubarraySum(arr, n) {
  //return null if arr doesnt have any elements or n is greater than array length
  if (!arr.length || n > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  //loop through first n numbers and save the sum
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //loop through array from n since we have already calcuated sum for first n numbers
  for (let i = n; i < arr.length; i++) {
    // remove previous number from the window and add the next number from window to calculate next sum
    // sliding the window
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([4, 2, 1, 6, 5, 7, 3, 4, 5, 6, 1], 4));
