// 1. string 
let fname = 'Bronco';
let lname = "CPP";
let fullName = `${fname} ${lname}`; //string literal
console.log(typeof fname);


// 2. number
let evenNumber = 10;
let pi = 3.14;
console.log(typeof pi);


// 3. boolean
let hasTicket = true;
let passExam = false;
console.log(typeof passExam);


// 4. undefined 
let index;  
console.log(typeof index);


// 5. null
let idx = null;
console.log(typeof idx);

// 6. symbol
const secretKey = Symbol();

// ------- Object -------
let userCustomizedChoice = "customized username"
let cppCourse = {
    name: 'CS 2250', // No need for double qutoes, javascript will do it for you
    'hours': 3,
    semester: 2025,
    'school name': "Cal Poly Pomona",   // Need single quote since there's a space in school name
    [userCustomizedChoice]: "User name",
}
// access objects keys value
console.log(cppCourse.name);    // dot notation or
console.log(cppCourse['hours']);  //can be done with brackets
console.log(cppCourse["school name"]);
console.log(cppCourse[userCustomizedChoice]);

//modigy the keys value
cppCourse.name = 'Web Development';
cppCourse["school name"] = "CPP";
console.log(cppCourse);

// adding new key-value pair
cppCourse['location'] = "Pomona, CA";
cppCourse['Location'] = "CA, USA";
console.log(cppCourse);

// delete a key-value pair
delete cppCourse['Location'];
console.log(cppCourse);






