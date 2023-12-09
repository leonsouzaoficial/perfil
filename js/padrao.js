// posiciona o título
let título = document.getElementById("título")
let foto_de_perfil = document.getElementById("foto_de_perfil")

título.style.top = ((foto_de_perfil.clientHeight+25)-título.clientHeight)/2 + "px"
título.style.left = 30 + foto_de_perfil.clientWidth + "px"

// menu
let bt_menu = document.getElementById("bt_menu")
let menu = document.getElementById("menu")

bt_menu.addEventListener("mouseover", mudarImagemMenu())

function funçãoMenu () {
    if (menu.style.display == "block") {
        menu.style.display = "none"
    }

    else {
        menu.style.display = "block"
        
    }
}

function olharBtMenu () {
    if (menu.style.display == "block") {
        bt_menu.style.backgroundImage = "url(imagens/icone-menu-branco-clicado.png)"
    }

    else if (menu.style.display == "none") {
        bt_menu.style.backgroundImage = "url(imagens/icone-menu-branco.png)"
    }
}

function roda () {
    olharBtMenu()
    
    window.requestAnimationFrame(roda)
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

    roda()
}