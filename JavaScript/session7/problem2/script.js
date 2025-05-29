let inputMovie = document.querySelector("#movieName")
let searchBtn = document.querySelector("#search")
let container = document.querySelector("#container")

searchBtn.addEventListener("click", () => {
    container.innerHTML = ""
    let TextMovie = inputMovie.value
    fetch(`http://www.omdbapi.com/?apikey=a9472a78&t=${TextMovie.trim()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            displayMovie(data)
        })
        .catch((error) => {
            console.log(error)
        })

        let displayMovie = (data) => {
            let image = document.createElement("img")
            let title = document.createElement("h3")
            let releasedDate = document.createElement("h4")
            let rating = document.createElement("p")

            image.src = data.Poster
            title.innerText = `Title: ${data.Title}`
            releasedDate.innerText = `Released Date: ${data.Released}`
            rating.innerText = `Rating: ${data.Ratings[0].Value}`

            container.append(image,title,releasedDate,rating)
        }
})