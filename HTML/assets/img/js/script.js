

/*
por Tag: getElementyByName()
por Id: getElementyById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let coment = document.querySelector('#coment')
let nomeOk = false
let emailOk = false
let comentOk = false

nome.style.width = '100%'
email.style.width = '100%'
coment.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <= 2) {
        txtNome.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Invalido'
        txtEmail.style.color = 'red'

    }else {
        txtEmail.innerHTML = ''
        emailOk = true

    }
}

function validaComent(){
    let txtComent = document.querySelector('#txtComent')

    if(coment.value.length >= 100){
        txtComent.innerHTML = 'Limite de 100 caracteres atingido!'
        txtComent.style.color = 'red'
    } else {
        txtComent.style.display = 'none'
        comentOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && comentOk == true) {
        alert ('Formulario enviado com sucesso!')
    } else ('Preencha corretamente todos os campos')
}

