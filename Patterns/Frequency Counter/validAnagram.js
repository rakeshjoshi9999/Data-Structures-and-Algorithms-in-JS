function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  //create a frequency counter
  const lookup = {};

  //add frequencies of characters in lookup for string 1
  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let char of str2) {
    //check if the value of frequency for str2 character is 0
    if (!lookup[char]) {
      return false;
    }
    //else decrement the frequency for the character
    else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("gadag", "adagg")); // false
