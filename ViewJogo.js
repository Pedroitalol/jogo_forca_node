const readlineSync = require('readline-sync');

module.exports = class ViewJogo {
    PedePalpite(){
        const palpite = readlineSync.question('Diga o palpite de uma letra? ');
        return palpite
    }

}