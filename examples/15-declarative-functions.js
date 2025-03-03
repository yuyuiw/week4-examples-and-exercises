// Array of objects
const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent', 'Active', 'Instinctual', 'Faithful']
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful']
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Gentle']
    }
];

console.log("forEach function:");
// forEach function: Execute a callback function on elements in
// an array. For side effects only, does NOT return anything.
// BELOW: For each (dog) object in the array,
//        print the object.
dogs.forEach(dog => console.log(dog));
// Output:
// { id: 'dog-1', ...etc }
// { id: 'dog-2', ...etc }
// { id: 'dog-3', ...etc }


console.log('\nmap function:');
// map function: Create a NEW array by mapping each
// element from the original array based on a provided 
// callback function.
let result = dogs.map((dog) => dog.name);
console.log(result);
// -> ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']

console.log("\nfilter function:");
// filter function: Create a NEW array by
// including the elements that, when put through the
// callback function, return a truthy value. DOES NOT RETURN ANYTHING
result = dogs.filter(dog => dog.temperament.includes('Faithful'));
console.log("result is now:", result);

