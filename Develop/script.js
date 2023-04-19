// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passLength = parseInt(window.prompt ("desired password length (must be between 8-128 characters)"))
  console.log (passLength)
  if (passLength<8 || passLength>128 || isNaN (passLength)){
    alert ("Please Enter a Length Between 8 and 128")
    return "Please Try Again"
  }
  
  var totalString = ""
 if (confirm("Would you like lowercase letters ?")){
  // Add lower array to total
  totalString += "abcdefghijklmnopqrstuvwxyz"
 }
 
 if (confirm("Would you like Uppercase letters ?")){
  // Add lower array to total
  totalString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 }

 if (confirm("Would you like numbers ?")){
  // Add lower array to total
  totalString += "0123456789"
 }

 if (confirm("Would you like special characters ?")){
  // Add lower array to total
  totalString += "!@#$%^&*()"
 }
 if (totalString.length === 0){
  alert ("Please choose at least one character type")
  return "Please Try Again"
 } 
 var passString = ""

 for (var i=0; i<passLength; i++) {
  var randomIndex = Math.floor (Math.random ()* totalString.length)
  var character = totalString.charAt(randomIndex)
  passString += character
 }
  // Return a value of xlength that represents our password
  return passString
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//When you click the button generate a random password




