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
    overflow: hidden;
}
`

export const ApplicationFormPage = () => {

    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/list-trips")
    }

    return (
        <div id="background-pages"><Default />

            <header>
                <Header />
            </header>

            <main className="font-default">

                <section className='center-all'>

                    <h1 id="main-titles">Inscreva-se para uma viagem!</h1>

                    <DefaultButton onClick={goToTripsPage}> Voltar </DefaultButton>

                </section>

                <section>

                    <div className="center-all">

                        <form action="" className="form-area">
                            <h1>Preencha o formulário abaixo:</h1>

                            <br />

                            <input type="text" placeholder="Escolha a sua viagem" className="form-item" />
                            <br />
                            <input type="text" placeholder="Nome completo" className="form-item" />
                            <br />
                            <input type="number" placeholder="Idade" className="form-item" />
                            <br />
                            <textarea type="text" placeholder="Texto para candidatura" className="form-item" />
                            <br />
                            <input type="text" placeholder="Ocupação" className="form-item" />
                            <br />
                            <input type="text" placeholder="Escolha um país" className="form-item" />
                            <br />
                            <DefaultButton>Enviar</DefaultButton>
                            <br />

                        </form>

                    </div>

                </section>

            </main>

        </div>
    )
}