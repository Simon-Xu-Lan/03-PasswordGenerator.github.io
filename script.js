// create four arrays for characters
var numeric = "0123456789";
var letter = "abcdefghijklmnopqrstuvwxyz";
var specialCharacter ="!@#$%^&*()_+";

var numericArr = numeric.split("");
var lowerArr = letter.split("");
var upperArr = letter.toUpperCase().split("");
var specialArr = specialCharacter.split("");

// declare elements
var pwdEl = document.querySelector("#password");
var generateBtnEl = document.querySelector("#generate");
var checkGroupObj = {
    lowercase: lowerArr, 
    uppercase: upperArr, 
    numeric: numericArr, 
    special: specialArr
};

// check if the input is a valid number and assign the length input to pwdLength variable.
var pwdLength
var sliderEl = document.querySelector("#pwdRange");
var outputEl = document.querySelector("#value");
outputEl.innerHTML = sliderEl.value;

sliderEl.oninput = function() {
    outputEl.innerHTML = this.value;
  }

generateBtnEl.addEventListener("click", generatePwd);

// Generate the password
function generatePwd(event) {
    event.preventDefault();
    var pwd = ""; //decare the pwd variable and reset its value.
    var check = 0;
    var newArr =[];
    for (item in checkGroupObj) {
        var element = document.getElementById(item);
        if (element.checked) {
            check++;
            newArr.push(checkGroupObj[item]);
        }
    }

    if (check === 0) {
        alert("Please choose at least one kind of characters");
    }
    
    //generate the password
    pwdLength = parseInt(sliderEl.value);
    for (i=0; i < pwdLength; i++) {
    var t = Math.floor(Math.random() * newArr.length);
    var j = Math.floor(Math.random() * newArr[t].length);
    pwd += newArr[t][j];
    }

    // write the password to the password textarea
    pwdEl.textContent = pwd;
}



