function apresentarPessoa(nome, idade){
return `Meu nome é ${nome} e tenho ${idade} anos.`
}

const Jonh = apresentarPessoa("Jonh", 90)
console.log(Jonh)


module.exports = apresentarPessoa