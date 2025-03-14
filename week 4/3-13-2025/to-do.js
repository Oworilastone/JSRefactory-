// document.addEventListener("DOMContentLoaded", callbackFunction) tells the browser to execute callbackFunction when the initial HTML structure has been fully loaded.
// This prevents scripts from running too early, before the elements they interact with exist in the DOM.
document.addEventListener("DOMContentLoaded", () => {
    getUsername(); // Retrieves the stored username or asks for it if not found.Displays the username on the webpage.
    loadTasks(); // Fetches the stored tasks from localStorage and displays them.Ensures that tasks persist even after page reloads.
    checkReminders(); // Checks if there are any stored reminders. Alerts the user if a reminder is due.
});
// DOMContentLoaded, Ensures that reminders are checked immediately after the page loads.Prevents errors if reminders data is fetched before the DOM is ready.

// method is used to check if a username is already stored in the browser’s localStorage.
// If the username is found, name will hold that value.
// If the username is not found (i.e., first visit or manually cleared storage), name will be null.
// If name is null or empty, the user is asked to enter their name via the prompt() function.
function getUsername() {
    let name = localStorage.getItem("username");
    if (!name) {
        name = prompt("Enter your name:") || "User ";
        localStorage.setItem("username", name);
    }
    document.getElementById("username").textContent = name;
    document.getElementById("nameInput").value = name; // Set the input field with the name
}

function saveUsername() {
    const nameInput = document.getElementById("nameInput").value;
    localStorage.setItem("username", nameInput);
    document.getElementById("username").textContent = nameInput;
}


// description of what this code does,it is responsible for retrieving stored tasks from localStorage, displaying them dynamically in a list, and adding checkboxes to mark tasks as completed. It also includes options to edit or delete a task.
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // If no tasks are found (null is returned), || [] ensures that tasks is initialized as an empty array ([]), preventing errors.
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Before displaying tasks, it removes any existing task items to prevent duplication. This ensures that when loadTasks() runs, it refreshes the list. 
    tasks.forEach((task, index) => { // task represents the current task object, and index is its position in the array.
        const li = document.createElement("li");  // Set the input field with the name
        // Creates a checkbox for marking tasks as completed.If task.completed is true, the checkbox is pre-checked (checked).
        // onclick="toggleTask(${index})" calls toggleTask(index), which should handle toggling the task's completion status.
        // the span
        // Displays the task name (task.text) and its category (task.category).
        // If the task is completed (task.completed is true), it adds the class "completed", which can be used for strikethrough styling in CSS.
        li.innerHTML = `  
            <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})">
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.text} (${task.category})</span>
            <br>
            <small>Created: ${task.createdDate}</small><br>
            <small>Due: ${task.dueDate}</small>
            <p>${task.description}</p>
            <button onclick="editTask(${index})">Edit</button> 
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li); // Appends the newly created <li> element (representing a task) to the task list (taskList).
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = document.getElementById("taskDescription").value;
    const category = document.getElementById("category").value;
    const taskDateTime = document.getElementById("taskDateTime").value;
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Ensures the task input is not empty (taskInput.value.trim() !== "" removes extra spaces).
    if (taskInput.value.trim() !== "" && taskDateTime) {
        const createdDate = new Date().toLocaleString();
        // A new task object is created and added to the tasks array using .push().
        tasks.push({ text: taskInput.value, description: taskDescription, category, dueDate: taskDateTime, createdDate, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        document.getElementById("taskDescription").value = ""; // Clears the text fields so the user can add another task without deleting previous input manually.
        loadTasks();  // Calls loadTasks() to refresh the task list display with the new task. 
    }
}


// This function toggles (switches) the completion status of a task in the tasks array.
// Defines the toggleTask() function, which takes index as an argument. index represents the position of the task in the tasks array.
function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks[index].completed = !tasks[index].completed; // Accesses the task at index then Flips the completed value {If false, it changes to true. If true, it changes to false.}
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Updates localStorage with the modified tasks array.
    loadTasks();
}

// This function removes a task from the tasks array and updates localStorage. 
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1); // Removes one task at the given index.
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    const newTaskDescription = prompt("Edit your task description:", tasks[index].description);
    if (newTaskText) {
        tasks[index].text = newTaskText;
    }
    if (newTaskDescription) {
        tasks[index].description = newTaskDescription;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function checkReminders() {
    setInterval(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const now = new Date().toISOString();
        tasks.forEach(task => {
            if (!task.completed && task.dueDate && task.dueDate <= now) {
                alert(`Reminder: It's time for '${task.text}'!`);
            }
        });
    }, 60000);
}