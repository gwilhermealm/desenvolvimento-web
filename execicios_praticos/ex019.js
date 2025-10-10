//Usando Array.map() com Callback:
const precos =[10.5, 25.99,150.00]
const aumentoPrecos = precos.map(aumento)

function aumento(num){
    return num*1.1
}
console.log(aumentoPrecos)