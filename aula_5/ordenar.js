const clientes = require('./clientes.json');

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1
        } else if (a[propriedade] > b[propriedade]) {
            return 1
        }
        return 0
    });
    return resultado;
} // Função para colocarmos uma ordenança, por padrao a < b == negativo, a > b == positivo, a = b == neutro

const ordenarNome = ordenar(clientes, "nome");
console.log(ordenarNome);