const goodRappers = ['MF Doom', 'Zev Love X', 'King Geedorah'];
const goodPopArtists = ['Prince', 'TAFKAP', "His Royal Badness"];

// Usibng the spread
// to create a combined list of good rappers
// and pop artists
const goodArtists = [
    ...goodRappers,
    ...goodPopArtists
];
/* 
-> goodArtists: [
    'MF Doom',
    'Zev Love X',
    ...
    'TAFKAP',
    'His Royal Badness'
]
*/
console.log("goodArtists:", goodArtists);

// Say we have an object
const teacher = {
    teacherName: "Krishnan",
    age: 20, // comma here optional
};

// We can create a new object that's the
// same as the first, but with additional
// key-value pairs
const teacherBio = {
    ...teacher,
    description: "Best web dev teacher"
};
/* 
-> teacherBio: {
    teacherName: 'Krishnan',
    age: 20,
    description: 'Best web dev teacher'
}
*/
console.log("teacherBio:", teacherBio);

const meats = {
    steak: '1lb',
    chicken: '1lb'
};

const veggies = {
    choppedOnion: '1/2 cup',
    bellPepper: '1/2 sliced'
};

const spices = {
    chiliPowder: '1/2 teaspoon',
    garlicPowder: '1/2 teaspoon',
    driedOregano: '1 teaspoon'
};

// Combine our ingredients together
const fajitas = {
    ...meats,
    ...veggies,
    ...spices 
};
console.log("fajitas:", fajitas);

// Using spread operator to overwrite properties
const oldTask = {
    name: 'Watch Arcane',
    dueDate: '03-03-25',
    status: 'Incomplete',
    description: 'Because they told me to'
};

const newTask = {
    ...oldTask,
    dueDate: '03-05-25',
    status: 'In Progress'
};
console.log('newTask:', newTask);
/* 
-> newTask: {
    name: 'Watch Arcane',
    dueDate: '03-05-25',
    status: 'In Progress',
    description: 'Because they told me to
}
*/

