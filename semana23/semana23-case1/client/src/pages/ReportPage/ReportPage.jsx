import React from "react"
import { Link } from "react-router-dom"

const ReportPage = () => {
    return (
        <div>
            <div>
                <h1>Sistema Im-Ex Porto</h1>
                <h3>Módulo MCONT221121 - Gerenciamento de Contêiners</h3>
            </div>

            <hr />

            <br /> <br />
            <h1>REPORT - REPORT - REPORT</h1>
            <br /> <br />

            <div>
                <button>
                    <Link to="/" >Voltar</ Link>
                </button>
            </div>

        </div>
    )
}

export default ReportPage