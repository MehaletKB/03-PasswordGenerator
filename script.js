// Assign variable to generate id
var generateBtn = document.querySelector("#generate");


// Assignment characters to variables
var numbersChar = ["1","2","3","4","5","6","7","8","9","0"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolChar = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];


// Insert template string of options into HTML 
function includeOptions() {
  var optionsHTML = 
  `<input type="checkbox" id="include-numbers">
  <label>Include Numbers</label>
  <input type="checkbox" id="include-uppercase">
  <label>Include Uppercase</label>
  <input type="checkbox" id="include-lowercase">
  <label>Include Lowercase</label>
  <input type="checkbox" id="include-symbol">
  <label>Include Symbols</label>`
  
  var options = document.querySelector(".card-footer");
  options.insertAdjacentHTML('beforebegin', optionsHTML);
}
includeOptions();


function generatePassword(){
  // Set empty arrays to push values into
  var possibleChar = [];
  var randomIndex = [];
  
  // Assign state to variables assigned to ids
  var numberCheckbox = document.querySelector("#include-numbers");
  includeNumbers = numberCheckbox.checked;
  
  var uppercaseCheckbox = document.querySelector ("#include-uppercase")
  includeUppercase = uppercaseCheckbox.checked;
  
  var lowercaseCheckbox = document.querySelector ("#include-lowercase")
  includeLowercase = lowercaseCheckbox.checked;
  
  var symbolCheckbox = document.querySelector ("#include-symbol")
  includeSymbol = symbolCheckbox.checked;
  
  // Push values of chosen array/from checked boxes into array of possible characters
  if(includeNumbers){
    possibleChar.push(...numbersChar);
  }
  if(includeUppercase){
    possibleChar.push(...uppercaseChar);
  }
  if(includeLowercase){
    possibleChar.push(...lowercaseChar);
  }
  if(includeSymbol){
    possibleChar.push(...symbolChar);
  }
  
  // Set user input parameters, determine password length based on user input
  if(includeNumbers || includeUppercase || includeLowercase || includeSymbol){
    var howMany = parseInt(prompt("How many characters would you like?"));
  }else{
    alert("Please select one or more of the option(s) below.");
    return (null);
  }
  if (howMany < 8 || howMany > 128 || isNaN(howMany)){
    alert("Please enter a number between 8 and 128");
  }else{
    var passwordLength = howMany;
  }
  
  // Randomly select characters from possible characters array based on user input
  for(i = 0; i < passwordLength; i++){
    var getChar = possibleChar[Math.floor(Math.random() * possibleChar.length)] ;
    randomIndex.push(getChar);
  }
  
  // console.log(randomIndex);
  return randomIndex.join("");
}


// Set password text based on generatePassword function
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
