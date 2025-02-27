// assignment for 20th feb 2025

// Comparison expressions
// true
console.log('4 > 3 is:', 4 > 3)
// true
console.log('4 >= 3 is:', 4 >= 3)
// false
console.log('4 < 3 is:', 4 < 3)
// false
console.log('4 <= 3 is:', 4 <= 3)
// true
console.log('4 == 4 is:', 4 == 4)
// true
console.log('4 === 4 is:', 4 === 4)
// false
console.log('4 != 4 is:', 4 != 4)
// false
console.log('4 !== 4 is:', 4 !== 4)
// false
console.log('4 != "4" is:', 4 != '4')
// true
console.log('4 == "4" is:', 4 == '4')
// false
console.log('4 === "4" is:', 4 === '4')

// Declare age variables
const myAge = 250;
const yourAge = 25;

// Calculate age difference
const ageDifference = myAge - yourAge;

// Display the result
console.log(`I am ${ageDifference} years older than you.`);

// Second way (string concatenation)
console.log('I am ' + ageDifference + ' years older than you.');

// String Manipulation Exercises
const challenge = '30 Days Of JavaScript';

// Print the string
console.log('String:', challenge);

// Print length of string
console.log('Length:', challenge.length);

// Convert to uppercase
console.log('Uppercase:', challenge.toUpperCase());

// Convert to lowercase
console.log('Lowercase:', challenge.toLowerCase());

// Cut out first word using substring
console.log('First word:', challenge.substring(0, 2));

// Slice out "Days Of JavaScript"
console.log('Sliced phrase:', challenge.substring(3));

// Check if contains "Script"
console.log('Contains "Script":', challenge.includes('Script'));

// Split string into array
console.log('Split into array:', challenge.split());

// Split string at spaces
console.log('Split at spaces:', challenge.split(' '));

// Split companies string
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('Companies array:', companies.split(', '));

// Replace JavaScript with Python
console.log('Replace JavaScript:', challenge.replace('JavaScript', 'Python'));

// Find character at index 15
console.log('Character at index 15:', challenge.charAt(15));

// Get character code of J
console.log( challenge.charCodeAt(challenge.indexOf('J')));

// Find first occurrence of 'a'
console.log('First position of "a":', challenge.indexOf('a'));

// Find last occurrence of 'a'
console.log('Last position of "a":', challenge.lastIndexOf('a'));

// Work with 'because' in a sentence
const sentence = 'You cannot end a sentence with because because because is a conjunction';

// Find first occurrence of 'because'
console.log('First position of "because":', sentence.indexOf('because'));

// Find last occurrence of 'because'
console.log('Last position of "because":', sentence.lastIndexOf('because'));

// Search for 'because'
console.log('Search position of "because":', sentence.search('because'));

// Trim whitespace
const stringWithWhitespace = ' 30 Days Of JavaScript ';
console.log('Trimmed string:', stringWithWhitespace.trim());

// Check if string starts with '30'
console.log('Starts with "30":', challenge.startsWith('30'));

// Check if string ends with 'Script'
console.log('Ends with "Script":', challenge.endsWith('Script'));

// Find all occurrences of 'a'
console.log('All "a" matches:', challenge.match(/a/g));

// Concatenate strings
const part1 = '30 Days of';
const part2 = 'JavaScript';
console.log('Concatenated string:', part1.concat(' ', part2));

// Repeat the string
console.log('Repeated string:', challenge.repeat(2));

// Type checking and conversion
const stringTen = '10';
console.log("typeof '10' equals 10:", typeof stringTen === typeof 10);
console.log("Converting '10' to number:", Number(stringTen));

// Check and convert parseFloat('9.8')
const floatNum = parseFloat('9.8');
console.log('9.8 equals 10:', floatNum === 10);
console.log('Rounding 9.8 to 10:', Math.ceil(floatNum));

// Check for 'on' in words
console.log("'on' in python:", 'python'.includes('on'));
console.log("'on' in jargon:", 'jargon'.includes('on'));

// Check for jargon in sentence
const jargonSentence = 'I hope this course is not full of jargon';
console.log('Contains jargon:', jargonSentence.includes('jargon'));

// Generate random numbers
// Between 0 and 100
console.log('Random 0-100:', Math.floor(Math.random() * 101));

// Between 50 and 100
console.log('Random 50-100:', Math.floor(Math.random() * 51) + 50);

// Between 0 and 255
console.log('Random 0-255:', Math.floor(Math.random() * 256));

// Access JavaScript string with random index
const jsString = 'JavaScript';
const randomIndex = Math.floor(Math.random() * jsString.length);
console.log('Random character from JavaScript:', jsString[randomIndex]);

// Print pattern using escape characters
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// Alternative way using multiple console.log statements
console.log('1 1 1 1 1');
console.log('2 1 2 4 8');
console.log('3 1 3 9 27');
console.log('4 1 4 16 64');
console.log('5 1 5 25 125');

// Slice out 'because because because'
const becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
const startIndex = becauseSentence.indexOf('because');
const endIndex = becauseSentence.lastIndexOf('because') + 'because'.length;
console.log('Extracted phrase:', becauseSentence.substring(startIndex, endIndex));

// Variable declarations with different types
const firstName = 'Lastone';
const lastName = 'Stone';
const country = 'Uganda';
const city = 'Kampala';
const age = 12;
const isMarried = false;
const year = 2024;

// Check types of variables
console.log('\n--- Types of Variables ---');
console.log('typeof firstName:', typeof firstName);
console.log('typeof lastName:', typeof lastName);
console.log('typeof country:', typeof country);
console.log('typeof city:', typeof city);
console.log('typeof age:', typeof age);
console.log('typeof isMarried:', typeof isMarried);
console.log('typeof year:', typeof year);

// Check if '10' equals 10
console.log('\n--- Type Comparisons ---');
console.log("'10' == 10:", '10' == 10);    // true (type coercion)
console.log("'10' === 10:", '10' === 10);  // false (strict equality)

// Check if parseInt('9.8') equals 10
console.log("parseInt('9.8') == 10:", parseInt('9.8') == 10);  // false
console.log("parseInt('9.8'):", parseInt('9.8')); // 9

// Truthy values
console.log('\n--- Truthy Values ---');
console.log('Truth value 1:', Boolean(true));      // true
console.log('Truth value 2:', Boolean(42));        // true
console.log('Truth value 3:', Boolean("Hello"));   // true

// Falsy values
console.log('\n--- Falsy Values ---');
console.log('Falsy value 1:', Boolean(false));     // false
console.log('Falsy value 2:', Boolean(0));         // false
console.log('Falsy value 3:', Boolean(""));        // false

// assignment for 21st feb 2025
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

// Triangle Area Calculator
const base = prompt('Enter base: ');
const height = prompt('Enter height: ');
const area = 0.5 * base * height;
console.log('The area of the triangle is ' + area);

// Triangle Perimeter Calculator
const sideA = prompt('Enter side a: ');
const sideB = prompt('Enter side b: ');
const sideC = prompt('Enter side c: ');
const perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log('The perimeter of the triangle is ' + perimeter);

// Rectangle Calculator
const length = Number(prompt('Enter length: '));
const width = Number(prompt('Enter width: '));
const rectangleArea = length * width;
const rectanglePerimeter = 2 * (length + width);
console.log('The area of the rectangle is ' + rectangleArea);
console.log('The perimeter of the rectangle is ' + rectanglePerimeter);

// Circle Calculator
const radius = Number(prompt('Enter radius: '));
const pi = 3.14;
const circleArea = pi * radius * radius;
const circumference = 2 * pi * radius;
console.log('The area of the circle is ' + circleArea);
console.log('The circumference of the circle is ' + circumference);

// Linear Equation y = 2x - 2
console.log('\n--- Linear Equation y = 2x - 2 ---');
const slope1 = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope1;
console.log('Slope: ' + slope1);
console.log('X-intercept: ' + xIntercept);
console.log('Y-intercept: ' + yIntercept);

// Slope between points (2,2) and (6,10)
const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log('\nSlope between (2,2) and (6,10): ' + slope2);

// Compare slopes
console.log('\n--- Slope Comparison ---');
console.log('Slope of y = 2x - 2: ' + slope1);
console.log('Slope between points: ' + slope2);
console.log('Are slopes equal? ' + (slope1 === slope2));

// Quadratic Equation y = x² + 6x + 9
console.log('\n--- Quadratic Equation y = x² + 6x + 9 ---');
// Testing different x values to find where y = 0
function calculateY(x) {
    return Math.pow(x, 2) + 6 * x + 9;
}

// Test some x values
const xValues = [-5, -4, -3, -2, -1, 0];
console.log('Testing x values to find where y = 0:');
xValues.forEach(x => {
    const y = calculateY(x);
    console.log(`When x = ${x}, y = ${y}`);
});

// The equation can be factored as (x + 3)² = 0
console.log('\nThe equation y = x² + 6x + 9 equals 0 when x = -3');
console.log('This can be verified: ' + calculateY(-3));


