// Require é uma função que nos permite puxar um codigo de outro lugar

const dados = require('./cliente.json');
console.log(dados);
console.log(typeof dados); // Aqui vemos que dados esta em tipo object

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString); // Aqui vemos que os dados puxados e passados pelo stringify, são strings agora

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente); // Transformamos novamente em objeto
