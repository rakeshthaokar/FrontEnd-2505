//Template Literals
//1 Basic String Interpolation: Use template literals to create a function greet(name, age) that returns a sentence like, "Hello, my name is John, and I am 25 years old." Make sure it handles variables directly within the template.
function greet(name, age){
    return `Hello, my name is ${name}, and I am ${age} years old.`
}
console.log(greet("John", 25))
console.log(greet("Harry", 21))

//2 Multi-line Strings: Write a function generateParagraph() that returns a paragraph with multiple lines using template literals.
function generateParagraph(name,age,mob){
    return `Hi my name is ${name}.
my age is ${age} years old.
my mobile number is ${mob}`
}
console.log(generateParagraph("John",23,9876543210))

//3 Expression Inside Template Literals: Write a function calculateSum(a, b) that returns a string using template literals, which also calculates and includes the sum of a and b in the output (e.g., "The sum of 5 and 3 is 8.").
function calculateSum(a, b){
    return `The sum of ${a} and ${b} is ${a+b}.`
}
console.log(calculateSum(5,6))

//4 Embedding a Function in Template Literals: Write a function formatCurrency(value) that returns a string like "$500.00". Use this function inside a template literal to format the currency value directly when printing out messages.
function formatCurrency(value){
    return `$${value}`
}
console.log(formatCurrency(5000))

//5 Nested Template Literals: Create a function formatMessage(name, status) that uses nested template literals to return a string based on different conditions (e.g., "Welcome back, John! Your status is: active." if status is true).
function formatMessage(name, status){
    if(status){
        return `Welcome back, ${name}! Your status is: active.`
    }
    else{
        return `Hi, ${name}! Your status is: InActive.`
    }
}
console.log(formatMessage("John", true))
console.log(formatMessage("Maya", false))