const result = document.querySelector('#result')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcRet = () => {
    if (altura.value != '' && altura.value != '') {
        const imc = (peso.value / (altura.value ** 2)).toFixed(2)
        let classification = '';
        if (imc < 15.99) {
            classification = "Magreza Grave";
        } else if (imc >= 16 && imc <= 16.99) {
            classification = "Magreza Moderada";
        } else if (imc >= 17 && imc <= 18.5) {
            classification = "Magreza Leve";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classification = "Saudável";
        } else if (imc >= 25 && imc <= 29.9) {
            classification = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            classification = "Obesidade Grau I";
        } else if (imc >= 35 && imc <= 39.9) {
            classification = "Obesidade Grau II (Severa)";
        } else {
            classification = "Obesidade Grau III (Mórbida)";
        }

        result.innerHTML = `IMC: ${imc} (${classification})`
    } else {
        result.innerHTML = `Preencha osCAMPOS`
    }
}