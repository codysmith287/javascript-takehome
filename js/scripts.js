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
