const user = document.getElementById("nome-criar")
const pass = document.getElementById("senha-criar")
const botao = document.getElementsByClassName("login")[0]
const aviso = document.getElementById("alerta")

const data = JSON.parse(localStorage.getItem("Usuarios_Y")) || []

function login (){
    let userCad
    let passCad

    for (pos in data){
        if(user.value == data[pos].Nome){
            userCad = data[pos].Nome
            passCad = data[pos].Senha
            break
        }
    }
    
    if(userCad == user.value && passCad == pass.value){
        window.location.href = "html/inicial.html"
        aviso.style.display = "none"
    }else{
        aviso.innerHTML = "Usuario ou senha incorreto"
        aviso.style.color = "white"
    }

}
botao.addEventListener("click", login)