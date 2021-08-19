import React from 'react';
import { useHistory } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../components/header/Header';
import './styles/ToAllPages.css'
import './styles/HomePage.css'

import { HomePageButton } from '../components/Buttons';


const Default = createGlobalStyle`
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
        <>
            <Default />

            <header>
                <Header />
            </header>

            <main className="center-all font-default" id="wallpaper">


                <div className="buttons-homepage">
                    <HomePageButton onClick={goToTripsPage}> Ver Viagens </HomePageButton>

                    <HomePageButton onClick={goToLoginPage}> Adm Login </HomePageButton>
                </div>

                <div className="text">
                    Desde 2021, voando mais alto, com mais segurança (e mais barato) do que Elon Musk e Jeff Bezos
                </div>
            </main>

        </>
    )
}

export default HomePage