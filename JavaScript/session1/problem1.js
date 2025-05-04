//A. Truthy/Falsy Values
//1 Check Truthiness
function isTruthy(value){
    return !!value
}
console.log(isTruthy(0))
console.log(isTruthy(1))
console.log(isTruthy(""))
console.log(isTruthy("hello"))
console.log(isTruthy([]))
console.log(isTruthy(null))

//2. Falsy Value Count
function countFalsyValues(arr){
    let count = 0
    for(let value of arr){
        if(!value){
            count++
            console.log(value)
        }
    }
    return count
}
console.log(countFalsyValues([0,1,"","hello",[],null,undefined]))

//3.Filter Truthy Values
function filterFalsyValues(arr){
    let filtered = arr.filter((ele) => {
        return !ele
    })
    return filtered
}
console.log(filterFalsyValues([0,1,"","hello",[],null,undefined]))