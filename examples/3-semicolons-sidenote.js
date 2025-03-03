/*
    4-semicolons-sidenote.js

    Shows how sometimes not using semicolons can go wrong
    in JavaScript
*/

function f1() {
    /*
    You would expect this to turn into
        return
        3;
    but it actually results in
        return;
        3;
    */
    return
    3
}

console.log("f1() returns " + f1());