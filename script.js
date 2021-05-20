// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var charUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charSpecial = [",","!","#","$","%","&","'","*","+","-",".","/",":",";","<",">","=","?","@"];
var includeNumbers = false;
var includeUppercase = false;
var includeLowercase = false;
var includeSpecialChar = false;
var charset = [];
var passwordArray =[];

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  var numberCheckbox = document.querySelector("#include-numbers");
  includeNumbers = numberCheckbox.checked;

  var uppercaseCheckbox = document.querySelector ("#include-uppercase")
  includeUppercase = uppercaseCheckbox.checked;

  var lowercaseCheckbox = document.querySelector ("#include-lowercase")
  includeLowercase = lowercaseCheckbox.checked;

  var specialcharCheckbox = document.querySelector ("#include-specialchar")
  includeSpecialChar = specialcharCheckbox.checked;

  console.log(numberCheckbox.checked);
  console.log(uppercaseCheckbox.checked);
  console.log(lowercaseCheckbox.checked);
  console.log(specialcharCheckbox.checked)

  var password = generatePassword();
  passwordText.value = password;

}

function includeOptions() {
  var formHtml = 
  `<input type='checkbox' id="include-numbers">
  <label>Include Numbers</label>

  <input type='checkbox' id="include-uppercase">
  <label>Include Uppercase</label>

  <input type='checkbox' id="include-lowercase">
  <label>Include Lowercase</label>
  <br>

  <input type='checkbox' id="include-specialchar">
  <label>Include Special Characters</label>`

  var options = document.querySelector(".card-footer");
  options.insertAdjacentHTML('beforebegin', formHtml);
}

includeOptions();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  if (includeNumbers) {
    charset = numbers.concat(charset);
  }

  if (includeUppercase) {
    charset = charUppercase.concat(charset);
  }

  if (includeLowercase) {
    charset = charLowercase.concat(charset);
  }

  if (includeSpecialChar) {
    charset = charSpecial.concat(charset);
  }



  if (includeNumbers || includeUppercase || includeLowercase || includeSpecialChar){
    return prompt("How long would you like your password to be?");
  }else{
    return alert("Please choose at least one of the options below.");}
  



  // for loop

}
