// const numbers = [2, 3, 4, 5, 6]

// // 1 add items to the end of the array using push()
// console.log(numbers);
// numbers.push(10);   //adding a single item to the array
// console.log(numbers);
// numbers.push(11, 12);   //adding items to the array
// console.log(numbers);

// // 2 add itmes to the beginning of the array using unshift()
// numbers.unshift(-1, 0);
// // console.log(numbers);

// //3. add items @ the middle of the array using splice()
// //numbers.splice(startIndex, numberItemtoDelete, ItemToAdd, AnotherItemToAdd)
// numbers.splice(3, 0, -10, -20);
// // console.log(numbers);

// //4. slice(startIndex, endIndex) the endIndex is not inclusive so add one to the index you want to end at
// // console.log(numbers.slice(2, 6));

// const anotherNumbers = numbers.slice();
// console.log(numbers);
// console.log(anotherNumbers);

// anotherNumbers.push(99);
// console.log(numbers);
// console.log(anotherNumbers);

const arr1 = [[1], [2]];
const arr2 = arr1.slice();  //shallow copy
console.log(arr1);
console.log(arr2);

arr2[0].push(100);  //we pushed to arr2 but because 2 is a shallow copy of arr1 
console.log(arr1);  //arr1 also pushed 100
console.log(arr2);


