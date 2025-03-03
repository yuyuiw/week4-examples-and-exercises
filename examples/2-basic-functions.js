// Function declaration
function mult3(a, b, c) {
    return a * b * c;
}

// Calling mult3
console.log("mult3(2, 3, 4):", mult3(2, 3, 4));

function addTwo(a, b) {
    return a + b;
}
console.log("addTwo(2, 1):", addTwo(2, 1));
console.log("addTwo('a', 'bc'):", addTwo('a', 'bc'));


// IF YOU DON'T UNDERSTAND ARROW FUNCTIONS YET DON'T WORRY
// This is functionally the same as mult3 function from earlier
let mult3Arrow = (a, b, c) => a * b * c;