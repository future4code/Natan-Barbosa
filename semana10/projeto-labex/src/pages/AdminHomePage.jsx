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
        <>
            <Default />

            <header>
                <Header />
            </header>

            <main className="center-all font-default" >

                <br /><h1> Painel Administrativo </h1><br />

                <section>
                    <DefaultButton onClick={goToLoginPage}> Voltar </DefaultButton>

                    <DefaultButton onClick={goToCreateTripPage}> Criar Viagem </DefaultButton>
                </section>

                <section>
                    <div>
                        Cards de viagens criadas
                    </div>

                    <DefaultButton onClick={showTripDetails}>
                        Ver Detalhes da Viagem
                    </DefaultButton>
                </section>

            </main>
        </>
    )
}
