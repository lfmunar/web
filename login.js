const $submit = document.getElementById("submit")
const $contraseña = document.getElementById("contraseña")
const $usuario = document.getElementById("usuario")
const $visible = document.getElementById("visible")

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($contraseña.value !== "" && $usuario.value !== ""){
            e.preventDefault();
            window.location.href = "index.html";
        }
    }
})

