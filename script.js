// capturando elementos HTML e atribuir a variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height')



//Responsável por abrir e fechar o modal
const Modal = {

    Wrapper: document.querySelector('.modal-warpper'),
    message: document.querySelector('.result-imc'),
    buttonClose: document.querySelector('.close'),

    open() {
        Modal.Wrapper.classList.add('open')
    },
    close() {
        Modal.Wrapper.classList.remove('open')
    }
}


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}