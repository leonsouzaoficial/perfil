// posiciona o título
let título = document.getElementById("título")
let foto_de_perfil = document.getElementById("foto_de_perfil")

título.style.top = ((foto_de_perfil.clientHeight+25)-título.clientHeight)/2 + "px"
título.style.left = 30 + foto_de_perfil.clientWidth + "px"

// menu
let bt_menu = document.getElementById("bt_menu")
let menu = document.getElementById("menu")

function funçãoMenu () {
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }

    else {
        menu.style.display = "block"
    }
}

function início () {
    // esconde ou não o menu
    if (window.innerWidth > window.innerHeight) {
        menu.style.display = "block"
        bt_menu.style.display = "none"
    }

    else {
        menu.style.display = "none"
        bt_menu.style.display = "block"
    }
}