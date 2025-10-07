//funçoes aninhada (closure simples)


  function  geradorSaudacao(saudacaoinicial){
      
    
    return function saudar (nome){

        return saudacaoinicial + nome

    }
}
const saudacao = geradorSaudacao("ola,")

console.log(saudacao("alice"))