// Implicit return

const square3 = (num) => num ** 2;
console.log(square3(4));
// -> 16

// Parentheses are so the {} are not treated
// as a function body
const getBio = (artist) => ({
    name: artist,
    bio: 'Cool duo'
})
console.log(getBio('Twenty One Pilots'));
/*
 -> {
    name: 'Twenty One Pilots',
    bio: 'Cool duo'
}
*/

// Alternate syntax for one parameter
const square4 = num => num ** 2;
console.log(square4(5));
// -> 25