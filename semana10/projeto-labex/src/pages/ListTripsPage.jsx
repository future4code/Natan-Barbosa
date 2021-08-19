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
        <>
            <Default />

            <header>
                <Header />
            </header>

            <main className="center-all font-default">

                <br /><h1>Ao infinito... e além!</h1><br />

                <section>
                    <DefaultButton onClick={goToHomePage}> Voltar </DefaultButton>

                    <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
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