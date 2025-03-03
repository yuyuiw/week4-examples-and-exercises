let a;
console.log("1) typeof a is",typeof a)
a = "hello world";
console.log("2) typeof a is",typeof a)
a = 42; 
console.log("3) typeof a is",typeof a)
a = true; 
console.log("4) typeof a is",typeof a)
a = null; 
console.log("5) typeof a is",typeof a)
a = undefined; 
console.log("6) typeof a is",typeof a)
a = { b: "c" }; 
console.log("7) typeof a is",typeof a)
a = [ "b", "c" ]; 
console.log("8) typeof a is",typeof a)

// Strings, Template literals
const person = '[FUNNIEST COMEDIAN]';
const jobTitle = 'comedian';

// Template literals use backticks ``.
// They allow you to use ${ } syntax to
// insert a variable or expression.
// They're like f-strings in Python!
const trueFact = `${person} is the funniest ${jobTitle} alive`;
console.log(trueFact);
// -> [FUNNIEST COMEDIAN] is the funnniest comedian alive

// UNDEFINED VS NULL
let x;
let y = null;

console.log("x is", x, "while y is", y)
// > x is undefined while y is null