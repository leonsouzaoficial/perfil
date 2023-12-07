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

// função que ativa quando a tela é carregada ou redimensionada
function iniciar () {
    mostrarMenu()
}