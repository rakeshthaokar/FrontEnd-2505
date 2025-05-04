//For Loop
//1 Basic For Loop: Write a for loop that iterates over numbers from 1 to 10 and logs each number to the console.
for(let i=1; i<=10; i++){
    console.log(i)
}

//2 For Loop with Array: Write a function printArrayElements(arr) that uses a for loop to iterate over an array of strings and logs each element
function printArrayElements(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}
printArrayElements(["apple","banana","cherry","mango"])

