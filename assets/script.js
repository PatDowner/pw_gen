// upperCase[Math.floor(Math.random() * upperCase.length) // to choose a random via the length

// arrays.length
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
     // my steps here to generate password. By end, should have password generated which puts this generated password to be defined as var password under function writePassword()

     // Set empty array for password. Will later store each character to this array
     let pw = []

     // Creates a blank array to store list of desired character types in
     let type = []

     // possible characters for each class of characters
     let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
     let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
     let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
     let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']


     //Determine password length.
     let len = prompt(`Password length?
     (min: 8 characters, max: 128 characters)`)

     // Rejects invalid value with an error message.
     if (len >= 8 && len <= 128) {
          console.log(len)
     } else {
          return 'Error: Enter a password length between 8 and 128 characters.'
     }

     //Determine character type(s) to use in password, approved types stored in array type
     let uc = confirm(`Do you want to include any uppercase letters?
     ("OK" = "yes" and "cancel" = no)`)
     if (uc === true) {
          // if ok/yes, then add upperCase to the types array
          type.push('upperCase')
     }

     let lc = confirm(`Do you want to include any lowercase letters?
     ("OK" = "yes" and "cancel" = no)`)
     if (lc === true) {
          type.push('lowerCase')
     }


     let num = confirm(`Do you want to include any numbers?
     ("OK" = "yes" and "cancel" = no)`)
     if (num === true) {
          type.push('numbers')
     }


     let sp = confirm(`Do you want to include any special characters?
     ("OK" = "yes" and "cancel" = no)`)
     if (sp === true) {
          type.push('special')
     }

     // array of desired character types
     console.log(type)

     //randomly assigns a character type to each character of the password, stored in array pw
     for (let i = 0; i < len; i++) {
          pw.push(Math.floor(Math.random() * type.length))
     }

     console.log(pw)








}

// Write password to the #password input
function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

     passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
