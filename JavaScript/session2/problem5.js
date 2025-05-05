// Switch Case
//1 Basic Switch Case: Write a function getDayOfWeek(dayNumber) that uses a switch case to return the name of the day based on the number (1 for Monday, 2 for Tuesday, etc.).
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturady")
            break
        case 7:
            console.log("Sunday")
            break
        default:
            console.log("Invalid Day")
    }
}
getDayOfWeek(2)
getDayOfWeek(8)

//2 Switch with Fall-through: Modify the previous function so that if the day number is 6 or 7, it returns "Weekend." Ensure that case 6 falls through to case 7 to return the same result.
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
        case 7:
            return "Weekend"
        default:
            return "Invalid day"
    }
}
console.log(getDayOfWeek(6))
console.log(getDayOfWeek(7))