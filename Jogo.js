const GerenciadorPalavra = require("./GerenciadorPalavra");

module.exports = class Jogo {
    //propriedades e funções da classe aqui
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

    PedePalpite(){
        const readlineSync = require('readline-sync');
        var palpite = readlineSync.question('Diga o palpite de uma letra? ');
        console.log(this.VerificaLetra(palpite));
    }

    VerificaLetra(letra){
        var ret = '';
        for (let i = 0; i < this.palavraAtual.length; i++) {
            if(letra == this.gerenciadorPalavra.RetornaPalavra()[i]){
                this.palavraAtual[i] = this.gerenciadorPalavra.RetornaPalavra()[i];
                ret += 'Palavra certa na pocição ' + i + '\n';
            }
        }
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