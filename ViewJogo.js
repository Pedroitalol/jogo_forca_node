const readlineSync = require('readline-sync');

module.exports = class ViewJogo {
    constructor(nomeUsuario){
        this.nomeUsuario = nomeUsuario;
    }

    static IniciaView(){
        const nomeUsuario = readlineSync.question('Diga o seu nome: ');
        const viewJogo = new ViewJogo(nomeUsuario);
        return viewJogo;
    }

    PedePalpite(){
        const palpite = readlineSync.question(this.nomeUsuario + ', diga o palpite de uma letra? ');
        return palpite
    }

}