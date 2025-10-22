const students = ['Susan', 'Emily', 'Jack'];

// for(let student of students){
//     console.log("This is my favorite student - " + student);
// }

students.forEach(student => {
    console.log("This is my favorite student - " + student);
});

// map() interator

const numbers = [2, 4, 6, 8];
const newNumbers = numbers.map(number => number * -1); //map() will return a new array so you need to assign it to a new variable
// console.log(newNumbers);

// filter()
const stuff = ['laptop', "claculator", 21, 3.14, -2, "javascript"];
const myNumbers = stuff.filter(thing => {
    return typeof thing === 'number';
});
console.log(myNumbers);

const myString = stuff.filter(word => word.length > 7);
console.log(myString);


