async function dadosUsuarios(id){
    let usuario = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(Object => Object['type'])
                           
    console.log(usuario)
}

dadosUsuarios(50)
