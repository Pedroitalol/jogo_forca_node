const vetorPalavras = [
    {
        palavra: 'boi',
        qntdLetras: 3,
        qntdMaxDicas: 1,
        dicas: ['é um animal']
    },
    {
        palavra: 'panela',
        qntdLetras: 6,
        qntdMaxDicas: 2,
        dicas: ['é um substantivo', 'lugar habitual é na cozinha']
    },
    {
        palavra: 'cofre',
        qntdLetras: 5,
        qntdMaxDicas: 2,
        dicas: ['é um substantivo', 'usado para guardar coisas valiosas']
    },
    {
        palavra: 'babana',
        qntdLetras: 5,
        qntdMaxDicas: 2,
        dicas: ['é um substantivo', 'é uma fruta', 'tem três vogais iguais']
    }
]

module.exports = class Palavra {
    constructor() {
        const index = this.between(0, vetorPalavras.length - 1);
        // simulando pegar do banco de dados
        this.palavra = vetorPalavras[index].palavra;
        this.qntdLetras = vetorPalavras[index].qntdLetras;
        this.qntdMaxDicas = vetorPalavras[index].qntdMaxDicas;
        this.dicas = vetorPalavras[index].dicas;
    }

    RetornaPalavra (){
        return this.palavra;
    }

    RetornaQntdLetras(){
        return this.qntdLetras;
    }

    RetornaDicas(idDica){
        if(idDica > this.qntdMaxDicas){
            return 'não tem mais dicas';
        }
        return this.dicas[idDica - 1];
    }

    between(min, max) {  
        return Math.floor(
          Math.random() * (max - min) + min
        )
    }
}