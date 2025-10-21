
let brasil = document.querySelector('#1').value
let argentina = document.querySelector('#2').value
let afeganistao =document.querySelector('#3').value
let seletor =document.querySelector('#seletor').value
let res =document.querySelector('#res').value




async function nomes(id) {
  const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${id}`)
   if (!resposta.ok) {
    throw new Error(`Erro na API: ${resposta.status} ${resposta.statusText}`);
  }
  const dados = await resposta.json()
  return dados[0].nome.abreviado
}


