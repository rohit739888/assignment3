// user age
age = prompt("Please enter age:");

// Convert the user input to a number
age = parseInt(age);

if (!isNaN(age)) { // Check if age is a valid number
  if (age >= 18) {
    alert("You are adult.");
  } else {
    alert("You are a minor.");
  }
} else {
  alert("Invalid input. Please enter a valid age.");
}
// <------------assingment------------->

// Define the correct username and password
 correctUsername = "myusername";
 correctPassword = "mypassword";

// Ask the user for their username
 username = prompt("Please enter your username:");

// Ask the user for their password
 password = prompt("Please enter your password:");

// Check if the entered username and password are correct
if (username === correctUsername && password === correctPassword) {
  alert("Login successful.");
} else {
  alert("Login failed.");
}
//<------------assignment2--------------->

// Generate a random number between 1 and 100
randomNumber = Math.floor(Math.random() * 100) + 1;

// Check if the random number is even or odd
if (randomNumber % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
// <--------------assignment3--------------->
// Ask the user for their favorite color
var favoriteColor = prompt("What is your favorite color?");

// Check if the user's favorite color is red
if (favoriteColor.toLowerCase() === "red") {
  alert("Red is a beautiful color.");
} else {
  alert("I like your choice of color.");
}
//<--------------------assignment4---------->

// Ask the user for their school grade
var grade = prompt("What is your grade in school?");

// Check if the user's grade is 'A' (assuming case-insensitive comparison)
if (grade && grade.toUpperCase() === 'A') {
  alert("Congratulations on your excellent work!");
} else {
  alert("Keep working hard!");
}
