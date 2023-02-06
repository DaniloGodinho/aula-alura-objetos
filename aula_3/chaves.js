const cliente = {
    nome: 'Danilo',
    idade: 28,
    email: 'danilo@servidor.com',
    telefone: ['11999998888', '1144445555']
};

cliente.enderecos = [
    {
        rua: 'Av. Tenente Negrão',
        numero: 140,
        apartamento: true,
        complemento: '13º / apto 1302'
    }
];

const chaveDoObjeto = Object.keys(cliente); // Essa é uma função de for, propria do js

if (!chaveDoObjeto.includes('enderecos')) {
    console.error('Erro. É necessario um endereço cadastrado.');
} // Aqui mostramos a msg erro caso o usuario nao tenha cadastrado um endereço