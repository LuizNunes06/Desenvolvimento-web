let jogador = "X"

let placarX = 0
let placarO = 0
let jogadaAtual = 0

const casa1 = document.getElementById("casa1")
const casa2 = document.getElementById("casa2")
const casa3 = document.getElementById("casa3")
const casa4 = document.getElementById("casa4")
const casa5 = document.getElementById("casa5")
const casa6 = document.getElementById("casa6")
const casa7 = document.getElementById("casa7")
const casa8 = document.getElementById("casa8")
const casa9 = document.getElementById("casa9")


function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();
        verifica_ganhador();
        jogadaAtual ++
    }
}

function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O"
    } else {
        jogador = "X"
    }
}

function verifica_ganhador() {
    if (casa1.innerHTML != "" && casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML ||
        casa1.innerHTML != "" && casa1.innerHTML === casa4.innerHTML && casa1.innerHTML === casa7.innerHTML ||
        casa1.innerHTML != "" && casa1.innerHTML === casa5.innerHTML && casa1.innerHTML === casa9.innerHTML ||
        casa2.innerHTML != "" && casa2.innerHTML === casa5.innerHTML && casa2.innerHTML === casa8.innerHTML ||
        casa3.innerHTML != "" && casa3.innerHTML === casa6.innerHTML && casa3.innerHTML === casa9.innerHTML ||
        casa3.innerHTML != "" && casa3.innerHTML === casa5.innerHTML && casa3.innerHTML === casa7.innerHTML ||
        casa4.innerHTML != "" && casa4.innerHTML === casa5.innerHTML && casa4.innerHTML === casa6.innerHTML ||
        casa6.innerHTML != "" && casa6.innerHTML === casa7.innerHTML && casa6.innerHTML === casa9.innerHTML) {
        if (jogadaAtual % 2 == 0){
            alert(`O vencedor é o X`)
            placarX ++
        }else{
            alert(`O vencedor é o O`)
            placarY ++
    }
    }
}
