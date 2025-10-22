// function greet(name, callBack){
//     console.log(`Hello, ${name}`);
//     callBack(); //a call back function is a function that is passed to another func as a parameter
// }

// function bye(){
//     console.log("Bye bye!");   
// }

// greet("CS 2550", bye);  //call back function 

// assychronous 
// setTimeout(() => {
//     console.log("This message will show after 3 seconds");
// }, 3000);

function boilWater(callBack){
    console.log("Boiling water now...");
    
    setTimeout(() =>{
        console.log("water is boiled");
        callBack();
    }, 4000);
}

function cookPasta(){
    console.log("I am cooking my pasta");
}

boilWater(cookPasta);   //don't do cookPasta(), callBack where cookPasta is a parameter
console.log("Meanwhile, I am chooping some veggies");
