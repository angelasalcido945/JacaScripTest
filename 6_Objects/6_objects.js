const student = {
    name: "Kayla",
    major: "computer engineering",

    schedule: {
        morning: "CS 2550",
        evening: "CS 3310",
    }
}

// detructred assignments 
const {name} = student;
console.log(name);

const {morning} = student.schedule;
console.log(morning);
