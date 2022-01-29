
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let n1 = 2
let n2 = 5
let area  
function Area(l1,l2) {

    let result = l1*l2
    return result
}

area = Area(n1,n2) 
console.log(area)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

n1= 30
n2= 40

function crazySum(l1,l2){
    let result
    if (l1 === l2){
     result = (l1+l2)*3
    }else {
     result = (l1+l2)
    } 
    return result
}
console.log(crazySum(n1,n2))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log(`--------------EX-3---------------`)

n1= 19
n2= 60

function crazyDiff(l1,l2){
    let result
    if (l2 <= l1){
        result = Math.abs(l1-l2)
    }else {
        result = Math.abs(l1-l2)*3
    }
    return result
}

console.log(crazyDiff(n1,n2))



/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log(`--------------EX-4---------------`)

n1= 45

function boundary(n){
    let result
    if ((n >= 20 && n <= 100) || n === 400){
        result = true    
    } else{
        result = false
        
    }
    return result

}

console.log(boundary(n1))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log(`--------------EX-5---------------`)


let w = 'Strive iasndodio aisudh'

function strivify(word){
    let result
    if (word.substring(0,6) !== 'Strive') {
        result = "Strive " + word
        
    }else {
        result = word
    }
    return result
}

console.log(strivify(w))


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/