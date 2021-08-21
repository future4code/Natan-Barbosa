import React from 'react';
import { useHistory } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../components/header/Header';
import { DefaultButton } from '../components/Buttons';
import './styles/ToAllPages.css'

const Default = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
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
        <>
            <Default />

            <header>
                <Header />
            </header>

            <main className="center-all font-default">

                <br /><h1>Faça login para continuar:</h1><br />

                <section>

                    <DefaultButton onClick={goToHomePage}> Voltar </DefaultButton>
                </section>

                <section>
                    <div>
                        Formuláio de login
                    </div>
                    <DefaultButton onClick={goToAdminHomePage}> Entrar </DefaultButton>
                </section>
            </main>

        </>
    )
}