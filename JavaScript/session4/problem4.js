const numbers = [1, 2, 3, 4, 5, 7];
let sum = numbers.filter((ele) => ele%2 != 0).map((ele) => ele**2).reduce((a,c) => a+c,0)
console.log(sum)