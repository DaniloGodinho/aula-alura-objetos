const cliente = {
    nome: 'Danilo',
    idade: 28,
    cpf: '11122233344',
    email: 'danilo@servidor.com'
};

// console.log(`O nome do cliente é ${cliente['nome']} e seu email é ${cliente['email']} e os 
// 3 primeiros digitos de seu CPF são: ${cliente['cpf'].substring(0, 3)}`);

// Usamos assim quando nao sabemos o valor que vem, sabemos apenas as chaves de acesso:
const chaves = ['nome', 'idade', 'cpf', 'email'];
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
