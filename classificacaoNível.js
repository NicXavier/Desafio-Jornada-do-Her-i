//#Desafio Classificador de nível de Herói

//**O que deve ser utilizado**
//- Variáveis
//- Operadores 
//- Laços de repetição
//- Estrutura de decisões

//##Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Nome de Herói e XP
var heroi = {
    nome: "Super Herói",
    xp: 3200
};

//Variável para armazenar o nível do Herói
let nivel;

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000 = Imortal 
//Se XP for maior ou igual 10.000 = Radiante

//Verificando quantidade de XP e atribuindo nível
if (heroi.xp >= 0 && heroi.xp <= 1000){
    nivel = "Ferro";
} else if (heroi.xp >= 1001 && heroi.xp <=2000) {
    nivel = "Bronze";
} else if (heroi.xp >= 2001 && heroi.xp <=5000) {
    nivel = "Prata";
} else if (heroi.xp >= 5001 && heroi.xp <=7000) {
    nivel = "Ouro";
} else if (heroi.xp >= 7001 && heroi.xp <=8000) {
    nivel = "Platina";
} else if (heroi.xp >= 8001 && heroi.xp <=9000) {
    nivel = "Ascendente";
} else if (heroi.xp >= 9001 && heroi.xp <=10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

//##Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nível}**"

console.log("O Herói de nome " +heroi.nome+ " está no nível de " +nivel+ ".");
