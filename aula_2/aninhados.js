const cliente = {
    nome: 'Danilo',
    idade: 28,
    email: 'danilo@servidor.com',
    telefone: ['11999998888', '1144445555']
};

// Criar uma nova prorpiedade ao nosso objeto:
cliente.endereco = {
    rua: 'Av. Tenente Negrão',
    numero: 140,
    apartamento: true,
    complemento: '13º'
}; // Ciamos um novo onj, dentro do nosso objeto cliente

console.log(cliente);
console.log(cliente.endereco); // Acessando apenas o objeto endereço