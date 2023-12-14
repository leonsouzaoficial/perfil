//let div_currículo = document.getElementById("currículo")
//let img_foto_do_perfil = document.getElementById("foto_de_perfil")
let div_título = document.getElementById("título")


// posiciona o título
function posicionarTítulo () {
    div_título.style.marginTop = -150 + "px"
}

function principal () {
    posicionarTítulo()

    requestAnimationFrame(principal)
}

principal()
alert("ok")