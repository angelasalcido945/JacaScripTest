let course = "CS 2500";

if (course.toLowerCase() === 'cs 2500'){
    console.log("Web development");
}else if(course.toLowerCase() === 'cs 4800'){
    console.log("software engineer");
    
}else if(course.toLowerCase() === 'cs 3310')
    console.log("algorithm");
}else if(course.toLowerCase() === 'cs 4310'){
    console.log("database");
}else{
    console.log("other courses");
    
}

// !(number >= 10 && number < 20)
switch (course.toLowerCase()){
    case "cs 2500":
        console.log("Web development");
        break;
    case "cs 4800":
        console.log("software engineer");
        break;
    
    case "cs 3310":
        console.log("algorithm");
        break;
    
    case "cs 4310":
        console.log("database");
        break;
    
    default:
        console.log("other courses");
        break;
}