const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
let filterImg = filePaths.filter(ele => {
    let image = ele.includes(".jpg") || ele.includes(".png")
    return image
})
console.log(filterImg)  