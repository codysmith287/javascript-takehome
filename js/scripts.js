const script = document.querySelector("script");
const body = document.querySelector("body");

const clickMe = document.querySelector('#benjamin');
const pageTitle = document.querySelector('#title');
const pageParagraph = document.querySelector('#paragraph');

clickMe.addEventListener('click', function(ev) {
  let h1Title = prompt("Pick a title for the page.", "Hello World");
  pageTitle.textContent = `${h1Title}`;
  let pContent = prompt("Write a few setences about what you did today.", "I went to the park. I took a nap. I had a clam chowder bread bowl from Splash Cafe.");
  pageParagraph.textContent = `${pContent}`;
  let favColor = prompt("Pick your favorite color from the following list: red, orange, yellow, green, blue, indigio, violet.", "red");
  if(favColor === "red") {
    pageParagraph.className = "red-bg";
  } else if(favColor.toLowerCase() === "orange") {
    pageParagraph.className = "orange-bg";
  } else if(favColor.toLowerCase() === "yellow") {
    pageParagraph.className = "yellow-bg";
  } else if(favColor.toLowerCase() === "green") {
    pageParagraph.className = "green-bg";
  } else if(favColor.toLowerCase() === "blue") {
    pageParagraph.className = "blue-bg";
  } else if(favColor.toLowerCase() === "indigo") {
    pageParagraph.className = "indigo-bg";
  } else if(favColor.toLowerCase() === "violet") {
    pageParagraph.className = "violet-bg";
  }
   else {
    alert('You did not pick a color from the given list.')
  };
console.log(favColor);
});
