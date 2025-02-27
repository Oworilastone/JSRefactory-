// Create a new Date object
const now = new Date();

// Get the year
console.log("Current year:", now.getFullYear());

// Get the month (0-11, where 0 is January)
console.log("Current month (as number):", now.getMonth() + 1); // Adding 1 since months are zero-based

// Get the date (day of the month)
console.log("Current date:", now.getDate());

// Get the day (0-6, where 0 is Sunday)
console.log("Current day (as number):", now.getDay());

// Get current hours (0-23)
console.log("Current hour:", now.getHours());

// Get current minutes (0-59)
console.log("Current minutes:", now.getMinutes());

// Get seconds elapsed since January 1, 1970
console.log("Seconds since Jan 1, 1970:", Math.floor(now.getTime() / 1000));
