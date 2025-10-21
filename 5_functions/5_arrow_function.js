// const total = function (num1, num2){    
//     return num1 + num2;                 
// }

const sum = (num1, num2) =>{
    return num1 + num2;
}

console.log(sum(20, 22));

/*

arror function 
const variabelName = (para1, para2){
    ......
}
1. zero parameter
const funcName = () => {.....}   have to have parenthesis ifno para

2. one parameter
conse funcName = (para) => {.....} OR
const funcName = para => {......}

3. two or more para
const funcName = (para1, para2, para3) => {.....}

4. single line block: do NOT need {} and NO return keyword
const sum = (num1, num2) => num1 + num2;

5. multiple line blocks: does need the return keyword 
const powerThree = num =>{
    if(typeOf num === "number"){
        num = num * num;
    }
    return num * num
    }
*/

function isChristmas(){
    const today = new Date();
    return today.getMonth() === 12 && today.getData() === 25;
}

//same function as the one above but as an arror function 
const isChristmas2 = () => {
     const today = new Date();
    return today.getMonth() === 12 && today.getData() === 25;
}
console.log(isChristmas2());
