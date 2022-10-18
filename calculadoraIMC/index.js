function calcular() {
    const peso = Number(document.getElementsByClassName("peso")[0].value);
    const altura = Number(document.getElementsByClassName("altura")[0].value);
    let resultado = document.getElementById("resultado");
    let texto = ``;
    let imc = peso / (altura * altura);

    if (imc < 15.99) texto = `Magreza Grave`, resultado.style.color = "green";
    

    else if (imc >= 16 && imc <= 16.99) texto = `Magreza Moderada`,resultado.style.color = "rgb(0, 170, 0)";

    else if (imc >= 17 && imc <= 18.5) texto = `Magreza Leve`,resultado.style.color = "rgb(0, 190, 0)";
    
    else if (imc >= 18.5 && imc <= 24.9) texto = `Saudável`,resultado.style.color = "rgb(0, 214, 0)" ;
    
    else if (imc >= 25 && imc <= 29.9) texto = `Sobrepeso`,resultado.style.color = "rgb(255, 230, 0)";
    
    else if (imc >= 30 && imc <= 34.9) texto = `Obesidade Grau 1`,resultado.style.color = "rgb(255, 174, 0)";
    
    else if (imc >= 35 && imc <= 39.9) texto = `Obesidade Grau 2 (Severa)`,resultado.style.color = "rgb(255, 145, 0)" ;
    
    else texto = `Obesidade Grau 3 (Mórbida)`,"rgb(216, 0, 0)" ;
    
    resultado.innerHTML = `IMC: ${imc.toFixed(2)}</br> ${texto}`

}