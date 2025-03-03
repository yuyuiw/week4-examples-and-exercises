// Function (without parameters)
function helloWorld1() {
    console.log('Hello world');
}

const helloWorld2 = () => {
    console.log('Hello world!');
}

// Function (with parameters)
function helloPeople1(place1, place2) {
    // Template literal
    console.log(`Hello ${place1} and ${place2}!`);
}

const helloPeople2 = (place1, place2) => {
    console.log(`Hello ${place1} and ${place2}!`);
}

// Function (with parameter and return value)
function square1(x) {
    return x**2;
}

const square2 = (x) => {
    return x**2;
}

