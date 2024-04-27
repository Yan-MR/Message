const mensagemInput = document.getElementById("mensagem-input");

mensagemInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    mensagem();
})

function mensagem(){
    document.getElementById("mensagem-output").innerHTML = mensagemInput.value;
    mensagemInput.value = "";
}