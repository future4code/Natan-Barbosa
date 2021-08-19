import React from 'react';
import { useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const Pattern = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const HomePage = () => {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/list-trips")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <><Pattern />

            <div>

                <div> Home Page </div>

                <div>
                    <button onClick={goToLoginPage}> Login </button>
                </div>

            </div>

            <button onClick={goToTripsPage}>
                Ver Viagens!
            </button>

        </>
    )
}

export default HomePage