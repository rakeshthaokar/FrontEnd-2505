// Destructuring Arrays and Objects
//1  Object Destructuring: Write a function displayPerson(person) that uses object destructuring to extract and log the name and age properties from a person object.
function displayPerson(person){
    let {name,age} = person
    console.log(name,age)
}
displayPerson({name:"ram",age:22})

//2 Nested Destructuring: Create a function extractNestedData(obj) that uses nested object destructuring to extract values from a nested object like { name: { first: "John", last: "Doe" }, age: 30 }.
function extractNestedData(obj){
    let { name: { first, last }, age } = obj
    return `Hi! My FullName is ${first} ${last} and My age is ${age}`
}
console.log(extractNestedData({ name: { first: "John", last: "Doe" }, age: 30 }))

//3 Default Values in Destructuring: Write a function getCoordinates({ x = 0, y = 0 } = {}) that uses object destructuring with default values to return coordinates. Test it with different inputs.
function getCoordinates({ x = 0, y = 0 } = {}){
    return {x,y}
}
console.log(getCoordinates({x: 10,y: 20}))
console.log(getCoordinates({x: 23,}))
console.log(getCoordinates({y: 20}))

//4 Rest in Destructuring: Write a function getUserInfo(user) that destructures the user object, extracting name and placing the remaining properties into a rest variable.
function getUserInfo(user){
    let {name,...rest} = user
    return `name: ${name} and Rest: ${rest}`
}
console.log(getUserInfo({name:"Punam",age:22,city:"nagpur",mob: 23345}))