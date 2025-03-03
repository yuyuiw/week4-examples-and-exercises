function doubleImperative(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 2);
    }
    return results;
}

function doubleDeclarative(arr) {
    return arr.map(item => item * 2);
}

console.log("doubleImperative([1, 2, 3]):", doubleImperative([1, 2, 3]));
console.log("doubleDeclarative([1, 2, 3]):", doubleDeclarative([1, 2, 3]));