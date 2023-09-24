var characters = "";
var characterLength = "";
var password = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialKeys = "!@#$%^&*";

//generate prompts/alerts and password
function generatePassword(){
  
  characterLength = parseInt(prompt("Enter a number between 8 to 128 character for the length of your password"));
  
  if (isNaN(characterLength) || characterLength < 8  || characterLength > 128) {
    alert("Your password must be between 8 and 128 characters. Please try again")
    return;
  }
 
  //alert user to select their included preferences
  else {
     var upperCasePrompt =  confirm("Your password will contain upper case characters. Click cancel if you prefer it not to");
     var lowerCasePrompt =  confirm("Your password will contain lower case characters. Click cancel if you prefer it not to");
     var numbersPrompt =  confirm("Your password will contain numbers. Click cancel if you prefer it not to");
     var specialKeysPrompt =  confirm("Your password will contain special characters. Click cancel if you prefer it not to");
  
    if (!upperCasePrompt && !lowerCasePrompt && !numbersPrompt && !specialKeysPrompt) {
      alert("At least one character type must be selected!");
      return;
  }
  
  //generate characters based on user prompts
  characters = "";
  if (upperCasePrompt) characters += upperCase;
  if (lowerCasePrompt) characters += lowerCase;
  if (numbersPrompt) characters += numbers;
  if (specialKeysPrompt) characters += specialKeys;
}

//generate password depending on user inputs
password = "";
for (var i = 0; i < characterLength; i++) {
password += getRandomCharacter (characters);
}
return password;
}

//function to randomly select characters
function getRandomCharacter(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
 
// Write password to the #password input
function writePassword() {

  //generate new password based on preferences
  var password = generatePassword();

  //clear and reset preferences fields 
  var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
