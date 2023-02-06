const cliente = {
    nome: 'Danilo',
    idade: 28,
    email: 'danilo@servidor.com',
    telefone: ['11999998888', '1144445555']
};

// Criar uma lista dentro do objeto com varios objetos
cliente.enderecos = [
    {
        rua: 'Av. Tenente Negrão',
        numero: 140,
        apartamento: true,
        complemento: '13º / apto 1302'
    }
];

// Adicionar obj de endereço dentro do array enderecos:
cliente.enderecos.push({
    rua: 'Av. Tancredo Neves',
    numero: 908,
    apartamento: false
})

// console.log(cliente.enderecos); // Acessando apenas o objeto endereço

// Filtrando endereços apenas que são apartamentos:
const listaApartamentos = cliente.enderecos.filter((endereco) => {
    return endereco.apartamento === true;
});

console.log(listaApartamentos);