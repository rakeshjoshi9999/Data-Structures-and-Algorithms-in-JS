// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
  let frequency_letters = {};

  for (let char of letters) {
    frequency_letters[char] = (frequency_letters[char] || 0) + 1;
  }

  for (let char of message) {
    if (!frequency_letters[char]) {
      return false; // char doesnt exists or already used up
    }
    frequency_letters[char]--;
  }
  return true;
}

console.log(constructNote("aabbcc", "bcabcaddff"));
