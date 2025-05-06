// Default Parameters in Function
//1 Basic Default Parameters: Write a function greet(name = "Guest") that returns a greeting. If no name is provided, it should return "Hello, Guest!".
function greet(name = "Guest") {
    return `Hello ${name}`
}
console.log(greet())
console.log(greet("Punam"))

//2 Multiple Default Parameters: Write a function calculateTotal(price, tax = 0.05) that returns the total price with tax. Test it with and without passing the tax value.
function calculateTotal(price, tax = 0.05) {
    let TotalPrice = `${price + tax}`
    return TotalPrice
}
console.log(calculateTotal(200))
console.log(calculateTotal(180))

//3 Default Parameters with Undefined Values: Write a function describePerson(name, age = 25) that returns a description of a person. If age is passed as undefined, the function should use the default value.
function describePerson(name, age = 25) {
    return `Hi! my name is ${name} and my age is ${age}`
}
console.log(describePerson("Pooja", 22))
console.log(describePerson("Maya"))

//4 Default Parameters in Complex Expression: Create a function calculateDiscount(price, discount = price * 0.1) that calculates and returns the final price after applying a discount. Test it with different values.
function calculateDiscount(price, discount = price * 0.1) {
    let finalPrice = price - discount
    return finalPrice
}
console.log(calculateDiscount(100))
console.log(calculateDiscount(200, 30))