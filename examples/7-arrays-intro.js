// new empty array
const stuff = [];

// new array with items
const goals = ['become the best web dev on earth', 'have fun'];

// make an array with a given initial length
const longgggArray = new Array(9000);

/*
    Adding elements to arrays
*/

// Method 1: push function
const myGoals = ['first', 'second'];
myGoals.push('third', 'fourth');
console.log("myGoals:", myGoals);
// -> ['first', 'second', 'third', 'fourth']

// Method 2: Spread operator
const goals1 = ['survive', 'hydrate'];
const goals2 = ['have fun'];
const ultraMegaGoals = [...goals1, 'EAT', ...goals2];
console.log("ultraMegaGoals:", ultraMegaGoals);
// -> ['survive', 'hydrate', 'EAT', 'have fun']

let lunch = 'nacho';
lunch = [...lunch, 'sammy', 'chimken'];
console.log("lunch:", lunch);
// -> ['nacho', 'sammy', 'chimken']