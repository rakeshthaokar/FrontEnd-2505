const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  let palindromesString = words.filter(ele => {
    let reverse = ele.split("").reverse().join("")
    if(ele == reverse){
        return ele
    }
  })
  console.log(palindromesString)