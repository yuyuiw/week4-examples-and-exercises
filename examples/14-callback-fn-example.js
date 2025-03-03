const prompt = require('prompt-sync')();

function greeting(name) {
    console.log("Hello " + name + "!");
}

function processUserInput(callbackFunction) {
    const name = prompt('Please enter your name: ');
    callbackFunction(name);
}

processUserInput(greeting);