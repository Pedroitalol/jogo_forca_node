const GerenciadorPalavra = require("./GerenciadorPalavra");
const ValidaEntradaUser = require("./ValidaEntradaUser");

module.exports = class Jogo {
    constructor() {
        this.gerenciadorPalavra = new GerenciadorPalavra();
        this.qntdDicas = 0;
        this.status = 'em jogo';
        this.qntdErros = 0;
        this.palavraAtual = this.gerenciadorPalavra.gerarPalavraAtual();
    }

    EnviaDicas(){
        const idDica = this.qntdDicas + 1;
        this.qntdDicas++;
        return this.gerenciadorPalavra.RetornaDicas(idDica);
    }

    EnviaQntdLetras(){
        return this.gerenciadorPalavra.RetornaQntdLetras();
    }

    VerificaPalpite(letra){
        console.log(this.VerificaLetra(letra));
    }

    VerificaLetra(letra){
        const validaEntradaUser = new ValidaEntradaUser();
        const ret = validaEntradaUser.validaEntrada( this.gerenciadorPalavra, this.palavraAtual, letra);
        return ret;
    }

    VerificaFimJogo(){
        if(this.palavraAtual.join('') === this.gerenciadorPalavra.RetornaPalavra()){
            return true;
        }
        return false;
    }

    RetornaPalavraAtual(){
        return this.palavraAtual.join('');
    }
}