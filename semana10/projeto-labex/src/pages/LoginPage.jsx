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
export const LoginPage = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/")
    }

    const goToAdminHomePage = () => {
        history.push("/admin-home")
    }

    return (
        <><Pattern />

            <h1>
                Login Page
            </h1>

            <header>

                <div>Header com imagem de galáxia e logo do LabeX</div>

            </header>

            <main>

                <section>

                    <h1>Faça login para continuar:</h1>

                    <button onClick={goToHomePage}> Voltar </button>

                </section>

                <section>

                    <div>
                        Formuláio de login
                    </div>

                    <button onClick={goToAdminHomePage}> Entrar </button>

                </section>

            </main>

        </>
    )
}