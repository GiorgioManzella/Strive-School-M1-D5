
function print(text) {
    return (console.log(`------------------${text}----------------`))

}

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
console.log(`--------------EX-6---------------`)

n1 = 7


function check3and7(l1) {
    let result
    result = ((l1 >=0)) ? ((((l1 % 3 )=== 0 ) || ((l1 % 7) === 0)) ? true : false) : false  // ternary operator (ternary operator)
    /*if (l1 >= 0) {
        if ((l1 % 3) === 0){
            result = true
        } else if ((l1 % 7)===0) {
            result = true
        }else {
            result = false
        }
    }else {
        result = false
    }
     */
    return result
}

console.log(check3and7(n1))


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log(`--------------EX-7---------------`)

let word='Strive'

function reverseString (i){

    return i.split('').reverse().join('')
    
}
console.log(reverseString("strive"))


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log(`--------------EX-8---------------`)


function upperFirst(i) {

    var arrayString = i.split(" ")
    let result = ""   
     for(let p = 0; p < arrayString.length; p++) {
        arrayString[p] = arrayString[p].charAt(0).toUpperCase() + arrayString[p].slice(1)
        result += arrayString[p] + ' ' 


     }   // p++ === (p = p + 1) === (p += 1)
      //result = arrayString[0] + " " + arrayString[1]
    return result
}

console.log(upperFirst('strive la casa'))




/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
print('EX-9')

let palabra = "I don't care"

function cutString(w) {
    //let result = (palabra.split('').reverse().slice(1).join('')).split('').reverse().slice(1).join('')
    //let result = (palabra.split('').slice(1).reverse().slice(1).reverse().join(''))
    let result = palabra.slice(1).split('').reverse().slice(1).reverse().join('')
    //result = result.split('').reverse().slice(1).join('')
    return result 
}
console.log(cutString(palabra))
//return i.split('').reverse().join('')


/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

print('EX-10')

n = 500

function giveMeRandom(i) {
    return Math.floor(Math.random(i)*11)
}
console.log(giveMeRandom(n))
//console.log(giveMeRandom(n))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/
print('EX-X-1')
let t = giveMeRandom()
let arrayRandom = [,,,,,]
for (i=0; i<arrayRandom.length;i++) {
    arrayRandom[i] = giveMeRandom()
}
 console.log(arrayRandom)   

function checkArray() { 
    let sum = 0
    for (i=0; i< arrayRandom.length; i++) {
        if (arrayRandom[i] > 5) {
            sum += arrayRandom[i]
        } 
    }
    return sum
}
console.log(checkArray())
/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

print('EX-X-2')

let shoppingCart = [
    {
        price: 31,
        Name: 'bag',
        Promise: 6,
        quantity: 5,
    },
    {
        price: 39,
        Name: 'bag',
        prie: 7,
        quantity: 5,

    },
    {
        price: 35,
        Name: 'bag',
        prce: 5,
        quantity: 5,
    }
]

let shoppingCartTotal = function(){

    total = 0
    for (i=0; i < shoppingCart.length; i++){
        total = total + shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
};
console.log(shoppingCartTotal())

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

print('EX-X-3')
let newItem = {
    id: 24,
    price: 30,
    quantity:2,
    name:'borsa',
}

const addToShoppingCart = function (itemToAdd) {     
    let newLenght = shoppingCart.push(itemToAdd)
    return newLenght
}
console.log(addToShoppingCart())

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/
print('EX-X-4')
/*const maxShoppingCart = function (){
    let mostexpensive = shoppingCart[0]
    for (let index = 0; index < shoppingCart.length; index++) {
        if (shoppingCart[index].price > mostexpensive.price) {
            
        }}
        return content
        
    }
*/

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = function () {
    for (let index = 0; index < shoppingCart.length; index++) {
        const lastItem = shoppingCart[shoppingCart.length - 1].Name;
        return lastItem
        
    }
}
console.log(latestShoppingCart())
/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/