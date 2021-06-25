////////////////////////////// DESAFIO DA SEMANA 02 - 25/06/2021 - JOGO "BLACKJACK" ///////////////////////////
//////////////////////////////////////////// NATAN BENFICA BARBOSA ////////////////////////////////////////////
/////////////////////////////////////////// LABENU, TURMA LOVELACE ////////////////////////////////////////////

// Não consegui realizar o desafio antes da entrega às 17h :,(
// Ainda não descobri uma forma de avançar no meu jogo.
// Preciso entender como utilizar as condicionais junto com confirms dentro dos loops para rodar o restante.
// Acho que a grande dificuldade desse desafio é me organizar melhor para nao me perder nos meus codigos.
// Abaixo, segue a construção do raciocínio até onde consegui desenvolver:

/*

if(confirm('Olá usuário! Quer iniciar uma nova rodada de BlackJack?')) {
   // saudação
   alert('Ok. Vamos começar!')

   // array para armazenar as primeiras cartas dos jogadores
   let cartasUsuario = []
   let cartasComputador = []
   
   // sorteando as primeiras cartas
   cartasUsuario.push(comprarCarta())
   cartasUsuario.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())

   // as duas primeiras cartas não podem ser dois A. Então:
   if ((cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) || (cartasComputador[0].valor === 11 && cartasComputador[1] === 11)) {
      cartasUsuario = []
      cartasComputador = []
   } else {
   }

   // revelar cartas do usuário e primeira carta do computador
   if(confirm(`Suas cartas são ${cartasUsuario[0].texto} e ${cartasUsuario[1].texto}.` + '\n' + `A carta revelada pelo computador é ${cartasComputador[0].texto}.` + '\n' + 'Deseja comprar mais uma carta?')) {
      cartasUsuario.push(comprarCarta())
   } else {
      cartasComputador.push(comprarCarta())
   }

   console.log(cartasUsuario)
   console.log(cartasComputador)

} else {
   alert('Tudo bem. O jogo acabou. Até a próxima!')
}

*/
