import React from "react";
import { goToGamePage } from "../../router/Coordinator";
import { useHistory } from "react-router";

const MainPage = () => {

    const history = useHistory()

    return (
        <div>
            <h1>MainPage</h1>
            <div>
                <button onClick={() => goToGamePage(history)}>JOGAR!</button>
            </div>
        </div>
    )
}

export default MainPage