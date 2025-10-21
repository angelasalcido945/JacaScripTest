//1. function declaration
function saySomething(name="CSS"){  //="CSS" is a defualt value for when you print out
    // return "I love JavaScript"   // saySometh()
    return `I love ${name}`;
}
console.log(saySomething("HTML"));
console.log(saySomething());

// 2. function expression
const total = function (num1, num2){    //remove calculate since you don't need it
    return num1 + num2;                 //you don't call it, you call
}
console.log(total(10, 40));
// const total = function calculate(num1, num2){
//     return num1 + num2;
// }
// console.log(total(10, 40));