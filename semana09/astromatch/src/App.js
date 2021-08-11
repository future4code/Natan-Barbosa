import React from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { MatchesPage } from './Pages/MatchesPage/MatchesPage';

const App = () => {
  // renderização condicional
  // estado que diz qual é a tela que está aparecendo
  // função pra mudar de tela
  
  return (

    <div>
      Astromatch
      <HomePage />
      <MatchesPage />
    </div>
  )

}

export default App;
