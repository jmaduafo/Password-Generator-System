# Password Generator

## Description

This is a password generator that generates a random password for the user

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
User enters length of password, then enters the parameters and then the password gets rendered. If a parameter isn't adequate, 
then it gets a return

![alt text](Develop/assets/password-gen1.png)

![alt text](Develop/assets/password-gen2.png)

![alt text](Develop/assets/password-gen3.png)


## Credits

Developed by:

https://github.com/coding-boot-camp/friendly-parakeet
