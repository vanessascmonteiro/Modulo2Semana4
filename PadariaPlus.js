class CaixaRegistradora{
    constructor(estoque){
        this.estoque = estoque
        this.nomeCliente = ''
    }

    iniciarAtendimento(nome){
        this.nomeCliente = nome;
        return `Olá ${nome}, seja bem vindo(a)`;
    }
    const estoque =[{
        codigo: 1,
        nome:"banana",
        preco: 2.00,
        quantidade: 10,
    }]
}
