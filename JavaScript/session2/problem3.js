// Type Identification in JavaScript
//Identify Type Using typeof: Write a function identifyType(value) that uses typeof to log the type of the given value. Test the function with numbers, strings, booleans, arrays, objects, and functions.
function identifyType(value){
    return typeof(value)
}
console.log(identifyType(33))
console.log(identifyType("RAJ"))
console.log(identifyType(true))
console.log(identifyType([1,2]))
console.log(identifyType({a:1}))
console.log(identifyType(function(){console.log("hi")}))
