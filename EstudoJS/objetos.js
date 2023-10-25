// Objetos

const pessoa = {
    nome: 'Adriana',
    altura: 1.56,
    peso: 50
}

const pessoa2 = {
    nome2: 'Enrico',
    altura2: 1.75,
    peso2: 65
}

// Spread Operator, uma forma de atualizar o nosso objeto
const obj2 = { ...pessoa, ...pessoa2}

console.log(obj2)