const cliente = {
    nome: 'Danilo',
    idade: 28,
    cpf: '11122233344',
    email: 'danilo@servidor.com'
};

console.log(`O nome do cliente é ${cliente.nome} e seu email é ${cliente.email} e os 
3 primeiros digitos de seu CPF são: ${cliente.cpf.substring(0, 3)}`);