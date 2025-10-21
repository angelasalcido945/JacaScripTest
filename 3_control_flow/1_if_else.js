let saveingAmount = 20;
let expenses = 100;

const amIBroke = saveingAmount < expenses;

if(amIBroke){
    console.log("Watch out your expecnses!");
}else{
    console.log("You're good to go"); 
}

let grade = 70;

if(grade >= 90){
    console.log("A");
}else if(grade >= 80){
    console.log("B");
}else if(grade >= 70){
    console.log("C");
}else{
    console.log("You failed the class");
}
