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

export const TripDetailsPage = () => {

    const history = useHistory()

    const goToPreviousPage = () => {
        history.goBack()
    }

    return (
        <>
            <Default />

            <header>
                <Header />
            </header>


            <main className="center-all font-default">

                <br /><h1>Trip Details Page</h1><br />

                <section>
                    <DefaultButton onClick={goToPreviousPage}>
                        Voltar
                    </DefaultButton>
                </section>
            </main>
        </>
    )
}