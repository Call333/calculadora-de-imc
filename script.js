const calc = document.getElementById("calculate");


function imc(){
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const painelResult = document.getElementById("result")

    if(name === "" || height === "" || weight === ""){

        painelResult.textContent = "Preencha Todos os campos!"

    } else {
        
        let classify = "";

        // calculo do IMC
        const valorIMC = (weight / height**2).toFixed(1);
        // calculo do IMC     

        // condições da classicação 
        if (valorIMC < 18.5) {
            classify = "Você está abaixo do peso.";
        } else if (valorIMC >= 18.6 && valorIMC <= 24.9) {
            classify = "Você está com o peso normal. Parabéns!";
        } else if (valorIMC >= 25 && valorIMC <= 29.9) {
            classify = "Você está acima do peso.";
        } else if (valorIMC >= 30 && valorIMC <= 34.9) {
            classify = "Você está com obesidade grau I!";
        } else if (valorIMC >= 35 && valorIMC <= 39.9) {
            classify = "Você está com obesidade grau II!!"
        } else {
            classify = "Você está com obesidade grau III!!!"
        }
        // condições da classificação

        // exibição do resultado no painel
        if( valorIMC >= 25 && valorIMC <= 29.9) {
            painelResult.innerHTML = `${name}, o seu IMC é ${valorIMC}. ${classify} <div style="color: #ffa31a;">Tome cuidado!!!</div> ` ;
        } else if( valorIMC > 30) {
            painelResult.innerHTML = `${name}, o seu IMC é ${valorIMC}. ${classify} <div style="color: #e60000;">Altos riscos a sua saúde!!!</div> `;
        } else {
           painelResult.innerHTML = `${name}, o seu IMC é ${valorIMC}. ${classify}  `; 
        }
        // exibição do resultado no painel
    }
}
// escutador de evento que aciona a função no input calcular
calc.addEventListener('click', imc);