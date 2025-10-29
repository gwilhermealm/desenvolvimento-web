

const lista = document.getElementById('lista-tarefas');
const textinput = document.getElementById('inputtext');
const btnadicionar = document.getElementById('adc');
const btnlimpar = document.getElementById('limpar')

// Adicionando nova tarefa
btnadicionar.addEventListener("click", () => {
    let novatarefa = textinput.value;
    let li_nova = document.createElement('li');
    li_nova.textContent = novatarefa;
    lista.appendChild(li_nova);
    textinput.value = "";
    //botoes da nova tarefa

    //botao editar
    let btneditar = document.createElement('button')
    btneditar.classList.add("editar")//adiciona classe ao botao
    btneditar.textContent ="editar"
    li_nova.appendChild(btneditar)

    //botao concluir
    let btnconcluir = document.createElement('button')
    btnconcluir.textContent = "concluir"
    li_nova.appendChild(btnconcluir)
    btnconcluir.classList.add("concluir")//adiciona classe ao botao

    //bota apagar
    let btnapagar = document.createElement('button')
    btnapagar.classList.add("apagar")//adiciona classe ao botao
    btnapagar.textContent = "apagar"
    li_nova.appendChild(btnapagar)

    //botoes mudar ordem das tarefas 
    //botao subir
    let btnsubir = document.createElement('button')
    btnsubir.textContent='👆'
    li_nova.appendChild(btnsubir)
    btnsubir.classList.add("subir")//adiciona classe ao botao
    //botao descer
    let btndescer = document.createElement('button')
    btndescer.textContent='👇'
    li_nova.appendChild(btndescer)
    btndescer.classList.add("descer")//adiciona classe ao botao



    //eventos dos botoes
    //editar
    btneditar.addEventListener("click", () => {
     
     let novoTexto = prompt("Editar tarefa:");
     li_nova.firstChild.textContent = novoTexto;

   
    })
    //concluir
    btnconcluir.addEventListener("click", () => {
    li_nova.style.color = "green";
})

   // botao apagar
   btnapagar.addEventListener("click", () => {
    lista.removeChild(li_nova);
})
  //botao subir
  btnsubir.addEventListener("click", ()=>{
      if (li_nova.previousElementSibling) {
            lista.insertBefore(li_nova, li_nova.previousElementSibling);
        }
  })
  //botao descer
   btndescer.addEventListener("click", () => {
        if (li_nova.nextElementSibling) {
            lista.insertBefore(li_nova.nextElementSibling, li_nova);
        }
    })
        
})



// Limpar lista
btnlimpar.addEventListener("click", () => {
    lista.innerHTML = "";
});