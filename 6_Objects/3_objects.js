const student = {
    // property
    fname : "Emily",
    // method
    traditional_funct(){
        console.log(this.fname);
    },

    studentInfo: function(){
        console.log(this.fname);
    },

    showInfo: () => {
        console.log(this.fname);
    }   //results to undefined bc of this.keyword
};

student.traditional_funct();
student.studentInfo();
student.showInfo();