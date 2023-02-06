const clientes = require('./clientes.json')

// função para varrer o array de objetos e encontrar algum item
function encontrar(lista, chave, valor) {
    return lista.find((item) => {
        return item[chave].includes(valor)
    })
};

const encontrado = encontrar(clientes, "nome", "Kirby")
const encontrado2 = encontrar(clientes, "telefone", "7593785074")
console.log(encontrado2);