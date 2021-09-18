import React from "react";
import { goToGamePage } from "../../router/Coordinator";
import { useHistory } from "react-router";

const MainPage = () => {

    const history = useHistory()

    return (
        <div>

            <div>
                <h1>Bem-vindo ao Jogo de Tarot da Personare!</h1>
            </div>

            <div>
                <button onClick={() => goToGamePage(history)}>JOGAR!</button>
            </div>

            <div>
                <h1>Veja o que as cartas podem te revelar...</h1>
            </div>
            
        </div>
    )
}

export default MainPage