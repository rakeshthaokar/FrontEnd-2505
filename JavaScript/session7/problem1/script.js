let = container = document.querySelector("#container")

fetch("https://fakestoreapi.com/products")
.then((response) => {
    return response.json()
})
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
        let title = document.createElement("h3")
        let price = document.createElement("h4")
        let rating = document.createElement("p")

        productImg.src = product.image
        title.innerText = product.title
        price.innerText = `USD: $${product.price}`
        rating.innerText = `rate: ${product.rating.rate}`
        
        div.append(productImg,title,price,rating)

        container.append(div)
    })
}

