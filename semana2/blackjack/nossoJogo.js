////////////////////////////// PROJETO DA SEMANA 02 - 25/06/2021 - JOGO "BLACKJACK" ///////////////////////////
//////////////////////////////////////////// NATAN BENFICA BARBOSA ////////////////////////////////////////////
/////////////////////////////////////////// LABENU, TURMA LOVELACE ////////////////////////////////////////////

if(confirm('Olá usuário! Quer iniciar uma nova rodada de Blackjack?')) {
   
   // lauch do jogo:
   alert('Pronto. Iniciamos uma nova rodada! Dê uma olhada no console do seu navegador.')
   
   // saudação:
   console.log('Bem-vindo(a) ao Blackjack!')
   console.log('')

   // rodada do usuário:
   const carta1usuario = comprarCarta()
   const carta2usuario = comprarCarta()
   const somaDoUsuario = carta1usuario.valor + carta2usuario.valor
   console.log(`Usuário - cartas: ${carta1usuario.texto} e ${carta2usuario.texto} - pontuação: ${somaDoUsuario}.`)
   
   // rodada do computador:
   const carta1computador = comprarCarta()
   const carta2computador = comprarCarta()
   const somaDoComputador = carta1computador.valor + carta2computador.valor
   console.log(`Computador - cartas: ${carta1computador.texto} e ${carta2computador.texto} - pontuação: ${somaDoComputador}.`)
   console.log('')

   // função para comparar os resultados:
   function exibirResultado() {
      if (somaDoUsuario === somaDoComputador) {
      console.log('O jogo terminou empatado!')
      } else if (somaDoUsuario > somaDoComputador) {
      console.log('Parabéns usuário! Você venceu o jogo!')
      } else {
      console.log('O vencedor do jogo foi o computador!')
      }
   }
   
   // execução da função para exibir os resultados:
   exibirResultado()

} else {
   alert('Tudo bem. O jogo acabou. Até a próxima!')
}

//////////////////////// FIM DO PROJETO DA SEMANA 02 - 25/06/2021 - JOGO "BLACKJACK" //////////////////////////