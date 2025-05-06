// Object Shorthand
//1 Basic Object Shorthand: Write a function createPerson(name, age) that uses the shorthand property syntax to return an object with name and age.
function createPerson(name, age) {
    return { name, age }
}
console.log(createPerson("vivek", 22))

//2 Method Shorthand: Modify the createPerson function to include a method introduce() that logs a string introducing the person (e.g., "Hi, I'm John and I'm 30 years old."), using the method shorthand.
function createPerson(name, age) {
    let person = {
        name,
        age,
        introduce: function(){
            return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
        }
    }
    return person
}
console.log(createPerson("John", 30).introduce())

//3 Computed Property Names: Write a function createObject(key, value) that returns an object with a computed property using [key]: value syntax.
function createObject(key, value){
    return {[key]: value}
}
console.log(createObject("name","Rahul"))

//4 Object Shorthand with Destructuring: Write a function mergeObjects(obj1, obj2) that merges two objects using both object shorthand syntax and destructuring.
function mergeObjects(obj1, obj2){
    let mergeObj = {...obj1,...obj2}
    return mergeObj
}
console.log(mergeObjects({name:"Raj"},{age:22}))

//5 Advanced Shorthand Usage: Create a function updatePerson(oldPerson, newName) that updates only the name of a person object using object spread syntax and object shorthand.
function updatePerson(oldPerson, newName){
    let update = oldPerson.name = newName
    return oldPerson
}
console.log(updatePerson({name:"supriya",age:23}, "vivek"))