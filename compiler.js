/* The PSC compiler
* (Pseudo Code Script)
*-------------------------
* V0.0.1 By Nathan Gordon
*-------------------------
*©2017-2018 Nathan Gordon, Victor NY
*/

var customFile;
var keywordsFile;

var log = true;

window.onload = run;

function compileWithLangRules(rules, compileTarget)
{
    var index = 0;
    for(var custom_syntax of Object.keys(rules))
    {
        var regex = new RegExp("(\n| |^)" + custom_syntax, "g");
        compileTarget = compileTarget.replace(regex, rules[custom_syntax]);
    }
    return (compileTarget);
}

function getFileData(path, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState === 4)
        {
            callback(xhr.responseText);
        }
    }
}

function run()
{    
    getFileData("test.psc", function(data)
    {
        customFile = data;
        getFileData("keywords.json", function(data2)
        {
            keywordsFile = JSON.parse(data2);
            if(log)
            {
                console.log(compileWithLangRules(keywordsFile, customFile))
            }
            else
            {
                eval(compileWithLangRules(keywordsFile, customFile));
                start();
            }
        });
    });
}