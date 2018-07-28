// Day 6 Takehome
// Write a program that converts temperatures. It should:

// 1. Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius.

const h3 = document.querySelector('#temp');

let scale = prompt("Which is your preferred temperature scale(C or F)?", "F or C");

let temp = prompt("What is the temperature? (only the number)", "99");

// 2. Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.

function convertTemp(scale, temp) {
  console.log(scale, temp);
  scale = scale.toLowerCase();
  let returnVal;
  let oppositeVal = scale === 'c' ? 'Fahrenheit' : 'Celcius'; // Ternary statement ? is like if : is like else // If value is 'c' then the set opposite value is Fahrenehit, if is it "falsely" then the value is Celcius.
  temp = parseInt(temp);
  if(!isNaN(temp)) {
    returnVal = scale === 'c' ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32); // Another statement, basically a condense if/else, best used for one single true false statment.

    // 3. Display the temperature in an h3 with minimal styling.
    h3.innerText = `Your temperature is ${returnVal} ${oppositeVal}!`;
  } else {
    scale = prompt("Which is your preferred temperature scale(C or F)?", "C or F");
    temp = prompt("What is the temperature? (only the number)", "99");
    convertTemp(scale, temp);
  }
};

convertTemp(scale, temp);

// 4. From that point on, when the user clicks on the h3, run the function to convert the temperature back and forth between Celcius and Fahrenheit.
// 5. Display the converted temperature in the h3 each time it is changed.
h3.addEventListener('click', (e) => {
  let valueArr = e.target.innerText.split(' '); // split is how you take a string and turn it into an array.
  console.log(valueArr[valueArr.length - 1]);
  scale =
  valueArr[valueArr.length - 1] === 'Celcius!' ? 'C' : 'F';
  temp = valueArr[valueArr.length - 2];
  convertTemp(scale, temp);
}); // Research eventListeners further
