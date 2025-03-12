// Select buttons
const createBtn = document.getElementById("create-btn");  // Finds the HTML element with the id="create-btn" (the Create button). Stores the reference in the variable createBtn.
const readBtn = document.getElementById("read-btn");
const updateBtn = document.getElementById("update-btn");
const deleteBtn = document.getElementById("delete-btn");

// Event Listeners - Change button color on click
createBtn.addEventListener("click", function() {
    alert("Create: Adding new produce to the store."); // This triggers a pop-up message (alert box) when the button is clicked.
    createBtn.style.backgroundColor = "#8B0000"; // Dark Red
    createBtn.style.color = "white"; 
});

readBtn.addEventListener("click", function() {
    alert("Read: Listing all available produce.");
    readBtn.style.backgroundColor = "#8A2BE2"; // BlueViolet
    readBtn.style.color = "white"; 
});

updateBtn.addEventListener("click", function() {
    alert("Update: Modify existing produce.");
    updateBtn.style.backgroundColor = "#FF4500"; // OrangeRed
    updateBtn.style.color = "white"; 
});

deleteBtn.addEventListener("click", function() {
    alert("Delete: Remove produce from the store.");
    deleteBtn.style.backgroundColor = "#008080"; // Teal
    deleteBtn.style.color = "white"; 
});

// DOM Traversal Examples

//  Parent to Children: List all produce
const produceList = document.getElementById("produce-list");  // Gets the <ul> list that contains all produce items (<li> elements).
console.log("List of all produce:");  // Logs a message to the browser console.
// Loops through each child element (<li>) inside <ul>.
for (let child of produceList.children) {
    console.log(child.innerText);   // Logs each produce name in the console.
}

// Child to Parent: Find parent of a list item
const firstProduce = document.querySelector("#produce-list li");    // Finds the first <li> inside <ul id="produce-list">.
console.log("Parent of first produce:", firstProduce.parentElement.tagName);  // Logs the parent’s tag name (UL).

// Child to Siblings: Find siblings of "Beans"
const beans = document.querySelector("#produce-list li:nth-child(2)");  // Selects the second <li>, which is "Beans"
console.log("Siblings of Beans:");
let sibling = beans.parentElement.firstElementChild;  // Gets the first child (<li>) inside the <ul>.
while (sibling) {
    //  starts a loop that goes through each sibling of beans.
    // the condition, If the current sibling is NOT "Beans",print the name.
    if (sibling !== beans) {
        console.log(sibling.innerText);
    }
    sibling = sibling.nextElementSibling;  // moves to the next <li> element in the list.
}
