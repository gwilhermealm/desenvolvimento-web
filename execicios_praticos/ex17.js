function  criarOperacao(operador){
    
    if(operador=== "+"){
        return function(n1,n2){
              return n1+n2
        }
            
    }else if(operador === "*"){
       return function (n1,n2){
             return n1*n2
        }
      
    }
}
const somar = criarOperacao("+")
const multiplicar = criarOperacao("*")
console.log(multiplicar(5,3))