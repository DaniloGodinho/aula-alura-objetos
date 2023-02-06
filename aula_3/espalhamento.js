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

function ligandoParaCliente(telefoneResidencial, telefoneComercial) {
    console.log(`Ligando para ${telefoneResidencial}`);
    console.log(`Ligando para ${telefoneComercial}`);
}

// ligandoParaCliente(cliente.telefone[0], cliente.telefone[1]); // Podemos deixar isso mais simplificado
ligandoParaCliente(...cliente.telefone); // ASsim esplhamos o array passado e teremos o mesmo resultado que a cima

// assim teremos um retorno como objeto realmente no campo endereço
// const encomenda = {
//     destinatario: cliente.nome,
//     endereco: cliente.enderecos[0]
// }

// Assim vem os campos mais definidos, como 1 só obj, mas se tiver muitos itens?nao vale a pena
// const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//     numero: cliente.enderecos[0].numero
// }

// Vamos espalhar o obj endereço agora, facilmente assim:
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda);