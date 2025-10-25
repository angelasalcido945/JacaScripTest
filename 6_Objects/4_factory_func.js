// const student = {
//     // property
//     fname : "Emily",
//     lname : "Ross"
// };

// const anotherStudewnt = {
//     //property
//     fname : "Rachel",
//     lname : "Williams"
// };

// factory function 
function createStudentInfo(fname, lname){
    return{
        fname: fname, //can remove the 2nd fname/lname and it'll still work if they're same
        lname: lname,

        showInfo: function(){
            return `${this.fname}. ${this.lname}`
        }
    };
}

const studetn1 = createStudentInfo("Emily", "Ross");
console.log(studetn1);
console.log(studetn1.showInfo());


const student2 = createStudentInfo("Rachel", "Williams");
console.log(student2);
