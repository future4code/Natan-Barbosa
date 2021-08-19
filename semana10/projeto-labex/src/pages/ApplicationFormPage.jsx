import React from 'react';
import { useHistory } from 'react-router-dom';
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

export const ApplicationFormPage = () => {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/list-trips")
    }

    return (
        <>
            <Default />

            <header>
                <Header />
            </header>

            <main className="center-all font-default">

                <br /><h1>Inscreva-se para uma viagem:</h1><br />

                <section>
                    <DefaultButton onClick={goToTripsPage}> Voltar </DefaultButton>
                </section>

                <section>
                    <div>
                        <div>Formulário de aplicação</div>

                        <DefaultButton>Enviar</DefaultButton>
                    </div>
                </section>

            </main>
        </>
    )
}