// Escrevendo as classes de um Jogo 
//**O que deve ser utilizado**
//Variáveis, operadores, laços de repetição, estrutura de decisões, funções, classes e objetos
//Objetivo: Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades: 
//nome, idade, tipo (guerreiro, mago, monge, ninja)
//Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:
//se mago = no ataque exibir (usou magia)
//se guerreiro = no ataque exibir (usou espada)
//se monge = no ataque exibir (usou artes marciais)
//se ninja = no ataque exibir (usou shuriken)
//Saída: Ao final deve-se exibir uma mensagem: "O{tipo} atacou usando {ataque}"


class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type.toLowerCase() //converte letras para minúsculas
    }

    toAttack(){
        let attack
        switch(this.type){
            case "mago":
                attack = "magia";
                break;
                case "guerreiro":
                    attack = "espada";
                    break;
                    case "monge":
                        attack = "artes marciais";
                        break;
                        case "ninja":
                            attack = "shuriken";
                            break;                  
        }
    
        console.log(`O ${this.type} ${this.name}atacou usando ${attack}`)
    }
}
    let mago = new hero ("Merlin", 75, "Mago")
    let guerreiro = new hero ("Zyan", 47, "Guerreiro")
    let monge = new hero ("Shi Tzu", 98, "Monge")
    let ninja = new hero ("Sartori", 57, "Ninja")

    mago.toAttack()
    guerreiro.toAttack()
    monge.toAttack()
    ninja.toAttack()

