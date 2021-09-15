# password-generator
Building a password generator

Building a password generator
1) Modified html:
    - Page starts with an alert function when the page load,prompting user to choose the character amount.
    - Added class 'result-container' to the 'textarea'
    -Created 5 div as the prompts for password criteria, user can select which criteria to include in the password, 
    -User can select each check box to include in chosen password; all or only few of criterias; they include:
        a) length input: set the range from min 8 to max 128 characters, add value at 10 characters as default. User can increase or decrease the amont or can type in the amount of characters.
        b) uppercase letters  
        c) lowercase letters
        d) numbers 
        e) symbols(special characters).
    - All criterias wrapped in div class 'settings'.
-Add ID to each input

2)Changes in CSS:
    -Enable hover to the generate button.
    -Add setting-display-flex
    -Modify the box of length, class : length

    3) Javasript: comments are in the file 
