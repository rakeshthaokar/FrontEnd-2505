//B. Comparision Operator
//1 Basic Comparision
function compareNumbers(a,b){
    if(a>b){
        return `${a} is greater than ${b}`
    }
    else if(a<b){
        return `${a} is less than ${b}`
    }
    else if(a === b){
        return `${a} is equal to ${b}`
    }
}
console.log(compareNumbers(10,12))
console.log(compareNumbers(20,12))
console.log(compareNumbers(12,12))

//2 Comparison Table
function comparison(x,y){
    if(x>y){
        return `${x} is greater than ${y}`
    }
    else if(x<y){
        return `${x} is less than ${y}`
    }
    else if(x>=y){
        return `${x} is greater than equal to ${y}`
    }
    else if(x<=y){
        return `${x} is less than equal to ${y}`
    }
}
console.log(comparison(1,1))

//3 Comparison Challenge
function compareThreeNumbers(a,b,c){
    if(a>b){
        return `${a} is the largest`
    }
    else if(a<b){
        return `${b} is the largest`
    }
    else if(b === c){
        return `${b} and ${c} are equal`
    }
}
console.log(compareThreeNumbers(8,8,8))