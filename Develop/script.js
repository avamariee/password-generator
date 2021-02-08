// Assignment code here
function generateTextForPassword(isLowercaseRequired, isUppercaseRequired, isNumericalRequired, isSpecialRequired, charCount) {
  var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericalCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharacters   = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var passwordText = "";

  return passwordText;


}

function generatePassword() {
  // prompt asking how many characters 8-128, confirm valid entry/validate input.
  var charCount=Number(prompt("How many characters? Please enter between 8-128."));
  
  if (charCount >= 8 && charCount <= 128){
   
  
   

    // prompt asking if they want lower case y/n
    var isLowercaseRequired = confirm("Include lower case characters?");
    // user answered yes/no, move onto the next prompt while saving user selection?
    // prompt asking if they want upper case y/n
    var isUppercaseRequired = confirm("Inlcude upper case characters?");
    // prompt asking if they want numerical numbers y/n
    var isNumericalRequired = confirm("Include numbers?");
    // prompt asking if they want special characters y/n
    var isSpecialRequired = confirm("Include special characters?");
    // take user input and print onto passwordText function ? 
  } else {
    confirm("Please enter a valid character range between 8-128.");
    return;
  }
  // input should be validated (at least one true) and at least one character type should be selected
  return generateTextForPassword(isLowercaseRequired, isUppercaseRequired, isNumericalRequired, isSpecialRequired, charCount);
  

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
