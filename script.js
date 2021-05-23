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




// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  
  var numberCheckbox = document.querySelector("#include-numbers");
  includeNumbers = numberCheckbox.checked;
  
  var uppercaseCheckbox = document.querySelector ("#include-uppercase")
  includeUppercase = uppercaseCheckbox.checked;
  
  var lowercaseCheckbox = document.querySelector ("#include-lowercase")
  includeLowercase = lowercaseCheckbox.checked;
  
  var symbolCheckbox = document.querySelector ("#include-symbol")
  includeSymbol = symbolCheckbox.checked;
  
  // console.log(numberCheckbox.checked);
  // console.log(uppercaseCheckbox.checked);
  // console.log(lowercaseCheckbox.checked);
  // console.log(symbolCheckbox.checked)
  
  var password = generatePassword();
  passwordText.value = password;
}


function includeOptions() {
  var formHtml = 
  `<input type='checkbox' id="include-numbers">
  <label>Include Numbers</label>
  <input type='checkbox' id="include-uppercase">
  <label>Include Uppercase</label>
  <br/>
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
  var password = "";

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

  console.log(possibleChar);

  if(includeNumbers || includeUppercase || includeLowercase || includeSymbol){
    var howMany = prompt("How many characters would you like?");
  }else{
    alert("Please select at least one of the options below.");
    return;
  }
  
  if (howMany < 8 || howMany > 128 || isNaN(howMany)){
    alert("Please enter a number between 8 and 128")
  }else{
    alert("Please choose at least one of the")
  }
  
  
  // return password
  
  
}


generateBtn.addEventListener("click", writePassword);










// if(includeNumbers || includeUppercase || includeLowercase || includeSymbol){
//   var howMany = prompt("How many characters would you like?");
//   howMany = passwordLength;
// }



// function getRandomNumber(){
  //   return numbersChar [Math.floor(Math.random() * numbersChar.length)];


// function getRandomUppercase(){
  //   return uppercaseChar [Math.floor(Math.random() * uppercaseChar.length)];
  // }

// function getRandomLowercase(){
//   return lowercaseChar [Math.floor(Math.random() * lowercaseChar.length)];
// }

// function getRandomSymbol(){
//   return symbolChar [Math.floor(Math.random() * symbolChar.length)]
