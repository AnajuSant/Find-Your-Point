let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let email = document.querySelector('#email')
    let emailLabel = document.querySelector('#emailLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')

    let listaEmail = []

    let emailValid = {
        email: '',
        nome: '',
        senha: ''
    }

    listaEmail = JSON.parse(localStorage.getItem('listUser'))

    listaEmail.forEach((item) => {
        if (email.value == item.emailCadastrado && senha.value == item.senhaCadatrado) {
            emailValid = {
                email: item.emailCadastrado,
                nome: item.nomeCadastrado,
                senha: item.senhaCadatrado
            }
        }
    })

    if (email.value == emailValid.email && senha.value == emailValid.senha) {

        window.location.href = 'https://anajusant.github.io/Find-Your-Point/index.html'

    } else {
        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border: 2px solid red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border: 2px solid red')
        tituloForm.setAttribute('style', 'display: none')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Email ou senha incorretos'
        email.focus()
    }

}