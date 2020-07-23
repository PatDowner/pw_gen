// upperCase[Math.floor(Math.random() * upperCase.length) // to choose a random via the length

// arrays.length
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
     // Creates a blank array to store list of desired character types in
     let type = []

     //  Creates a blank array to store the types of character for each character in the password
     let pwType = []

     // Set empty array for password. Will later store each character to this array
     let pw = []

     // possible characters for each class of characters
     let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
     let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
     let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
     let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

     //Set empty variable for final password
     let pwGen = ''

     //Determine password length.
     let len = prompt(`Password length?
     (min: 8 characters, max: 128 characters)`)

     // Rejects invalid password length value with an error message.
     if (!(len >= 8 && len <= 128)) {
          return 'Error: Enter a password length between 8 and 128 characters.'
     }

     //Determine character type(s) to use in password, approved types stored in array type
     let uc = confirm(`Do you want to include any uppercase letters?
     ("OK" = "yes" and "cancel" = no)`)
     if (uc) {
          // if ok/yes, then add upperCase to the types array
          type.push('upperCase')
     }

     let lc = confirm(`Do you want to include any lowercase letters?
     ("OK" = "yes" and "cancel" = no)`)
     if (lc) {
          // if ok/yes, then add lowerCase to the types array
          type.push('lowerCase')
     }

     let num = confirm(`Do you want to include any numbers?
     ("OK" = "yes" and "cancel" = no)`)
     if (num) {
          // if ok/yes, then add numbers to the types array
          type.push('numbers')
     }

     let sp = confirm(`Do you want to include any special characters?
     ("OK" = "yes" and "cancel" = no)`)
     if (sp) {
          // if ok/yes, then add special to the types array
          type.push('special')
     }


     // Rejects if no character types selected
     if (type.length === 0) {
          return 'Error: Please select at least one character type.'
     }

     //randomly assigns a character type to each character of the password, stored in array pwType
     for (let i = 0; i < len; i++) {
          let charType = (Math.floor(Math.random() * type.length))
          pwType.push(type[charType])
     }


     //check if password will have at least one of each type of requested character before moving forward
     for (let i = 0; i < type.length; i++) {
          if (pwType.includes(type[i])) {
               //if it will have at least one of each type of requested character...

               // randomly assigns value to a character of password (stored in array pw) based on character type in pwType
               for (let i = 0; i < len; i++) {

                    if (pwType[i] === 'upperCase') {
                         let ucNum = Math.floor(Math.random() * upperCase.length)
                         pw.push(upperCase[ucNum])
                    } else if (pwType[i] === 'lowerCase') {
                         let lcNum = Math.floor(Math.random() * lowerCase.length)
                         pw.push(lowerCase[lcNum])
                    } else if (pwType[i] === 'numbers') {
                         let numNum = Math.floor(Math.random() * numbers.length)
                         pw.push(numbers[numNum])
                    } else if (pwType[i] === 'special') {
                         let spNum = Math.floor(Math.random() * special.length)
                         pw.push(special[spNum])
                    }
               }

               // Concatenate other characters of pw
               for (let i = 0; i < len; i++) {
                    pwGen = pwGen + pw[i]
               }

               //console.logs just for checking functionality
               console.log('it worked')
               console.log(type)
               console.log(pwType)
               console.log(pw)

               //send generated password back to page
               return pwGen

          } else {
               // repeat assigning character type to each character of the password
               console.log('try again') // just there to track how many times it has to try again
               pwType = []
               //randomly assigns a character type to each character of the password, stored in array pwType
               for (let i = 0; i < len; i++) {
                    let charType = (Math.floor(Math.random() * type.length))
                    pwType.push(type[charType])
               }
          }
     }


}

// Write password to the #password input
function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

     passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
