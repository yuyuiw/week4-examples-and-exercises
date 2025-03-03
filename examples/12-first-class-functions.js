// Object with a function as a value 
// in a key-value pair
const sheep = {
    wool: 'white',
    makeSound: () => {
        console.log('baaa!');
    }
};

sheep.makeSound();
// -> 'baaa!';

const why = [{
    thisIsCrazy: () => () => {
        console.log(`array with one object with a 
            function called thisIsCrazy that returns
            another function that prints out this message
            and returns undefined/nothing`)
    }
}]

why[0].thisIsCrazy()();
// -> 'array with one object with...'

