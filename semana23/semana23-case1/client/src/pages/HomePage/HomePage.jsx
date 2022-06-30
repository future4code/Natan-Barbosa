import React from "react"
import { Link } from "react-router-dom"
import { MainArea } from "./styled"
import "./stylesheet.css"

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Sistema Im-Ex Porto</h1>
                <h3>Módulo MCONT221121 - Gerenciamento de Contêiners</h3>
            </header>

            <hr />

            <MainArea>
                <div>
                    <button className="botoes">
                        <Link to="/manage-conteiner" className="links">Gerenciar Contêiners</ Link>
                    </button>
                </div>

                <div>
                    <button className="botoes">
                        <Link to="/get-report" className="links">Visão Geral e Relatório</ Link>
                    </button>
                </div>
            </MainArea>



        </div>
    )
}

export default HomePage