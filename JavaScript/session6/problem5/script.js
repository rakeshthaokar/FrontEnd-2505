let PrepForm = document.querySelector("#Preform")
let theme = document.querySelector("#theme")
let langauge = document.querySelector("#langauge")
let clearBtn = document.querySelector("#clear")

window.addEventListener("DOMContentLoaded", () => {
    let selectedTheme = localStorage.getItem("theme")
    let selectedLangauge = localStorage.getItem("langauge")
    if (selectedTheme) {
        theme.value = selectedTheme
        document.body.style.backgroundColor = selectedTheme === "dark" ? "#333" : "#fff"
    }
    if (selectedLangauge) {
        langauge.value = selectedLangauge
    }
})

PrepForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let selectTheme = theme.value
    let selectLangauge = langauge.value
    localStorage.setItem("theme", selectTheme)
    localStorage.setItem("langauge", selectLangauge)

    document.body.style.backgroundColor = selectTheme === "dark" ? "#333" : "#fff"
    alert("save Preference")
})

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    document.body.style = ""
    alert("clear preference")
})