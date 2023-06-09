export const Modal = {

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

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}