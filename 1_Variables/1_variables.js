// one line comment 

/*
here is multiple-line comments
another comment here
*/ 

// 1 --------- VAR ----------
var oddNumber = 11;
console.log(oddNumber);

var evenNumber;
console.log(evenNumber);
evenNumber = 20;
console.log(evenNumber);

var specialVariable = null;
console.log(specialVariable);

//do not recommend 
// var num1 = 100, num2 = 101, num3 = 103;
var num1 = 100;
var num2 = 101;
var num3 = 102;

// variable redeclaration 
var number = 1000;
console.log(number);
var number = 1001;
console.log(number);

// variable reassignment 
var myNumber = 9;
myNumber = 19;


// ------- 2. LET ---------
let firstName = 'Bronco'; // cannot redeclare firstName but you can reassign
// firstName = 'cpp';
let lastName = "CPP";
let anotherFullName = `Full name is ` + firstName + " " + lastName;
console.log(anotherFullName);


let fullName = `Full name is ${firstName} ${lastName}`; // string literal
console.log(fullName);

let magicNumber; // = 13; (on one line)
magicNumber = 13;

// ------ 3. CONST ------
const PI_NUMBER = 3.24; //must declare on the some line for const and will not be changed
PI_NUMBER = 3.1456;     //TYPE ERROR!can't reassign
console.log(PI_NUMBER);
