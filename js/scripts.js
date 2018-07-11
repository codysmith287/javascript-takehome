/* Takehome Day 2

let firstName = prompt("What is your first name?", "John");
let lastName = prompt("What is your last name?", "Smith");
console.log(firstName);
alert (lastName + " is a cool last name!");
let birthday = new Date(prompt("What is your birthday? (MM/DD/YYYY)"));

 if (confirm (firstName + " " + lastName + ", are you sure " + birthday + " is your correct birthday?")) {
    alert ("Hurray! " + birthday + " is a historic day in which an awesome person was born!");
 } else {
    alert ("Please reload the web page and enter the correct date when prompted.")
 };

 End of Takehome Day 2 */

 // Takehome Day 3

 let myName = prompt('What is your name?');
 let favColor = prompt(`Ok ${myName}, so pick your favorite color from the following list and we'll tell you what the color is associated with. List of the colors to choose from: red, orange, yellow, green, blue, pink, purple, black, white, grey.`)
  if(favColor.toLowerCase() === "red") {
    alert(`Ok ${myName}, red is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.`);
  } else if(favColor.toLowerCase() === "orange") {
    alert(`Ok ${myName}, orange is associated with joy, sunshine, and the tropics.`)
  } else if(favColor.toLowerCase() === "yellow") {
    alert(`Ok ${myName}, yellow is associated with joy, happiness, intellect, and energy.`)
  } else if(favColor.toLowerCase() === "green") {
    alert(`Ok ${myName}, green is associated with growth, harmony, freshness, and fertility.`)
  } else if(favColor.toLowerCase() === "blue") {
    alert(`Ok ${myName}, blue is associated with depth, stability, tranquility, and calmness.`)
  } else if(favColor.toLowerCase() === "pink") {
    alert(`Ok ${myName}, pink is associated with romance, love, and friendship.`)
  } else if(favColor.toLowerCase() === "purple") {
    alert(`Ok ${myName}, purple is associated with wisdom, dignity, independence, creativity, mystery, and magic.`)
  } else if(favColor.toLowerCase() === "black") {
    alert(`Ok ${myName}, black is associated with power, elegance, formality, death, evil, and mystery.`)
  } else if(favColor.toLowerCase() === "white") {
    alert(`Ok ${myName}, white is associated with light, goodness, innocence, purity, and virginity.`)
  } else if(favColor.toLowerCase() === "grey") {
    alert(`Ok ${myName}, grey is associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated.`)
  } else {
    alert(`${myName}... You did not pick a color from the given list.`)
  };
