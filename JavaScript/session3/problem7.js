// Optional Chaining
//1 Basic Optional Chaining: Write a function getUserCity(user) that uses optional chaining to safely access the city property of the address object within a user object. Return undefined if the address or city is missing.
function getUserCity(user){
    return user.address?.city
}
console.log(getUserCity({address:{city:"nagpur"}}))
console.log(getUserCity({address:{}}))

//2 Optional Chaining with Arrays: Write a function getFirstFriend(user) that uses optional chaining to safely access the first friend in the friends array of a user object. Return undefined if the friends array is missing or empty.
function getFirstFriend(user){
    return user?.friend?.[0]
}
console.log(getFirstFriend({friend:["ram","pooja","punam"]}))
console.log(getFirstFriend())

//3 Optional Chaining with Nested Objects: Write a function getNestedProperty(obj) that uses optional chaining to safely retrieve a deeply nested property like obj.a.b.c.d.
function getNestedProperty(obj){
    return obj?.info?.address?.country?.state?.city
}
console.log(getNestedProperty({info:{address:{country:{state:{city:"Nagpur"}}}}}))
console.log(getNestedProperty())

//4 Optional Chaining with Default Values: Modify the previous function to return a default value like "Not Available" if the deeply nested property is undefined.
function getNestedProperty(obj){
    return obj?.info?.address?.country?.state?.city ?? "Not Available"
}
console.log(getNestedProperty({info:{address:{country:{state:{city:"Nagpur"}}}}}))
console.log(getNestedProperty())
