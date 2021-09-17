# password-generator
Building a password generator

* Changes made in html:

Added class 'result-container' to the 'textarea'.
Created 5 div as the prompts for password criteria, each div has label and input
This "settings" div is hidden when page is load; style display "none added to div "settings"
When click the button, the div with password criteria is shown.
User can select which criteria to include in the password. 
User can select each check box to include in chosen password; all or only few of criterias; they include:
    + Length input: set the range from min 8 to max 128 characters, add value at min 8 characters as default. User can increase or decrease the amount or can type in the amount of characters.
    + Uppercase letters  
    + Lowercase letters
    + Numbers 
    + Symbols(special characters).

All the criterias wrapped in div class 'settings'.
Add ID to each input (length, uppercase, lowercase, number, symbols).
After the selections are chosen, password is printed in the textarea placeholder when the button is clicked.
Add onlcick funtion showDiv to the button.

* Changes in CSS:
    + Enable hover to the generate button.
    + Add setting with display-flex 
    + Modify the width of number box , ID "length" is added into input tag

* Javasript: The comments are in the JS file 

* Second commit: add showDive in html, add function in Javascript.
* Third commit: Fix Readme file with text errors, double check the codes, added comments in JS document.
