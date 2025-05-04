// C. Mathematical Operators
//1 Basic Arithmetic
function performAirthmetic(a,b){
    return `{
    addition: ${a+b},
    subtraction: ${a-b},
    multiplication: ${a*b},
    division: ${a/b}
    }`
}
console.log(performAirthmetic(10,2))

//2 Calculate Average
function calculateAverage(numbers){
    let average = numbers.reduce((acc,curr) => acc+curr ,0)/numbers.length
    return average
}
console.log(calculateAverage([10,20]))

//3 Complex Calculation 
function calculateExpression(a,b,c){
    let result = (a + b) * c / (b - a)
    return result
}
console.log(calculateExpression(2,4,8))
console.log(calculateExpression(9,5,3))