import { Modal } from './modal.js'
import { AlertError } from './alert-error.js';
import { IMC, notAnumber } from './utils.js';

// capturando elementos HTML e atribuir a variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height')



form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notAnumber(weight) || notAnumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()