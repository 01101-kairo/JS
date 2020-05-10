var n1, op, n2, cau;
document.getElementById('p').innerText = "-------------------------------------\n\n" + "===========[CAUCULADORA]==========\n \n [+] [-] [*] [/]\n\n " + "------------------------------------\n\n"

function acaoBotao() {
    n1 = prompt("Digite o primeiro valor: ")
    op = prompt("operador:")
    n2 = prompt("Digite o segundo valor: ")
    switch (op) {
        case "+":
            cau = (parseInt(n1) + parseInt(n2))
            document.getElementById('cau').innerText = "\n\n[ " + n1 + " + " + n2 + " = " + cau + " ]"
            break;

        case "*":
            cau = (parseInt(n1) * parseInt(n2))
            document.getElementById('cau').innerText = "\n\n[ " + n1 + " * " + n2 + " = " + cau + " ]"
            break;

        case "-":
            cau = (parseInt(n1) - parseInt(n2))
            document.getElementById('cau').innerText = "\n\n[ " + n1 + " - " + n2 + " = " + cau + " ]"
            break;

        case "/":
            cau = (parseInt(n1) / parseInt(n2))
            document.getElementById('cau').innerText = "\n\n[ " + n1 + " / " + n2 + " = " + cau + " ]"
            break;
        default:
            document.getElementById('cau').innerText = "\n\n [ERRO] : opreração não indentificada tente novamente com algum desses operadores [+] [-] [*] [/]\n\n "
            break;
    }
}