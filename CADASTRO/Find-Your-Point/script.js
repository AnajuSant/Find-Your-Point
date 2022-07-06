let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let tituloForm = document.querySelector('#tituloForm')

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function cadastrar() {
    if (validNome && validEmail && validSenha && validCpf && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCadastrado: nome.value,
                emailCadastrado: email.value,
                senhaCadatrado: senha.value,
                cpfCadastrado: cpf.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        tituloForm.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = 'Cadatro realizado com sucesso!'
        msgError.setAttribute('style', 'display: none')
    } else {
        msgError.setAttribute('style', 'display: block')
        tituloForm.setAttribute('style', 'display: none')
        msgError.innerHTML = 'Erro ao realizar o cadastro Tente novamente!'
        msgSuccess.setAttribute('style', 'display: none')
    }
}

nome.addEventListener('keyup', () => {
    if (nome.value === '') {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border: 2px solid red')
        labelNome.innerHTML = '*Insira seu nome'
        validNome = false
    } else if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border: 2px solid red')
        labelNome.innerHTML = '*Insira no mínimo 3 caracteres'
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border: 2px solid green')
        labelNome.innerHTML = 'Nome de usuário'
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value === '') {
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border: 2px solid red')
        labelEmail.innerHTML = '*Insira seu email'
        validEmail = false
    } else if (!checkEmail(email.value)) {
        labelEmail.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border: 2px solid red')
        labelEmail.innerHTML = '*Insira um email válido'
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        email.setAttribute('style', 'border: 2px solid green')
        labelEmail.innerHTML = 'Email'
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value === '') {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border: 2px solid red')
        labelSenha.innerHTML = '*Insira sua senha'
        validSenha = false
    } else if (senha.value.length < 8) {
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border: 2px solid red')
        labelSenha.innerHTML = '*Necessário no mínimo 8 caracteres'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border: 2px solid green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true
    }
})

cpf.addEventListener('keyup', () => {
    if (cpf.value === '') {
        labelCpf.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border: 2px solid red')
        labelCpf.innerHTML = '*Insira seu CPF'
        validCpf = false
    } else if (cpf.value.length < 11) {
        labelCpf.setAttribute('style', 'color: red')
        cpf.setAttribute('style', 'border: 2px solid red')
        labelCpf.innerHTML = '*CPF inválido'
        validCpf = false
    } else {
        labelCpf.setAttribute('style', 'color: green')
        cpf.setAttribute('style', 'border: 2px solid green')
        labelCpf.innerHTML = 'CPF'
        validCpf = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (confirmSenha.value === '') {
        labelConfirmSenha.setAttribute('style', 'color: red')
        confirmSenha.setAttribute('style', 'border: 2px solid red')
        labelConfirmSenha.innerHTML = '*Insira a senha novamente'
        validConfirmSenha = false
    } else if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        confirmSenha.setAttribute('style', 'border: 2px solid red')
        labelConfirmSenha.innerHTML = '*Senha inválida'
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        confirmSenha.setAttribute('style', 'border: 2px solid green')
        labelConfirmSenha.innerHTML = 'Confirmação de senha'
        validConfirmSenha = true
    }
})


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'passwordconfirmSenha')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
