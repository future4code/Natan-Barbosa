import React from 'react';
import { useHistory } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { Header } from '../components/header/Header';
import { DefaultButton } from '../components/Buttons';
import './styles/ToAllPages.css'
import './styles/CreateTripPage.css'

const Default = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
}
`

export const CreateTripPage = () => {

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
                <br /><h1>Criar Viagem</h1><br />

                <section>
                    <DefaultButton onClick={goToPreviousPage}>Voltar</DefaultButton>
                </section>

                <section>

                    <div className="center-all">

                        <form action="" className="form-area-create">
                            <h1>Preencha o formulário abaixo:</h1>

                            <br />

                            <input type="text" placeholder="Título da viagem" className="form-item-create" />
                            <br />
                            <input type="text" placeholder="Escolha um planeta" className="form-item-create" />
                            <br />
                            <input type="date" className="form-item-create" />
                            <br />
                            <textarea type="text" placeholder="Descrição" className="form-item-create" />
                            <br />
                            <input type="number" placeholder="Duração em dias" className="form-item-create" />
                            <br />
                            <DefaultButton>Criar</DefaultButton>
                            <br />

                        </form>

                    </div>

                </section>


            </main>
        </>
    )
}