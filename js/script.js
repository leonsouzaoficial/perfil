// objetos
let body = document.getElementById("body")
let header = document.getElementById("header")
let main = document.getElementById("main")
let footer = document.getElementById("footer")

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
    let espaço_disponível = body.clientHeight - header.clientHeight - footer.clientHeight

    if (espaço_disponível > main.clientHeight) {
        let top = parseInt((espaço_disponível-main.clientHeight)/2)

        if (menu_principal.style.display == "none") {
            main.style.marginTop = top + "px"
        }

        else {
            main.style.marginTop = top + menu_principal.clientHeight + "px"
        }
    }

    else {
        main.style.marginTop = "20px"
    }
}

// posiciona o footer
function posicionaFooter () {
    if (body.clientHeight > window.innerHeight) {
        body.style.height = ""
        body.style.width = ""
        footer.style.width = "calc(100% - 20px)"
    }

    else {
        body.style.width = "100vw"
        body.style.height = "100vh"
        footer.style.position = "absolute"
        footer.style.width = "calc(100% - 20px)"

        footer.style.top = body.clientHeight - footer.clientHeight - 20 + "px"
    }
}

// função que ativa quando a tela é carregada ou redimensionada
function iniciar () {
    mostrarMenu()
    posicionaMain()
    posicionaFooter()
}