// Rest and Spread
//1 Rest Parameter: Write a function sum(...numbers) that takes any number of arguments using the rest parameter and returns their sum.
function sum(...numbers){
    let sum = numbers.reduce((a,c) => a+c,0)
    return sum
}
console.log(sum(1,2,3,4))

//2 Spread with Arrays: Write a function mergeArrays(arr1, arr2) that merges two arrays using the spread operator.
function mergeArrays(arr1, arr2){
    let newArr = [...arr1,...arr2]
    return newArr
}
console.log(mergeArrays([1,2,3],[4,5,6]))

//3 Spread with Objects: Write a function updatePerson(person, updates) that uses the spread operator to return a new object by updating properties of the person object with values from the updates object.
function updatePerson(person, updates){
    let newObj = {...person,...updates}
    return newObj
}
console.log(updatePerson({name:"raj",gender:"male"},{name:"supriya",age:33,gender:"female"}))

//4 Rest with Destructuring: Write a function extractFirstAndRest(arr) that destructures an array to extract the first element into a variable and the rest into another variable using the rest operator.
function extractFirstAndRest(arr){
    let [first,...rest] = arr
    return `First: ${first}, Rest: ${rest}`
}
console.log(extractFirstAndRest(["apple","banana","cherry","mango"]))

//5 Spread in Function Calls: Write a function calculateTotal(...args) that accepts a variable number of arguments and calls a separate sum function using the spread operator to pass the arguments.
function calculateTotal(...args){
    return sum(...args)
}
function sum(a,b,c){
    return `${a+b+c}`
}
console.log(calculateTotal(5,10,15))