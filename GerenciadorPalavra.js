const Palavra = require("./Palavra");

module.exports = class GerenciadorPalavra {
    //propriedades e funções da classe aqui
    constructor() {
        this.palavra = new Palavra();
    }

    RetornaPalavra (){
        return this.palavra.RetornaPalavra();
    }

    RetornaQntdLetras(){
        return this.palavra.RetornaQntdLetras();
    }

    RetornaDicas(idDica){
        return this.palavra.RetornaDicas(idDica);
    }

    gerarPalavraAtual(){
        const tam = this.RetornaQntdLetras();
        var palavra = [];
        for(var i = 0; i < tam; i++){
            palavra[i]= '_'
        }
        return palavra;
    }
}