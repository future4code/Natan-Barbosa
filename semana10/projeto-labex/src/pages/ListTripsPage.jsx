import React from 'react';
import { useHistory } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../components/header/Header';
import { DefaultButton } from '../components/Buttons';
import './styles/ToAllPages.css'
import './styles/ListTripsPage.css'

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
        <div id="background-pages"><Default />

            <header>
                <Header />
            </header>

            <main className="font-default">

                <section className='center-all'>

                    <h1 id="main-titles">Ao infinito... e além!</h1>

                    <DefaultButton onClick={goToHomePage}> Voltar </DefaultButton>

                </section>

                <section>

                    <div class='container'>

                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>

                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>
                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>
                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>
                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>
                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>
                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>

                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>

                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>

                        <div id='card-group'>
                            <h3> Card de Viagem com lista </h3>
                            <ul>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                            <DefaultButton onClick={goToApplicationPage}> Inscreva-se! </DefaultButton>
                        </div>

                    </div>

                </section>

            </main>

        </div>
    )
}