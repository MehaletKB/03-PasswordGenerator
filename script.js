// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersChar = ["1","2","3","4","5","6","7","8","9","0"];
var uppercaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolChar = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];

var includeNumbers = false;
var includeUppercase = false;
var includeLowercase = false;
var includeSymbol = false;



function includeOptions() {
  var formHtml = 
  `<input type='checkbox' id="include-numbers">
  <label>Include Numbers</label>
  <input type='checkbox' id="include-uppercase">
  <label>Include Uppercase</label>
  <input type='checkbox' id="include-lowercase">
  <label>Include Lowercase</label>
  <input type='checkbox' id="include-symbol">
  <label>Include Symbols</label>`
  
  var options = document.querySelector(".card-footer");
  options.insertAdjacentHTML('beforebegin', formHtml);
}
includeOptions();


function generatePassword(){
  var possibleChar = [];
  var randomIndex = [];
  
  var numberCheckbox = document.querySelector("#include-numbers");
  includeNumbers = numberCheckbox.checked;
  
  var uppercaseCheckbox = document.querySelector ("#include-uppercase")
  includeUppercase = uppercaseCheckbox.checked;
  
  var lowercaseCheckbox = document.querySelector ("#include-lowercase")
  includeLowercase = lowercaseCheckbox.checked;
  
  var symbolCheckbox = document.querySelector ("#include-symbol")
  includeSymbol = symbolCheckbox.checked;

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

  if(includeNumbers || includeUppercase || includeLowercase || includeSymbol){
    var howMany = parseInt(prompt("How many characters would you like?"));
  }else{
    alert("Please select at least one of the options below.");
    return;
  }
  
  if (howMany < 8 || howMany > 128 || isNaN(howMany)){
    alert("Please enter a number between 8 and 128");
    return;
  }else{
    var passwordLength = howMany;
  }

  for(i = 0; i < passwordLength; i++){
    var getChar = possibleChar[Math.floor(Math.random() * passwordLength)] ;
    randomIndex.push(getChar);
  }
   console.log(randomIndex)
  return randomIndex.join("");
}



function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
