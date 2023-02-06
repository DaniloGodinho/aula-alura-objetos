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

for (let chave in cliente) {
    // console.log(chave); // Assim obtemos as chaves do obj cliente: nome, idade, email, etc ...
    // console.log(cliente[chave]) // Assim obtemos os valores que estao contidos nas chaves: Danilo, 28, etc...
    // console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); // Aqui vemos a chave + valor em uma mensagem,
    // mas a função nao foi impressa corretamente, precisamos tratata-la, vamos trata-la agora:

    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); // tratamos ela, tirando ela desse
    // console.log
    }
}