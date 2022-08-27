module.exports = class Palavra {
    //propriedades e funções da classe aqui
    constructor() {
        //this.palavra = ['t', 'e', 's', 't', 'e'];
        this.palavra = 'teste';
        this.qntdLetras = 5;
        this.qntdMaxDicas = 3;
    }

    RetornaPalavra (){
        return this.palavra;
    }

    RetornaQntdLetras(){
        return this.qntdLetras;
    }

    RetornaDicas(idDica){
        const vetorDicas = ['começa com t', 'tem dois pares de letras iguais', 'é um subistantivo'];
        if(idDica > this.qntdMaxDicas){
            return 'não tem mais dicas';
        }
        return vetorDicas[idDica - 1];
    }
}