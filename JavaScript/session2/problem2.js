//Type Coercion (Implicit)
//1 Basic Coercion Check: Write a function checkCoercion(a, b) that compares two values using both == (loose equality) and === (strict equality). Log the results for both comparisons. Test with values like "5" and 5, false and 0, null and undefined.
function checkCoercion(a, b){
    console.log(a == b)
    console.log(a === b)
}
checkCoercion("5",5)
checkCoercion(false,0)
checkCoercion(null,undefined)

//2 Coercion in Arithmetic: Write a function coerceInArithmetic(a, b) that performs addition (+), subtraction (-), multiplication (*), and division (/) on two values of different types (e.g., string and number) and logs the results to demonstrate implicit type coercion.
function coerceInArithmetic(a, b){
    console.log(`Addition of a and b is ${a+b}`)
    console.log(`Subtraction of a and b is ${a-b}`)
    console.log(`Multiplication of a and b is ${a*b}`)
    console.log(`Division of a and b is ${a/b}`)
}
coerceInArithmetic("10",2)

//3 Implicit Coercion in Conditionals: Write a function coerceInConditionals(value) that takes a value and uses it in an if statement to check if the value is truthy or falsy, demonstrating implicit coercion in conditionals. Log whether the value is considered "truthy" or "falsy."
function coerceInConditionals(value){
    if(Boolean(value) === true){
        return `truthy`
    }
    else{
        return `falsy`
    }
}
console.log(coerceInConditionals(12))
console.log(coerceInConditionals(""))
console.log(coerceInConditionals(0))