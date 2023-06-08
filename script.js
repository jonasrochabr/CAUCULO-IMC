// capturando elementos HTML e atribuir a variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-warpper')
const modalMessage = document.querySelector('.result-imc')
const btnClose = document.querySelector('.close')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    console.log(result)
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}