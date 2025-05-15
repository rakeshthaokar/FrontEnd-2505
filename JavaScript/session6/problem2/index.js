let usersData = [
    {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
    },
    {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
    },
    {
        id: 6,
        email: "tracey.ramos@reqres.in",
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
    },
];
let userContainer = document.getElementById("userContainer")
// function userinfo(usersData){
//     for(let user of usersData){
//         let userCard = document.createElement("div")
//         userCard.className = "userCard"
//         userCard.innerHTML = `
//         <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
//         <h2>${user.first_name} ${user.last_name}</h2>
//         <p>${user.email}</p>
//         `
//         userContainer.append(userCard)
//     }
// }
// userinfo(usersData)

function userInfo(usersData) {
    for (let user of usersData) {
        let userCard = document.createElement("div")
        userCard.className = "userCard"

        let img = document.createElement("img")
        img.setAttribute("src",`${user.avatar}`)
        img.setAttribute("alt",`${user.first_name} ${user.last_name}`)

        let h2tag = document.createElement("h2")
        h2tag.textContent = `${user.first_name} ${user.last_name}`

        let ptag = document.createElement("p")
        ptag.textContent = `${user.email}`

        userCard.append(img,h2tag,ptag)

        userContainer.append(userCard)
    }
}
userInfo(usersData)