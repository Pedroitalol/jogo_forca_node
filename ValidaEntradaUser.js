module.exports = class ValidaEntradaUser {
    validaEntrada(gerenciadorPalavra, palavraAtual, letra){
        var ret = '';
        for (let i = 0; i < palavraAtual.length; i++) {
            if(letra == gerenciadorPalavra.RetornaPalavra()[i]){
                palavraAtual[i] = gerenciadorPalavra.RetornaPalavra()[i];
                ret += 'Palavra certa na pocição ' + i + '\n';
            }
        }
        return ret;
    }

}