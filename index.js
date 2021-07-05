// this person is an object, lol
// this is how you define an object
let person = {
    // this are the objects properties, they are stored in variables(boxes), name and age
    name: 'Sam',
    age: 30
};

// Dot Notation
// this is how you change/read the value of a property inside an object
person.name = 'John';

// When dealing with a list of items, you use an array to store that list, an array is an object in javascript
// an array is a data structure that we use to represent a list of items
let selectedColors = ['red', 'blue'];
// how to add to an array, you can add to arrays as they are dynamic
selectedColors[3] = 'green';
selectedColors[5] = 99;


// A function is a set of statements that performs a task or calculates a value
// we declare a function called greet with () braces, then we have our body where we define our logic
// We add a variable (newGuy) which is a parameter (this variable is only meaningful inside our function, & not accessible outside our function). 
// We pass that parameter into our function

function greet(newGuy, newChick) {
    console.log('Hello ' + newGuy + ' & ' + newChick);
}

// Sam is an argument to our greet function (the argument is the actual value for the parameter)
// newGuy is a parameter to our function
greet('Sam', 'Shell')
greet('Jeff', 'Lindsay')


// a function calculating a value
function square(number) {
    return number * number;
}

console.log(square(44));

let x = 10;
let y = 3;
x += 5;
x *= 3;

console.log("x = " + ++x);

let z = 1;

// relational
console.log(z < 10);
console.log(z > 10);

// Strict Equality - ensures both have same type and same value (more precise and accurate)
console.log(z === 1);

console.log(z !== 1);
// Lose Equality - converts type
console.log(z == 1);
console.log(z == '1');
console.log(true == 1);


// Ternary Operators
// if a customer has more than 100 poibts,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 90;
// if points are greater than 100, set to gold, otherwise set to silver
let type = points > 100 ? 'gold' : 'silver';


console.log(type);



// Logical Operators
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one operands are TRUE

let highIncomes = false;
let goodCreditScores = true;
let eligibleForLoans = highIncomes || goodCreditScores;

console.log(eligibleForLoans);



let userColor = 'Red';
let defaultColor = 'Black';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// NOT (!)
let applicationRefused = !eligibleForLoans;

console.log(eligibleForLoans);


let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 22;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon!');
else if (hour > 19)
    console.log('Good Night!');
else console.log('Good evening!');
 


// Switch and Case
// role represents the role of the current user, 
// we are trying to check if the user is a guest /moderator or admin.
// The Switch and Case statements we compare the value of a variable against a bunch of other values

let role;

switch (role) {
    case 'guest': 
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}
