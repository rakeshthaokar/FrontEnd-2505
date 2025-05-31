let container = document.querySelector("#container")
let filters = document.querySelector("#filters")

let product = []
fetch("http://localhost:8080/Product")
    .then((res) => res.json())
    .then((data) => {
        product = data
        displayData(product)
    })
    .catch((error) => {
        console.log(error)
    })

let displayData = (data) => {
    container.innerHTML = ""
    data.forEach((item) => {
        let div = document.createElement("div")
        div.innerHTML = `
        <img src="${item.image}">
        <h3>${item.title}</h3>
        <p>USD: $${item.price}</p>
    `
        container.append(div)
    })
}

let selectFilter = document.createElement("select")
selectFilter.innerHTML = `
    <option value="all">All Category</option>
    <option value="electronics">Electronics</option>
    <option value="jewelery">Jewelery</option>
    <option value="men's clothing">Men's Clothing</option>
    <option value="women's clothing">Women's Clothing</option>
`
let selectSort = document.createElement("select")
selectSort.innerHTML = `
    <option value="">Sort By</option>
    <option value="low-to-high">Price Low to High</option>
    <option value="high-to-low">Price High to Low</option>
`
filters.append(selectFilter, selectSort)

selectFilter.addEventListener("change",(event) => filterData(event.target.value))
let filterData = (category) => {
    if(category == "all"){
        displayData(product)
        return
    }
    let filteredData = product.filter((item) => {
        return item.category === category
    })
    displayData(filteredData)
}

selectSort.addEventListener("change", (event) => sortData(event.target.value))
let sortData = (order) => {
    let sortedData
    if(order === "low-to-high"){
        sortedData = product.sort((a,b) => a.price - b.price)
    }
    else if(order === "high-to-low"){
        sortedData = product.sort((a,b) => b.price - a.price)
    }
    displayData(sortedData)
}