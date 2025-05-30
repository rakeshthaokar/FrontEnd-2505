let InputMovie = document.querySelector("#inputText")
let SearchBtn = document.querySelector("#searchBtn")
let Container = document.querySelector("#container")

SearchBtn.addEventListener("click",() => {
    Container.innerHTML = ""
    let movieName = InputMovie.value
    fetch(`https://www.omdbapi.com/?apikey=a9472a78&s=${movieName.trim()}`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        displayData(data.Search)
    })
    .catch((error) => {
        console.log(error)
    })

    function displayData(data){
        data.forEach((movie) => {
            let div = document.createElement("div")
            let movieImg = document.createElement("img")
            let title = document.createElement("h3")
            let releasedYear = document.createElement("h4")

            movieImg.src = movie.Poster
            title.innerText = `Title: ${movie.Title}`
            releasedYear.innerText = `Released-Year: ${movie.Year}`

            div.append(movieImg,title,releasedYear)

            Container.append(div)
        })
    }
    InputMovie.value = ""
})