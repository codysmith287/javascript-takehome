// Day 6 Takehome
// Write a program that converts temperatures. It should:

// 1. Ask your user to give you a scale (Celcius or Fahrenheit) and the tempurature they want to convert. So if they give you 90 Fahrenheit, they would want you to convert 90 degrees Fahrenheit to whatever that is in Celcius.

const h3 = document.querySelector('#temp');

let scale = prompt("Which is your preferred temperature scale(C or F)?", "C or F");

let temp = prompt("What is the temperature? (only the number)", "99");

// 2. Employ a function that accepts those two values as arguments: temperature and scale (either celcius or fahrenheit) and converts the tempurature they gave you to the opposite scale.

function convertTemp(scale, temp) {
  scale = scale.toLowerCase();
  let returnValue;
  let oppValue = scale === 'c' ? 'Fahrenheit' : 'Celcius';
  temp = parseInt(temp);
  if (!isNaN(temp)) {
    returnValue = scale === 'c' ? (1.8 * temp) + 32 : (5 / 9) * (temp - 32);

    // 3. Display the temperature in an h3 with minimal styling.
    h3.innerText = `Your temperature is ${returnValue} ${oppValue}!`;
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
  let valueArray = e.target.innerText.split(' ');
  scale = valueArray[valueArray.length - 1] === 'Celcius' ? 'C' : 'F';
  temp = valueArray[valueArray.length - 2];
  convertTemp(scale, temp);
});
