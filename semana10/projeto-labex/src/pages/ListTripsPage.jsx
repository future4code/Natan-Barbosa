import React from 'react';
import { useHistory } from 'react-router';
import { createGlobalStyle } from 'styled-components';

const Pattern = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const ListTripsPage = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationPage = () => {
        history.push("/application-form")
    }


    return (
        <><Pattern />

            <h1>
                List Trips Page
            </h1>

            <header>

                <div>Header com imagem de galáxia e logo do LabeX</div>

            </header>

            <main>

                <section>

                    <h1>Ao infinito... e além!</h1>

                    <button onClick={goToHomePage}> Voltar </button>

                    <button onClick={goToApplicationPage}> Inscreva-se! </button>

                </section>

                <section>

                    <div>
                        Cards com as viagens disponíveis
                    </div>

                </section>

            </main>

        </>
    )
}