let menuForHelp = document.getElementById("menu-for-help")
let menuForLanguage = document.getElementById("menu-for-language")

function openHelpMenu() {
    if (menuForLanguage.style.display === "block") {
        menuForLanguage.style.display = "none"
    }

    if (menuForHelp.style.display === "block") {
        menuForHelp.style.display = "none"
        return
    }
    menuForHelp.style.display = "block"
}

function openLanguageMenu() {
    if (menuForHelp.style.display === "block") {
        menuForHelp.style.display = "none"
    }

    if (menuForLanguage.style.display === "block") {
        menuForLanguage.style.display = "none"
        return
    }
    menuForLanguage.style.display = "block"
}
