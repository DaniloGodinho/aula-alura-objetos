const pessoa = {
    nome: 'Danilo',
    profissao: 'Desenvolvedor'
};

console.log(pessoa.telefone); // Como nao foi declarado, consta como undefined

pessoa.telefone = '00 00000-0000'; // Declaramos a variavel telefone

console.log(pessoa.telefone);  // Agora ela aparece no console

console.log(pessoa); // Aqui vemos que foi adicionado a variavel telefone dentro da variavel pessoa