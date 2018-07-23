// 1. Take a number and return the square of that number (power of 2).

let answer = numSquared(parseInt(prompt("What number do you want to square?", "2")));


function numSquared(number) {
  if(!isNaN(number)) {
    return number * number;
  } else { // 2. If a non-number argument is passed into the function, alert NaN and prompt for another response.
    alert("NaN");
    let answer = numSquared(parseInt(prompt("That wasn't an actual number! What is your actual number?", "2")));
    alert(answer);
  }
};

alert(answer);

// 3. In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period.

function parseString(string) {
  let parsedLetter = string.charAt(0).toUpperCase();
  let stringArr = string.split('');
  stringArr.splice(0, 1, parsedLetter);
  string = stringArr.join(''); //Replaces the first letter with the new uppercased letter
  if(string.charAt(string.length - 1) !== '.') string = string + '.';
  return string;
};

// let answer = parseString(prompt("Type something in.", "i Heart cheese."));
// alert(answer)

// 4. Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.

function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
};

// reverseHalves(prompt("give me a sentence", "hello world!"));

// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.

function isPalindrome(string) {
  let reversed = string
                    .split('') //returns an array
                    .reverse() //ONLY WORKS on arrays
                    .join('')  //returns a string
  return string === reversed;
};
