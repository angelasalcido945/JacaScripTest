const student = {
    fname : "Emily",
    lname : "Ross",
};

console.log(student);
student.fname = "Rachel";
student.age = "21"; //adding a new property to the object and making its value 21
console.log(student); // this won't be an error because it modifiying the properity of the object const variable student

// will throw an exception bc it's reassigning the const variable 
// student = {fname : "Bronco", lname : "CPP"};
// console.log(student);


// const number = 10;
// console.log(number);
// number = 100;
// console.log(number);

