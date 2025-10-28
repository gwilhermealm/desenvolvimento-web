

const btneditar = document.getElementById('btnedit');
const lista = document.getElementById('lista-tarefas');
const li_text = document.getElementById('li1');
const btnapg = document.getElementById('btnapagar');
const btnconcluir = document.getElementById('btnconcluir')
const btnlimpar = document.getElementById('limpar')
const textinput = document.getElementById('inputtext')
const btnadicionar = document.getElementById('adc')


//editar tarefa

btneditar.addEventListener("click",()=>{
    li_text.textContent="nova tarefa"
})
//removendo tarefa
btnapg.addEventListener("click",()=>{
    lista.removeChild(li_text)
})
// concluindo tarefa
btnconcluir.addEventListener("click",()=>{
    li_text.style.color="green";
})
//adicionando nova tarefa
btnadicionar.addEventListener("click",()=>{
    let novatarefa = textinput.value
    let li_nova = document.createElement('li')
    li_nova.textContent = novatarefa
    lista.appendChild(li_nova)
})
