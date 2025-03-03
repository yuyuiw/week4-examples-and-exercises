// find function: Returns value of the first element
// that satisfies the callback function condition.
const instructors = [{ name: 'Shreeya', cool: true},
    {name: 'Gavin', cool: true}];

result = instructors.find(instr => instr.cool);
console.log(result);
// -> [{ name: 'Shreeya', cool: true}]

// includes function: Returns true if an array includes 
// a certain value. Returns true or false.
const trueSentence = ['Declarative', 'functions', 'are', 'cool!'];
result = trueSentence.includes('cool!');
console.log(result);
// -> true