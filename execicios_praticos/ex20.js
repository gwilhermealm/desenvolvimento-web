const usuarios = [
{ nome: 'Carlos', ativo: true },
{ nome: 'Beatriz', ativo: false },
{ nome: 'Daniela', ativo: true }
];

function verificar(lista) {
  return lista.filter((usuario) => usuario.ativo === true);
}

const usuariosAtivos = verificar(usuarios);
console.log(usuariosAtivos);
