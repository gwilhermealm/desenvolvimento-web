//O laço For Of
//Ele permite que você faça um loop em estruturas de dados iteráveis, como matrizes, strings, mapas, listas de nós e muito mais:

//Sintaxe
//for (variable of iterable) {
  // code block to be executed
//variável - A cada iteração, o valor da próxima propriedade é atribuído à variável. A variável pode ser declarada com const, let, ou var.

//iterável - Um objeto que tem propriedades iteráveis.

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text)