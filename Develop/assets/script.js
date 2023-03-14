// Initialize character arrays
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', ']', '}', '|', ':',
  ';', '"', ',', '<', '.', '>', '/', '?']


function generatePassword() {
  var characters = '';
  // prompt user for character length
  // set amount string to number
  var amount = parseInt(prompt("How many characters would you like in your password?"));
  
  // If amount is not a number, alert and return
  if (isNaN(amount)) {
    alert("The input is not a number. Try again.");
    return;
  }

  // if user's password length is too small or too large, 
  // send alert and start function again
  if (amount < 8 || amount > 128) {
    alert("The password length is inadequate. Try again.");
    return;
  } 

  // Prompt user for characters of choice for lowercase, uppercase, number, and special characters
  var lower = confirm("Would you like to use lowercase characters in your password?");

  // if "ok" is clicked, send chosen characters from array to a single string
  if (lower) {
    characters += lowerChar.toString();
    // if "cancel" is clicked, don't change anything
  } else {
    characters = characters;
  }

  var upper = confirm("Would you like to use uppercase characters in your password?");

  if (upper) {
    characters += upperChar.toString();
  } else {
    characters = characters;
  }

  var num = confirm("Would you like to use numerical characters in your password?");

  if (num) {
    characters += numberChar.toString();
  } else {
    characters = characters;
  }

  var special = confirm("Would you like to use special characters in your password?");

  if (special) {
    characters += specialChar.toString();
  } else {
    characters = characters;
  }

  // If nothing is selected, send alert and return
   if (!lower && !upper && !num && !special){
    alert("You must select something. Try again.");
    return;
  } 

  // Once the characters selected are added to empty string, split the "character" 
  // string by comma and join them so that there are no spaces
  var totalChar = characters.split(",").join("");
 
  var password = '';
  
  // Iterate through "character" string and randomly select characters within string
  // based on the character length the user wants
  for (let i = 0; i < amount; i++) {
    // Append random characters to password empty string
    password += totalChar[Math.floor(Math.random() * totalChar.length)];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

