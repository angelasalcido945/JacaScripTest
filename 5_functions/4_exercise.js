/**write a function that accepts a string as a parameter
 * and finds the longest word within the string
 * */

function findLognestWord(str){
    textArray = text.split(" ");
    // console.log(textArray);

    let longestWord;
    let LongestWordLength = 0;

    for(let word of textArray){
        if(word.length > LongestWordLength){
            // console.log(word);
            longestWord = word;
            LongestWordLength = word.length;
        }
        
    }
    return longestWord === undefined ? "String is empty" : longestWord;
}

// text = "I love JavaScript and Python";
text = "";

console.log(findLognestWord(text)); //should return JavaScript

