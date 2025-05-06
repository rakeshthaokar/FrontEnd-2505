// Arrow Functions
//1 Basic Arrow Function: Convert the following function into an arrow function:
/*
function add(a, b) {
  return a + b;
}
*/
let add = (a,b) => {
    return a+b
}
console.log(add(2,3))

//2 Single-Line Arrow Function: Write a single-line arrow function double(n) that returns the double of a number.
let double = n => n*2
console.log(double(2))

//3 Arrow Function with Implicit Return: Create an arrow function greet that takes a name and returns "Hello, [name]" without using the return keyword explicitly.
let greet = name => `Hello, ${name}`
console.log(greet("Harry"))

//4 Arrow Function in Callback: Write a function filterEvenNumbers(arr) that uses an arrow function inside Array.filter() to filter out only even numbers from an array.
function filterEvenNumbers(arr){
    return arr.filter(ele => ele%2 == 0)
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,8]))

