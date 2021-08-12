import React from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { MatchesPage } from './Pages/MatchesPage/MatchesPage';
import { useState } from 'react';

const App = () => {

  const home = <HomePage />
  const matches = <MatchesPage />

  const [paginaAtual, setPaginaAtual] = useState(home)

  const irParaMatches = () => {
    setPaginaAtual(matches)
  }

  const irParaHome = () => {
    setPaginaAtual(home)
  }

  return (

    <div>

      <button onClick={irParaMatches}> Ver Matches </button>
      <button onClick={irParaHome}> Voltar pra Home </button>
      <div>{paginaAtual}</div>

    </div>
  )

}

export default App;
