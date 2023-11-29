let nomeHeroi = "Mané"
let XP = 1000


switch (true) {
    case XP <= 1000:
        console.log("O Heroi de nome " + nomeHeroi +" está no nível de Ferro")
break

case  XP  <= 2000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Bronze")
break

case  XP <= 5000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Prata")
break

case  XP <= 7000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Ouro")
break

case  XP <= 8000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Platina")
break

case  XP <= 9000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Ascendente")
break

case  XP <= 10000:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Imortal")
break

case  XP >= 10001:
console.log("O Heroi de nome " + nomeHeroi +" está no nível de Radiante")
break

}
//se xp menor que 1000 = ferro
//se xp for entre 1001 e 2000 = bronze
//se xp for entre 2001 e 5000 = prata
//se xp for entre 6001 e 7000 = ouro
//se xp for entre 7001 e 8000 = platina
//se xp for entre 8001 e 9000 = ascendente
//se xp for entre 9001 e 10000 = imortal
//se xp for maior ou igual 10001 = radiante

//ao final deve exibir a mensagem:
//"o heroi de nome **nome** está no nivel de **nivel**"