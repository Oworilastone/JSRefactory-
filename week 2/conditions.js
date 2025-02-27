// if (condition) {
    // this part of the code will run if the condition is true    
// };
let number = 6;
if (number>0){
    console.log("the number is positive");
}
// string
 let weather = "raining";
 if (weather === "raining"){
    console.log("remember to take an umbrella");
 };

//  boolean
let isRainingOne = true;
if (isRainingOne){
    console.log("remember to take an umbrella");
} else {
    console.log("you don't need an umbrella");
};


// if else
let age = 18;
if (age >= 18){
    console.log("you are an adult");
} else {
    console.log("you are a child");
};
// this is a multi-branch if else statement, it's called a switch statement in other languages
let weatherNow = "sunny";
if (weatherNow === "rainy"){
    console.log("you  need an umbrella")
} else if (weatherNow === "cloudy"){
    console.log("you might need an umbrella")
} else if (weatherNow === "sunny"){
    console.log("wear light clothing")
} else {
    console.log("no need for an umbrella")
};




