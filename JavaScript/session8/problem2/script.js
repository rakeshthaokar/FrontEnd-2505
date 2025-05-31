let filters = document.querySelector("#filters")
let container = document.querySelector("#container")

let product = []
fetch("http://localhost:9090/products")
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
            <img src="${item.thumbnail}">
            <h3>${item.title}</h3>
            <p>USD: $${item.price}</p>
        `
        container.append(div)
    })
}

let selectFilter = document.createElement("select")
selectFilter.innerHTML = `
    <option value="all">All Category</option>
    <option value="beauty">Beauty</option>
    <option value="fragrances">Fragrances</option>
    <option value="furniture">Furniture</option>
    <option value="groceries">Groceries</option>
`
let selectSort = document.createElement("select")
selectSort.innerHTML = `
    <option value="">Sort By</option>
    <option value="low-to-high">Price Low to Hight</option>
    <option value="high-to-low">Price High to Low</option>
`
filters.append(selectFilter,selectSort)

selectFilter.addEventListener("change",(event) => filterData(event.target.value))
let filterData = (category) => {
    if(category === "all"){
        displayData(product)
        return
    }
    let filteredData = product.filter((item) => {
        return item.category == category
    })
    displayData(filteredData)
    
}

selectSort.addEventListener("change",(event) => sortData(event.target.value))
let sortData = (order) => {
    let sortedData
    if(order === "low-to-high"){
        sortedData = product.sort((a,b) => {
            return a.price - b.price
        })
    }
    else if(order === "high-to-low"){
        sortedData = product.sort((a,b) => {
            return b.price - a.price
        })
    }
    displayData(sortedData)
}