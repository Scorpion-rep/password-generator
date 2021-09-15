// Assignment Code
// DOM Elements

const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('upperCase')
const lowercaseElement = document.getElementById('lowerCase')
const numberElement = document.getElementById('numbers')
const symbolElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const passwordElement = document.getElementById('password') 


// created object for the checkbox functions
const randomFunc = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNumber,
  symbol: randomSymbol
};

function myFunction() {
  alert("Please choose a password with at least 8 and no more than 128 characters");
}

const generateBtn = document.getElementById("generate")

 

//Generate EventListener 
generateElement.addEventListener('click', () => {
  const length = parseInt(lengthElement.value);
  const includeUpper = uppercaseElement.checked;
  const includeLower = lowercaseElement.checked;
  const includeNumber = numberElement.checked;
  const includeSymbol = symbolElement.checked;

  passwordElement.innerText = generatePassword(includeUpper, includeLower, includeNumber, includeSymbol, length);
});

//Generate Password function
function generatePassword(upper, lower, number, symbol, length) {
  
  let generatePassword = "";

  const typesCount = upper + lower + number + symbol;

  //console.log("typesCount: ", typesCount);
  // Filter out the unchecked types-return only the checked types
  const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter
  (item => Object.values(item) [0]);

  //console.log("typesArray: ", typesArray);

  if(typesCount === 0) {
    return "";  
  }
   //loop over the length generator function for each type
  for(let i = 0; i<length; i += typesCount) {
    typesArray.forEach(type => {
      FuncTitle = Object.keys(type)[0];

      //console.log("funcTitle ", FuncTitle);

      generatePassword += randomFunc[FuncTitle]();
    });

  }   // Initialize PW variable 
    //Final pw to add to pw var and return
    //Use slice to sync the PW length to the amount of characters chosen by user
    const password = (generatePassword.slice(0, length));

  return password;      
}

// Set up functions for password criteria
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function randomSymbol() {
  const symbols = "~!@#$%^&*(){}[]=<>/,."
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());


  
 
  




