const modal = document.getElementById("1modal")
const btn_cadastro = document.getElementById("TrigModal")
const btn_login = document.getElementById("TrigModal_login")
const span = document.getElementsByClassName("fechar")[0]
const email_modal = document.getElementById("email-criar")
const title = document.getElementById("title")
const log_cad = document.getElementById("submit")


function TrigModal(){
    modal.style.display = "block"
}

function show(){
    title.innerHTML = "Crie Sua Conta"
    email_modal.style.display = "block"
    log_cad.innerHTML = "Cadastrar"
    
}

function hide(){
    title.innerHTML = "Bem vindo de volta"
    email_modal.style.display = "none"
    log_cad.innerHTML = "Log in"
    
}

function cad(){
    show()
    TrigModal()
 
}

function log(){
    hide()
    TrigModal()

}

span.onclick = function(){
    modal.style.display = "none"
}

window.onclick = function(event){
    if (event.target == modal){ 
        modal.style.display == "none"
    }
 
}

btn_cadastro.addEventListener("click", cad)
btn_login.addEventListener("click", log)
