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
<<<<<<< HEAD
=======

>>>>>>> b8b917f2c6110a1db320e2b62bcca80d14f954e9
