ARRAY

const frutas = ['uva', 'morango', 'manga', 'banana'];

// slice() -> Criar novas Sub-arrays
console.log(frutas.slice(1, 3))

// unshift() - Adiciona um item no começo do array
frutas.unshift('melao')

// push() -> Adiciona um item no final do array
frutas.push('limao')

// shift() -> Remover do começo do array
frutas.shift()

// pop() -> Remove um item do final do array
frutas.pop()

// includes -> Verifica a existência do item dentro do array
const resultado = frutas.includes('limao')
