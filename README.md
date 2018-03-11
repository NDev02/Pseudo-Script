# Pseudo-Script
A new programming language for the web that is simple to use, read, and write.

# How To Use
1. Link the compiler.js file to your web page
2. Inside compiler.js: on line 43 replace "test.psc" with the path to your PSC (Pseudo-Script-Code) file
3. Make sure log = false on line 12 other wise your code will not run, rather the translated version will appear in the console

# How to Use VSCode Syntax Highlighting
1. Close out of VSCode
2. Download pseudo-script-vscode.zip
3. Extract the zip into C:\Users\USERNAME\.vscode\extensions
4. Restart VSCode, now when you have open any files with an extension of ".psc", ".pseudo", ".pseudoscript", ".ps", ".pseudocode", ".pcode", or ".pscode" Visual Studio Code will automatically recognize the file and use the syntax highlighting rules I have put into the pseudo-code-script.zip extension files.

# About
I built Pseudo Script fairly simply through the use of JavaScript and JavaScript's useful built in RegEx and eval() functions. When I started this project my end goal was to create a easier to Read and Write version of JSON that would be more interactive and have more functionality. However as I started that project I realized that what I was doing could be used to create a new programming language. So I started going through the steps listed below:

## First
I reasearched the easiest ways to lookup character paterns in strings then replace them with other characters.\
From here I learned about Regular Expressions or RegEx, as most programmers call it. RegEx is a useful way of quickly searching for and modifying characters in strings just based on simple syntax patterns like /a/g which would find all occurences of the "a" in a string.
* This, paired with the replace() function, is able to search through all parts of a string for sequences that would be translated to others to be syntactically correct in JavaScript. 
* For Example: lets say I have a string like "say 'hello'", I could use RegEx to target the sequence "say" with "say(" and then replace "'hello'" with "'hello');" so that it would now be a valid function call in JavaScript.

## Next
Now that I was able to go through the lines of custom Pseudo Code Script and replace predefined sequences with it's JavaScript target equivalent I was able to pass in the translated string of what was now JavaScript into some function that would run the code. The only problem was that I was not aware of the JavaScript eval() function.\
After Lots of research I finnaly came across [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)
* After discovering the eval() function I was amazed. JavaScript is one of the only programming language with something like this built-in and honestly it is FANTASTIC. People can say what they want about JavaScript being insecure and all but ya know what... At least it has a built-in eval() function.
* By using the eval() function all I had to do after translating the code was pass it into the eval function so now what started as "say 'hello'" could be translated to "say('hello');" and then be run and 'hello' would now appear in the console. **SUCCESS!**

## Wrap-Up
To finish I made things a bit easier on myself by enabling the search of sequences to replace by using JavaScript. (This is demonstrated in the 'keywords.json' file). I set this up so that I would first pass in the sequence to find as the key and the sequence to be used instead as the value to the key.\
* For Example: "start program by:" : "function start()" will find the phrase "start program by:" and replace all of it's occurences with "function start()".\
All-in-all I wraped up the compiler in just 60 lines of code (including code for the file openers and readers).
