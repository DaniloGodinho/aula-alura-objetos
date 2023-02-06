// Função dentro do objeto

const cliente = {
    nome: 'Danilo',
    idade: 28,
    email: 'danilo@servidor.com',
    telefone: ['11999998888', '1144445555'],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado, novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(168) // Vai imprimir a msg confirmando pagamento e novo saldo

cliente.efetuaPagamento(230) // Vai imprimir a msg de saldo insuficiente