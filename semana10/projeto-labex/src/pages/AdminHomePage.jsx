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

export const AdminHomePage = () => {

    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToCreateTripPage = () => {
        history.push("/create-trip")
    }

    const showTripDetails = () => {
        history.push("/trip-details")
    }

    return (
        <><Pattern />

            <h1>
                Admin Home Page
            </h1>

            <header>

                <div>Header com imagem de galáxia e logo do LabeX</div>

            </header>

            <main>

                <section>

                    <h1>Painel Administrativo</h1>

                    <button onClick={goToLoginPage}> Voltar </button>

                    <button onClick={goToCreateTripPage}> Criar Viagem </button>

                </section>

                <section>

                    <div>
                        Cards de viagens criadas
                    </div>

                    <button onClick={showTripDetails}>
                        Ver Detalhes da Viagem
                    </button>

                </section>

            </main>

        </>
    )
}
