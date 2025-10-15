async function nomes(id) {
  const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${id}`)
   if (!resposta.ok) {
    throw new Error(`Erro na API: ${resposta.status} ${resposta.statusText}`);
  }
  const dados = await resposta.json()
  return dados;
}

nomes("invalido").then(apiOk => {
  console.log(apiOk)
})
.catch(apiErro => {
    console.log("falha ao executar chamada",apiErro.message)
}
);