





function validar(senha) {
    const caractere = ['!','@','#', '%', '&','$']
    let temNumero = false
    let temLetraMaiuscula = false
    let temCaractere = false
    if(senha.length < 8){
        return false
    }

    for(let i=0; i< senha.length; i++){
        const caractereEs = senha[i]
        if(caractereEs >= 'A' && caractereEs <='z'){
            temLetraMaiuscula = true  
        }else if(caractereEs >= '0' && caractereEs <='9'){
            temNumero = true
        } else if(caractere.includes(caractereEs)){
            temCaractere = true
        }
    }
    return temCaractere && temLetraMaiuscula && temNumero
}

function validarsenha(){
 let senhaUsuario = document.getElementById("suasenha").value;
 let resultado = document.getElementById("res");
 let r1 = document.getElementById("r1");
 let r2 = document.getElementById("r2");
 let r3 = document.getElementById("r3");
 let r4 = document.getElementById("r4");

 
 if (validar(senhaUsuario)) {
     resultado.style.color = "green";
     resultado.innerHTML = "Senha válida!";
     
 } else if (validar(senhaUsuario) === false){
     resultado.style.color = "red";
     resultado.innerHTML = "Senha inválida! ";
      
 }
      r1.style.color = senhaUsuario.length <= 8 ? "red" : "green";-
      r2.style.color = /[A-Z]/.test(senhaUsuario) ? "green" : "red";
      r3.style.color = /[0-9]/.test(senhaUsuario) ? "green" : "red";
      r4.style.color = /[!@#%&$]/.test(senhaUsuario) ? "green" : "red";

}