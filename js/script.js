// centraliza o título na vertical
let título = document.getElementById("título_de_perfil")
let foto_de_perfil = document.getElementById("foto_de_perfil")

título.style.marginTop = (foto_de_perfil.clientHeight-título.clientHeight)/2+"px"

// esconde os botões do menu
let bt_menu = document.getElementById("bt_menu")
let menu_início = document.getElementById("menu_início")
let menu_carreira = document.getElementById("menu_carreira")
let menu_currículo = document.getElementById("menu_currículo")
let menu_redes_sociais = document.getElementById("menu_redes_sociais")
let menu_contato = document.getElementById("menu_contato")

menu_início.style.display = "none"
menu_carreira.style.display = "none"
menu_currículo.style.display = "none"
menu_redes_sociais.style.display = "none"
menu_contato.style.display = "none"

// posiciona o botão menu
let nav_menu = document.getElementById("nav_menu")

// função do botão de menu
function menuPrincipal () {
    if (menu_início.style.display == "none") {
        menu_início.style.display = "block"
        menu_carreira.style.display = "block"
        menu_currículo.style.display = "block"
        menu_redes_sociais.style.display = "block"
        menu_contato.style.display = "block"
    }

    else {
        menu_início.style.display = "none"
        menu_carreira.style.display = "none"
        menu_currículo.style.display = "none"
        menu_redes_sociais.style.display = "none"
        menu_contato.style.display = "none"
    }
}