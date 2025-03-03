// Method 1: pop()
const goals = ['first', 'second', 'third'];
const removedVal = goals.pop();
console.log("goals =",goals)
console.log("removedVal =", removedVal)
// -> ['first', 'second']
//    third

// Method 2: shift()
const goals2 = ['first', 'second', 'third'];
goals2.shift();
console.log("goals2 =", goals2);
// -> ['second', 'third']

// Method 3: splice()
const nums = [1, 2, 3, 4, 5, 6];
// Starting at index 1, remove 3 elements
nums.splice(1, 3);
console.log(nums);
// -> [1, 5, 6]