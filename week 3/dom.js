// console.log(document)
// let car = {
//     model: 10,
//     color :"balck"
// // }
// // console.log(car);
// // console.log(car.model);
// document.getElementById()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

const allHeading = document.getElementsByTagName("h1");
console.log(allHeading);
// give us the number of h1(arrays)
console.log(allHeading.length);

for (i=0; i < allHeading.length; i++){
    console.log(allHeading[i])
}

const heading = document.getElementsByClassName("ec");
console.log(heading);
console.log(heading.length);

