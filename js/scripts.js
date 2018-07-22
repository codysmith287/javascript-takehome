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

 // let myName = prompt('What is your name?'); // Edge casing can be used to check they put in a valid name.
 //   let favColor = prompt(`Ok ${myName}, so pick your favorite color from the following list and we'll tell you what the color is associated with. List of the colors to choose from: red, orange, yellow, green, blue, pink, purple, black, white, grey.`)
 //    if(favColor.toLowerCase() === "red") {
 //      alert(`Ok ${myName}, red is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.`);
 //    } else if(favColor.toLowerCase() === "orange") {
 //      alert(`Ok ${myName}, orange is associated with joy, sunshine, and the tropics.`)
 //    } else if(favColor.toLowerCase() === "yellow") {
 //      alert(`Ok ${myName}, yellow is associated with joy, happiness, intellect, and energy.`)
 //    } else if(favColor.toLowerCase() === "green") {
 //      alert(`Ok ${myName}, green is associated with growth, harmony, freshness, and fertility.`)
 //    } else if(favColor.toLowerCase() === "blue") {
 //      alert(`Ok ${myName}, blue is associated with depth, stability, tranquility, and calmness.`)
 //    } else if(favColor.toLowerCase() === "pink") {
 //      alert(`Ok ${myName}, pink is associated with romance, love, and friendship.`)
 //    } else if(favColor.toLowerCase() === "purple") {
 //      alert(`Ok ${myName}, purple is associated with wisdom, dignity, independence, creativity, mystery, and magic.`)
 //    } else if(favColor.toLowerCase() === "black") {
 //      alert(`Ok ${myName}, black is associated with power, elegance, formality, death, evil, and mystery.`)
 //    } else if(favColor.toLowerCase() === "white") {
 //      alert(`Ok ${myName}, white is associated with light, goodness, innocence, purity, and virginity.`)
 //    } else if(favColor.toLowerCase() === "grey") {
 //      alert(`Ok ${myName}, grey is associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated.`)
 //    } else {
 //      alert(`${myName}... You did not pick a color from the given list.`)
 //    };

 // Second Attempt

//  On a takehome-day4 branch of your JS repository, write a program that:

// 1. Creates an array of things you need or want to do this weekend by collecting three todos from the user.

 let toDos = [];
 let defaultAns = "The same thing we do every night, Pinky. Try to take over the world.";

 let firstToDo = [prompt("What would you like to do first?", `${defaultAns}`)];
 let secondToDo = [prompt("What would you like to do second?", `${defaultAns}`)];
 let thirdToDo = [prompt("What would you like to do third?", `${defaultAns}`)];

 toDos.push(firstToDo, secondToDo, thirdToDo);

 // 2. Using a for loop, change the items in the array by adding a value for how many days that item should take.
 // Hint: which data type is best suited for your todo items, based on what you will need to do to them?

 for (let i = 0; i < toDos.length; i++) {
   let expectedTime = prompt (`How many hours will it take to finish ${toDos[i][0]}? (Round to the nearest hour.)`, "1");

   parseInt(expectedTime);

   toDos[i].unshift(expectedTime);

 };

 // console.log(toDos, 'after time');

 toDos.sort();

 // console.log(toDos, 'after sort');

 // 3. Using a while loop, find the task that will take the longest and log it to the console.

 let longest = toDos[0];
 let counter = 0;
 while(counter < toDos.length) {
   if(toDos[counter][0] > longest[0]) longest = toDos[counter];
   counter++;
 };

 console.log(longest);

 longest.push("long");

 // 4. Using a do while loop, add the string 'easy-peasy' to all the tasks other than the one that will take the longest.

 let countTwo = 0;
 do {
   if(toDos[countTwo][toDos[countTwo].length - 1] !== "long") {
     toDos[countTwo].push("easy-peasy");
   }
   countTwo++;
 }
 while (countTwo < toDos.length);

 console.log(toDos);

 // 5. Finally, alert all the tasks that have 'easy-peasy' in the todo array.

let easyItems = [];

toDos.forEach(toDos => {
  if(toDos[toDos.length - 1] === "easy-peasy") easyItems.push(toDos);

});

alert(easyItems[0][1]);
alert(easyItems[1][1]);
