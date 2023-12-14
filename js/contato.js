let div_currículo = document.getElementById("currículo")
let img_foto_do_perfil = document.getElementById("foto_de_perfil_currículo")
let div_título = document.querySelector("div#título")


// posiciona o título
function posicionarTítulo () {
    div_título.style.marginTop = "-150px"
    div_título.style.marginLeft = "165px"
    div_título.style.width = (div_currículo.clientWidth - img_foto_do_perfil.clientWidth - 40) + "px"
}

// posiciona o botão
function posicionarBotão () {
    let bt = document.getElementById("bt_imprimir")

    bt.style.marginLeft = (div_currículo.clientWidth-bt.clientWidth)/2 + "px"
}

function imprimir () {
    print()
}

function principal () {
    posicionarTítulo()
    posicionarBotão()

    requestAnimationFrame(principal)
}

principal()