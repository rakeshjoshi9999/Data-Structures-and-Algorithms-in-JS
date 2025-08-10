// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...args) {
  let frequency = {};

  for (let value of args) {
    frequency[value] = (frequency[value] || 0) + 1;
  }

  for (let value in frequency) {
    if (frequency[value] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates("a", "b", "c"));
