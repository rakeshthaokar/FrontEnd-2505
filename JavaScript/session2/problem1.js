//Type Conversion (Explicit)
//1 Basic Type Conversion: Write a function convertToNumber(value) that explicitly converts a given value to a number using Number() and returns the result. Test this function with string numbers ("10", "20.5") and boolean values.
function convertToNumber(value){
    return Number(value)
}
console.log(convertToNumber("10"))
console.log(convertToNumber("20.5"))

//2 String Conversion: Write a function convertToString(value) that explicitly converts a given value to a string using String(). Test it with numbers, booleans, arrays, and objects.
function convertToString(value){
    return String(value)
}
console.log(convertToString(10))
console.log(convertToString(true))
console.log(convertToString([1,2]))
console.log(convertToString({name:"raj"}))

//3 Complex Type Conversion: Write a function convertAndCompare(a, b) that converts both values to the same type (number or string) and then compares them. Return whether the values are equal after conversion. Test this function with combinations like "10" and 10, false and 0, etc.
function convertAndCompare(a, b){
    if(Number(a) === Number(b)){
        return true
    }
    else{
        return false
    }
}
console.log(convertAndCompare("2",2))
console.log(convertAndCompare(false,0))
console.log(convertAndCompare(true,1))