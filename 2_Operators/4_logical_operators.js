/**
 * OR: ||
 * AND: &&
 * Not: !
 * nullish coaslescing operator: ?
 */

console.log(true || true || false); //true - short cricuit evaluation
console.log(true || true); //true 
console.log(true || false); //true
console.log(false || false);    //false
console.log(false || true); //true

console.log(true && true);  //true
console.log(true && false); //false
console.log(false && false);    //false - short cricuit evaluation
console.log(false && true); //false - short cricuit evaluation

const age = 16;
const passDMVExam = true; 
const getDriverLisence = age >= 16 && passDMVExam;
console.log(getDriverLisence);

console.log(!getDriverLisence);

//nullish coalescing operator: ?
// provide a default value if the operand before ?? is false
//return the right hand side value if the left-hand value is null or undefined

let user = null; //undefined : let user; //would not work if you did let user = `Angela`;
const userName = user ?? `default user`;
const dummyUsername = (user !== null && user !== undefined) ? user : `default user`;
console.log(`username: ${userName}`);










