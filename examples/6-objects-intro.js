// Objects are MUTABLE
const gavin = {
    name: "Gavin",
    age: 20
}

gavin.age = 21;

console.log(gavin);

// Object with one key-value pair
const umdStudent = {
    helluvanEngineer: true
};

// Adding key-value pairs 
umdStudent.hoursOfSleep = 0;
umdStudent["sanity-level"] = "Nonexistent";

console.log("\n" + umdStudent);
