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

export const ApplicationFormPage = () => {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/list-trips")
    }

    return (
        <><Pattern />

            <h1>
                Application Form Page
            </h1>

            <header>

                <div>Header com imagem de galáxia e logo do LabeX</div>

            </header>

            <main>

                <section>

                    <h1>Inscreva-se para uma viagem:</h1>

                    <button onClick={goToTripsPage}> Voltar </button>

                </section>

                <section>

                    <div>

                        <div>Formulário de aplicação</div>
                        <button> Enviar </button>
                        
                    </div>

                </section>

            </main>
        </>
    )
}