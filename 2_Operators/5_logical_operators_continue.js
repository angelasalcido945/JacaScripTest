/**
 * falsey values in JS
 * - false, 0, "", '', ``, null, undefined, NaN
 */
// || operator return the first truthy value 
console.log(false || "Bronco" || "CPP"); //bronco (will print out only the first truthy value)
console.log(false || 11 || 12); //11

// && operators return the first falsy value 
// if all values are truthy then return the last truthy value
console.log("Cal Poly Poly" && 0);  //0
console.log(1 && "CPP" && -10); //-10 (all values are truthy so returns -10)

// ! not
console.log(!("Bronco"));   //false cause Bronco is a truthy but its ! so it returns false


