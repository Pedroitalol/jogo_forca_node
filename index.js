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
const ViewJogo = require("./ViewJogo");
const jogo = new Jogo();
const viewJogo = new ViewJogo();
var letra = '';
while (!jogo.VerificaFimJogo()) {
    console.log(jogo.RetornaPalavraAtual());
    letra = viewJogo.PedePalpite();
    jogo.VerificaPalpite(letra);
}
console.log(jogo.RetornaPalavraAtual());