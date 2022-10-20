//////////////////////////////////////////
/// Practical Exercise 3
//////////////////////////////////////////
//function
let userName = prompt("Enter your name:")//pop up box for name
function GetUserName (name) {
    return name;
}
function userNameColor(userNmae) {
    userName.style.color = "purple";
}
let currentUserName = GetUserName(userName)
console.log(currentUserName);

//objects
let myBook = {
    title: 'The Hnadmaids Tale',
    author: 'Margaret Atwood',
    publishedYear: '1985',
    seriesDetails: {
         seriesType: 'Dystopian historical fiction',
        universeName: 'Gilead',
        numberInSeries: 1
    },
    readSeries: true,
 
rating: function(rating) {
    return `${rating}/5`;
}
}
console.log(myBook.title + ' by ' + myBook ['author']);
console.log("Released in " + myBook.publishedYear)
console.log("I rate it " + myBook.rating(5))
const title = document.getElementById("mainTitle");
// After adding this, open the console and type 'title'
// so the students can see what this looks like for js
const changeTitleButton = document.getElementById("changeTitleBtn");
changeTitleButton.style.width = "100px";
changeTitleButton.style.fontSize = "20px";
changeTitleButton.style.color = "blue";
changeTitleButton.style.background = "lightcyan";
changeTitleButton.style.borderColor = "blue";
changeTitleButton.style.borderRadius = "20px";
// Center everything in our body;
document.body.style.textAlign = "center";
title.style.color = "red";

// Event Listener function
changeTitleButton.addEventListener("click", function (event) {
  console.log("Click Detected");
//   // innerHTML vs innerText = innerHTML understand tags.
//   // it takes whats in it as HTML code, if this was innerText
//   // <br> would appear as text
  title.innerHTML = "Heya my name is Nasya <br> Dance is liffeee!";
  title.style.fontFamily = "Courier New";
  title.style.backgroundColor = "lightsteelblue";
  title.style.padding = "30px";
  title.style.border = "5px dotted coral";
  title.style.borderRadius = "20px";
});

// Function for Event Attribute
function ChangeBackgroundColour() {
  // run on mouse
  title.style.backgroundColor = "hotpink";
}

function RemoveBackgroundColour() {
  title.style.backgroundColor = "transparent";
}

