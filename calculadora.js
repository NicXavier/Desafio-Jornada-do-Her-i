//# Calculadora de partidas Rankeadas

//**O que deve ser utilizado**
//-Variáveis
//-Operadores
//-Laços de repetição
//-Estrutura de decisões
//-Funções

//## Objetivos:

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, 
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do cálculo (vitórias - derrotas)

function calcScoreboardLevel(wins, loses){
    const scoreboard = wins - loses;
    let level;


//Se vitórias for menor do que 10 = Ferro 
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100 = Lendário
//Se vitórias for maior ou igual a 101 = Imortal

if (wins <= 10){
    level = "Ferro";
}   else if (wins >10 && wins <21){
    level = "Bronze";
}   else if (wins >20 && wins <51){
    level = "Prata";
}   else if (wins >50 && wins <81){
    level = "Ouro";
}   else if (wins >80 && wins <91){
    level = "Diamante";
}   else if (wins >90 && wins <101){
    level = "Lendário";
}   else {
    level = "Imortal";
}

    return {scoreboard, level};
}

//Usando a função
const winsTest = 114;
const losesTest = 48;

const result = calcScoreboardLevel(winsTest, losesTest);
//## Saída

//Ao final deve exibir uma mensagem:
//"O Herói tem saldo de **{saldovitorias}** e está no nível **{nivel}**"

console.log(`O Herói tem saldo de ${result.scoreboard} e está no nível ${result.level}`);




