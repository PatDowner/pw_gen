# JavaScript Password Generator

This is an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by the JavaScript code in `script.js` giving the application a clean, polished, and mobilly responsive user interface.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

#Development Notes

####Functionality

When the generate password button is clicked:

* the user is prompted to select a password length (between 8 and 128 characters)

* the user chooses which character types they wish to include (upperCase, lowerCase, numbers, and/or special)

* based on the user's input, each character in the length of the password is assigned a character type

* the app makes sure that each character type requested by the user is used at least once and repeats previous step if necessary to meet this criteria

* for each character of the password, the app randomly selects a character of that type from an array of all possible characters of that type

* those selected characters are then strung together into the password and returned to the site

####Credit

The arrays `upperCase = []`, `lowerCase = []`, `numbers = []`, and `special = []` were shared with myself (and the rest of the class) from **Daniel Ayala**.

**Devin Castro** and I collaborated to figure out how to ensure that the resulting password has at least one character of each type requested. He helped me work out the kinks with with a few little syntax issues I needed to turn the conceptual approach in my head into reality.

####Links

* The URL of the deployed application: https://patdowner.github.io/pw_gen/

* The GitHub repository: https://github.com/PatDowner/pw_gen.git

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
