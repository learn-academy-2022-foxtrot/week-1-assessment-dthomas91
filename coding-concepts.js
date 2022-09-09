// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: It will add indigo and an additional element in the array at the very end of the array after daffodil
// b) Verify and explain: it displayed 5... I forgot that for it to display indigo after daffodil that I would need to run another console.log(colors)


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: It will log the number of how many indexes in the return which would be 9
// b) Verify and explain: result came back as 10, I started counting at 0 which is correct for index placement but wrong for how many characters there are.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: it will return the letter "o"
// b) Verify and explain: it is correct because the [4] in the console log after greeting is telling it to return the value of the 4th index, which the index always starts at 0 resulting in the "o" being in the 4th index location


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: This will return "Ruby"
// b) Verify and explain: Correct, The index = 1 is telling the code to return the value of what is in index location 1, which javascript it located in index 0 making ruby sit in index 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: This code will make the words saturday and sunday to both become uppercased i.e. SATURDAY and SUNDAY
// b) Verify and explain: Incorrect - doesn't work because the .toUpperCase function only works for a string and ["saturay", "sunday"] is an array. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: it will display an error because "typeof" is not defined
// b) Verify and explain: it displays "number". The "typeof" command is changing what the code is trying to return instead of returning the number of elements in the array plus 1. 
