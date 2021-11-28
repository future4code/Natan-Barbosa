import React from "react";
import "./stylesheet.css";
import { LfDiv } from "./styled";

const LotofacilPage = () => {
    return (
        <LfDiv className="preencher">

            <LfDiv id="blank-grid-section" />
            <LfDiv id="blank-grid-section" />

            <LfDiv className="game">
                LOTOFÁCIL
            </LfDiv>

            <LfDiv className="numbers">
                <li className="num">01</li>
                <li className="num">02</li>
                <li className="num">04</li>
                <li className="num">06</li>
                <li className="num">08</li>
                <li className="num">09</li>
                <li className="num">10</li>
                <li className="num">11</li>
                <li className="num">13</li>
                <li className="num">14</li>
                <li className="num">16</li>
                <li className="num">17</li>
                <li className="num">19</li>
                <li className="num">23</li>
                <li className="num">25</li>
            </LfDiv>

            <LfDiv id="blank-grid-section" />
            <LfDiv id="blank-grid-section" />

            <LfDiv className="game-info">
                Concurso: <br />
                2200 - 23/11/2021
            </LfDiv>

            <LfDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</LfDiv>

        </LfDiv>
    )
}

export default LotofacilPage