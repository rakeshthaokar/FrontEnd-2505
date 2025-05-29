let container = document.querySelector("#container")
fetch("https://fakestoreapi.com/Products")
.then((response) => response.json())
.then((data) => {
    displayData(data)
})
.catch((error) => {
    console.log(error)
})

let displayData = (data) => {
    data.forEach((product) => {
        let div = document.createElement("div")
        let productImg = document.createElement("img")
        let title = document.createElement("h4")
        let price = document.createElement("p")

        productImg.src = product.image
        title.innerText = product.title
        price.innerText = `USD: ${product.price}`

        div.append(productImg,title,price)
        container.append(div)
    })
}
