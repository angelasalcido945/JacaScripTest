const student = {
    // property
    fname : "Emily",
    lname : "Ross",
    // method
    sayHi : () => { // arrow function
        console.log("Hi everyone");
        
    },

    sayGoodbye(){
        console.log("Bye bye");
        
    },

    studentInfo: function(){
        console.log(`${this.fname} ${this.lname}`); //have to use this.keyword to reference object
        
    }
};

student.sayHi();
student.studentInfo();