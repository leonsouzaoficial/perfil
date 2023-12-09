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

// função do main
function tamanhoMain () {
    let espaço_disponível = window.innerHeight - (header.clientHeight + footer.clientHeight)

    main.style.minHeight = espaço_disponível - 20 + "px"

    // posiciona no meio
    let conteúdo = document.getElementById("conteúdo")
    conteúdo.style.marginTop = (main.clientHeight - conteúdo.clientHeight) / 2 + "px"
}

// função que ativa quando a tela é carregada ou redimensionada
function iniciar () {
    mostrarMenu()
    tamanhoMain()
}