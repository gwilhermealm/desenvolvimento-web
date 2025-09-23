





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


const senhaParaTestar = "Minh1n@";
if (validar(senhaParaTestar)) {
    console.log("Senha válida!");
} else {
    console.log("Senha inválida! senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.");
}