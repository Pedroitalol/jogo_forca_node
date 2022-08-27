//index.js
/*
const Palavra = require("./Palavra");
const palavra1 = new Palavra();
console.log(palavra1.RetornaDicas(2));
console.log(palavra1.RetornaPalavra());
console.log(palavra1.RetornaQntdLetras());


const GerenciadorPalavra = require("./GerenciadorPalavra");
const gerenciadorPalavra = new GerenciadorPalavra();
console.log(gerenciadorPalavra.RetornaDicas(2));
console.log(gerenciadorPalavra.RetornaPalavra());
console.log(gerenciadorPalavra.RetornaQntdLetras());
*/

const Jogo = require("./Jogo");
const jogo = new Jogo();
while (!jogo.VerificaFimJogo()) {
    console.log(jogo.RetornaPalavraAtual());
    jogo.PedePalpite();
}
console.log(jogo.RetornaPalavraAtual());