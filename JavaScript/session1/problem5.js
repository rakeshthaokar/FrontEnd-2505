//E. Conditional Statement
//1 simple if statement 
function checkEvenOdd(number){
    if(number%2 == 0){
        return `${number} is Even number`
    }
    else{
        return `${number} is Odd number`
    }
}
console.log(checkEvenOdd(10))
console.log(checkEvenOdd(17))

//2 Grade Evaluation
function evaluateGrade(score){
    if(score >= 90 && score <= 100){
        return "A Grade"
    }
    else if(score > 80 && score < 90){
        return "B Grade"
    }
    else if(score > 70 && score < 80){
        return "C Grade"
    }
    else if(score > 60 && score < 70){
        return "D Grade"
    }
    else if(score > 35 && score < 60){
        return "E Grade"
    }
    else{
        return "F Grade"
    }
}
console.log(evaluateGrade(95))
console.log(evaluateGrade(9))

//3. Discount Calculation
function calculateDiscount(price,isMember){
    if(isMember == true){
        return `Rs.${price - 10} discount applied`
    }
    else {
        return `Rs.${price} no discount`
    }
}
console.log(calculateDiscount(200,true))
console.log(calculateDiscount(200,false))