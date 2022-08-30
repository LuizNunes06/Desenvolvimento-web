function calculo() {
    const a = document.getElementById("valorA").value
    const b = document.getElementById("valorB").value
    const c = document.getElementById("valorC").value

    let delta = (b * b) - 4 * a * c

    if (delta <= 0) {
        document.getElementById("resultado").innerHTML = `Delta negativo. Impossivel de calcular`

    } else {
        coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a)
        coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a)
        document.getElementById("resultado").innerHTML = `Delta: ${delta} </br>X1: ${coeficiente1}</br>X2: ${coeficiente2}`
    }


}