const usuario = document.getElementById("nome-criar")
const email = document.getElementById("email-criar")
const senha = document.getElementById("senha-criar")
const submit = document.getElementById("submit")
const alerta = document.getElementById("alerta")

var dados = JSON.parse(localStorage.getItem("Usuarios_Y")) || []

function validar(){
    for(count in dados){
        if(usuario.value == dados[count].Nome || email.value == dados[count].Email){
            alerta.innerHTML = "Este usuario já existe"
            alerta.style.color = 'white'
            return
        }
        
    }
    cadastrar()
}

function cadastrar(){
    dados.push({
        Nome: usuario.value,
        Email: email.value,
        Senha: senha.value
    })
    localStorage.setItem("Usuarios_Y", JSON.stringify(dados))
    location.reload()
}

console.log(dados)
    submit.addEventListener('click', validar)
console.log(controle_alerta)