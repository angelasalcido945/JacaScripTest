let number = 10;

console.log(`1. numbers = ${number}`);


function powerTwo(number){
    number **= 2;
    console.log(`Inside the function: number = ${number}`)
}

powerTwo(number);
console.log(`2. numbers = ${number}`);

// pass by reference 
const data = {"one": 1, tow: 2};
console.log(data);


function addNewItem(data){
    data["three"] = 3;
}

addNewItem(data);
console.log(data);
