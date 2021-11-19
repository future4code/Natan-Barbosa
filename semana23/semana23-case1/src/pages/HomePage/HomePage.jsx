import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <div>
                <h1>Sistema Im-Ex Porto</h1>
                <h3>Módulo MCONT221121 - Gerenciamento de Contêiners</h3>
            </div>

            <hr />

            <br /> <br />
            <h1>HOME - HOME - HOME</h1>
            <br /> <br />

            <div>
                <button>
                    <Link to="/manage-conteiner" >Gerenciar Contêiners</ Link>
                </button>
            </div>

            <div>
                <button>
                    <Link to="/get-report" >Visão Geral e Relatório</ Link>
                </button>
            </div>

        </div>
    )
}

export default HomePage