alert("assignment3 is loaded!")
// 1. create a function called doWeirdStuff
// 2. this function will accept one number and one tring as parameters
// 3. in the function, write the following if statements:
//    - if the number is greater than the length of the string, console.log "number won!"
//    else console log "string won!"
//    - if the number + the length of the string is greater than 20, then
//    console log the total sum of the length of the string and the number
//    - if the number is greater than 5  AND the length of the string is greater
//    than 10, console log "the number is greater than 5 and the string is greater
//    than 10"
//    - if the number is 0 OR string first letter starts with letter "O" then
//    console log "Ooooops"

function doWeirdStuff(number, string) {
  if (number > string.length) {
    console.log("Number won!")
  } else {
    console.log("String won!")
  }

  if (number + string.length > 20) {
    console.log(string.length + number)
  }

  if ((number > 5) && (string.length > 10) ) {
    console.log("the number is greater than 5 and the string is greater than 10")
  }
  // string[0] === "o" works, too
  if (number === 0 || string.toLowerCase().startsWith("o")) {
    console.log("Oooooops")
  }
}



doWeirdStuff(7, "Hello");
console.log("----------------");
doWeirdStuff(15, "Hello World!");
console.log("-----------------");
doWeirdStuff(15, "What a beautiful day");
console.log("-----------------");
doWeirdStuff(10, "Oak");
console.log("-----------------");
doWeirdStuff(0, "Tree");
