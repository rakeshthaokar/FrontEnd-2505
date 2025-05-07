const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
let sum  = numbers.filter((ele) => {
    return (ele % 3 == 0 || ele % 5 == 0)
}).reduce((acc,curr) => {
    return acc+curr
},0)
console.log(sum)