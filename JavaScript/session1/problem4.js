//D. Logical Operators
1 Basic Logical Operators
function logicalOperations(a,b){
    console.log(a && b)
    console.log(a || b)
    console.log(a != b)
}
logicalOperations(true,false)

//2 Eligibility Check
function isEligible(age,hasPermission){
    if(age >= 18){
        return `permisssion allow`
    }
    else{
        return `no permisssion`
    }
}
console.log(isEligible(23,true))
console.log(isEligible(17,true))

