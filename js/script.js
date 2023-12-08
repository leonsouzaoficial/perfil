// centraliza o título na vertical
let título = document.getElementById("título_de_perfil")
let foto_de_perfil = document.getElementById("foto_de_perfil")

título.style.marginTop = (foto_de_perfil.clientHeight-título.clientHeight)/2+"px"

// verifica se a tela for grande, se sim mostra o menu
let menu_principal = document.getElementById("menu_principal")

function mostrarMenu () {
    if (window.innerWidth >= 600) {
        menu_principal.style.display = "block"
    }

    else {
        menu_principal.style.display = "none"
    }
}

// função do botão de menu
function menuPrincipal () {
    if (menu_principal.style.display == "none") {
        menu_principal.style.display = "block"
    }

    else {
        menu_principal.style.display = "none"
    }
}

// posiciona o main no centro
function posicionaMain () {
    let body = document.getElementById("body")
    let header = document.getElementById("header")
    let main = document.getElementById("main")

    let espaço_disponível = body.clientHeight - header.clientHeight

    let top = parseInt((espaço_disponível-main.clientHeight)/2)

    if (espaço_disponível > main.clientHeight) {
        main.style.marginTop = top + "px"
    }

    else {
        main.style.marginTop = "20px"
    }
}

// função que ativa quando a tela é carregada ou redimensionada
function iniciar () {
    mostrarMenu()
    posicionaMain()
}