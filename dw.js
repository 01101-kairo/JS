function acaoBotao() {
    var sl, v1, v2
    do {
        v1 = prompt("v1:")
        v2 = prompt("v2:")
        document.getElementById('p').innerText = "Resultado:" + (parseInt(v1) + parseInt(v2))
        sl = prompt("DESEJA SAIR: ")
    } while (sl != "s")
}