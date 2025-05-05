// While Loop
//1 Basic While Loop: Write a while loop that logs numbers from 1 to 5. Stop the loop once the number reaches 5.
let i = 1
while (i <= 5) {
    console.log(i)
    i++
}

//2 While Loop with Condition: Write a function countDownFrom(n) that uses a while loop to count down from n to 0 and logs each number.
function countDownFrom(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}
countDownFrom(5)

//3 While Loop with Break Condition: Write a function findFirstEven(numbers) that uses a while loop to iterate over an array of numbers and returns the first even number. Use a break statement to exit the loop once the even number is found.
function findFirstEven(numbers) {
    let i = 0
    let firstEven = null
    while (i < numbers.length) {
        if(numbers[i]%2 === 0){
            firstEven = numbers[i]
            break
        }
        i++
    }
    return firstEven
}
console.log(findFirstEven([1, 2, 5, 6, 7, 8]))