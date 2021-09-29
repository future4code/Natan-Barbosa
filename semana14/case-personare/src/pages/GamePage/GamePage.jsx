import React from "react";
import { useHistory } from "react-router";
import { goToMainPage } from "../../router/Coordinator";

const GamePage = () => {

    const history = useHistory()

    return (
        <div>

            <div>
                <h1>Embaralhe as cartas e depois selecione uma.</h1>
            </div>

            <div>
                <button>EMBARALHAR</button>
            </div>

            <div>
                <button onClick={() => goToMainPage(history)}>VOLTAR</button>
            </div>

        </div>
    )
}

export default GamePage