var saldoVitorias = 55;
var nivelJogador = "";
var nivelAtual = false;

console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível ${calcRank(nivelJogador)}`);

function calcRank(nivelJogador){
    while(nivelAtual === false){
        if(saldoVitorias >= 0 && saldoVitorias <= 10){
            nivelJogador = "Ferro";
        }else if(saldoVitorias >= 11 && saldoVitorias <= 20){
            nivelJogador = "Bronze";
        }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
            nivelJogador = "Prata";
        }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
            nivelJogador = "Ouro";
        }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
            nivelJogador = "Diamante";
        }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
            nivelJogador = "Lendário";
        }else if(saldoVitorias >= 101){
            nivelJogador = "Imortal";
        }else{
            console.log("Nível inválido");
        }
        nivelAtual = true;
    }
    return nivelJogador;
}