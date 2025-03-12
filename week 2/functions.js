// function name(){
//     return
// }
// name()

//  function to add to numbers without parameters
function add(){
    num1 = 9
    num2 = 70
    num3 = 20
    let sum = num1 + num2
    console.log(sum)
}
add()

// function to add to numbers with parameters
// resuable function, more preferable than the first example 
// you can pass any number you want for a and b
// a and b are place holders
function add(a,b){
    let sum = a+b
    return sum 
}
console.log(add(3,8));

function add2(){
    let m = 5
    let n = 9
    let sum = m + n
    return sum 
}
console.log("the sum is:" + add2())
// above is an addition function 

// function that squares a number
function square(c){
let square = c*c
return square
}
// square(3)
// square(100)
// square(45)
console.log("the square is:" + square(9))

// // how to make a function a variable 
// const sqaure = function(a){
//     let square = a*a
// return square
// }

// // arrow method, we remove any words and turn them into an arrow(=>)
// // you delete the word function,sqaure and let(using example above)
// // end goal of an arrow function is for everyting to be on the same line
// // const sqaure =(a) => (a*a)

// function sub(a,b){
//     let sub = a - b
//     return sub
// }
// console.log(sub(8 - 4));

// function calculateTotalCost(produce, pricePerKg, quantity){
//     let totalPrice = pricePerKg * quantity;
//     console.log("the total price for" + quantity + "kg of" + produce + "is" + totalPrice + "Ugx.");
// }
// calculateTotalCost("groundNuts", 2000, 20)
// calculateTotalCost("beans", 500, 10)
// calculateTotalCost("Maize", 700, 5)
// calculateTotalCost("Cow Peas", 300, 2)

// arrow function also called the unkown function 
let areaOfTriangle = (base, height) => {
    let area = 0.5 * base * height
    return area 
}
console.log("the area of the triangle is:" + areaOfTriangle(15,5))

