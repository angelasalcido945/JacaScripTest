// ---- 1. when using + operator AND one operand is a string
// ---- JS will converts to a string ----
console.log("5" + 10);  // string then + so it auto converts the rest as a string
console.log(true + "10");   // true + "10" = "true" + "10" = "true10"
console.log(null + "$");    // null + "$" = "null" + "$" = "null$"

console.log("-------");

// ---- 2. JS converts a value to a number when ---
// ---- 2.a you use arthmetic operators (EXCEPT + operator) --
console.log("5" * 10);  // 50
console.log("5" / 10);  // "5" / 10 = 5 / 10 = 0.5
console.log("5" / "2"); // 2.5
console.log("0.5" ** 2);    // 0.25

console.log();

// ---- 2.b you can also use comparision operators (<, <=, >, >=, ==)
console.log("5" > 3);   //true
console.log(true < 10); //ture

/* Special case
true = 1
false = 0
undefined is NaN
null is 0
*/
let num1;   //undefined
console.log(num1 / 10); //undefined / 10 = NaN / 10 = NaN
console.log("ten" / 10);    // NaN / 10 = NaN

let num2 = null;
console.log(num2 / 5);  // null / 5 = 0 / 5 = 0

console.log(NaN ** 0);  // 1


// Question
let x = true;
let y = 10;
let z = "10";
console.log(x + y); // true + 10 = 1 + 10 = 11
console.log(x + z); // true + "10" = "true" + "10" = "true10"
console.log((y + z) - 10); // (10 + "10") - 10 = ("10" + "10") - 10 = ("1010") - 10 = 1010 - 10 = 1000
console.log(x + y + z); // true + 10 + "10" = 1 + 10 + "10" = 11 + "10" = "11" + "10" = "1110"

















   


