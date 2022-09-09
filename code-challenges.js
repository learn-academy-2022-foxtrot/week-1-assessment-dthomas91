// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process: Create a conditional statement if/if else/else. Add a .length to those conditional statements to determine how many characters each fruit has. In the conditional statement use math (< , >, etc.) to declare if fruit1 is longer than fruit2 to display fruit1 and visa versa for the "else if" statement.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// if (fruit1.length > fruit2.length) {
//     console.log(`${fruit1}`)
// } else if (fruit1.length < fruit2.length) {
//     console.log(`${fruit2}`)
// } else {
//     console.log("Invalid Conditional Statements")
// }

// Expected outcome: "banana"

// Set two:
 const fruit1 = "cherry"
 const fruit2 = "kiwi"

 if (fruit1.length > fruit2.length) {
    console.log(`${fruit1}`)
} else if (fruit1.length < fruit2.length) {
    console.log(`${fruit2}`)
} else {
    console.log("Invalid Conditional Statements")
}
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: Create an if statement, us the math format of if temp is less than (<) 212 return "Bellow boiling temp". Creating an else if statement if temp is more than (>) 212 to return "temp is about boiling temp". Again another else if statement of it it is equal (==) to 212 to return "is at boiling temp". You use this code `${temp}` to make it display the temp in the return of your console.log

const temp = 212
if (temp < 212) {
    console.log (`${temp}`, "is bellow boiling temp")
} else if (temp > 212) {
    console.log (`${temp}`, "is above boiling temp")
} else if (temp == 212) {
    console.log (`${temp}`, "is at boiling temp")
} else {
    console.log("Invalid Conditional Statement")
}
// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

// const temp = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: to merge the two const we simply use the command .concat, that will merge all nine of the numbers into one array. After this to count the elements within the array you use the command .length in between the final two ().

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: First I seperated the individual letters of the string by using a .split("") command. Then I reversed all of the individual letters with the .reverse() command and then finished off by bringing all of the letters back together in one string by using .join("")

const currentCohort = "Foxtrot 2022"

console.log(currentCohort.split("").reverse().join(""));
// Expected output: "2202 tortxoF"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: Create a console.log for myNumbers with a command of .lastIndexOf(givenValue1) and the same process for givenValue2

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1))


// Expected output: 7

const givenValue2 = 10

console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: sort the numbers by using the .sort command after the const. Then determining which direction to sort the numbers by using ((a, b) => b - a)) which starts at the highest number and works its way down.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort((a, b) => b - a))
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort((a, b) => b - a))
// Expected output: [68, 67, 66, 66, 62, 59, 59]
