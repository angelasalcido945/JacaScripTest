// write a function that accepts a string as a parameter and counts the numbers of vowels: aeiou
//  within the string
//indexOf()

function vowelCount(str){
    let count = 0;
    const vowels = 'aeiou';
    // str = str.toLowerCase() //have incase the str has uppercase since vowels are all lowercase

    for(let index = 0; index < str.length; index++){
        const currentLetter = str[index].toLowerCase();
        if(vowels.indexOf(currentLetter) !== -1){
            count++;
        }
    }
    return count;
}
console.log(vowelCount("brOwn Apple"));
