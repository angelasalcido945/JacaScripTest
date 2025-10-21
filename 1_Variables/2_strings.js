let text1 = "Cal Poly Pomona";
console.log(`My school: ${text1}`);
console.log(text1[0]); //prints out the first letter

// const text1Size = text1.length;
// console.log(text1[text1Size - 1]);

console.log(text1[text1.length - 1]); // IN ONE LINE

console.log(text1.slice(1));    //starts from index 1 
console.log(text1.slice(0));    //will just start at the beginning at index 0

console.log(text1.substring(4, 8)); //(starting index (included), ending index (excluded so + 1))

console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

let course = "javASCRipt";
let courseNameFormatted = course[0].toUpperCase() + course.slice(1).toLowerCase();
console.log(courseNameFormatted);






