function processarLista(lista, callback) {
    let total = 0;
    for (const x of lista) {
        total++;
    }
    return callback(total)
}

function totalDeCarros(estoque) {
    console.log(`Total de carros no estoque: ${estoque
    }`)
}
const carros = ["gol", "polo", "hb20", "onix"];

processarLista(carros, totalDeCarros)