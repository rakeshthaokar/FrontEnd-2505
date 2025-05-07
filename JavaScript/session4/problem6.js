const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
let newObj = strings.reduce((acc,curr) => {
    if(!acc[curr]){
        acc[curr] = 1
    }
    else{
        acc[curr]++
    }
    return acc
},{})  
console.log(newObj)