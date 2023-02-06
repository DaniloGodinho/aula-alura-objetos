const clientes = require('./clientes.json');

function filtrarAptoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    });
} // com essa função filtramos quem tem apartamento true, mas nao tem a propriedade complemento

const filtrados = filtrarAptoSemComplemento(clientes);
console.log(filtrados);