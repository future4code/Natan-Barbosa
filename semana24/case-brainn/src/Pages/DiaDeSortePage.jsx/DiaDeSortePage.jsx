import React from "react";
import "./stylesheet.css";
import { DdsDiv } from "./styled";

const DiaDeSortePage = () => {
    return (
        <DdsDiv className="preencher">

        <DdsDiv id="blank-grid-section" />
        <DdsDiv id="blank-grid-section" />

        <DdsDiv className="game">
            DIA DE SORTE
        </DdsDiv>

        <DdsDiv className="numbers">
            <li className="num">02</li>
            <li className="num">08</li>
            <li className="num">13</li>
            <li className="num">14</li>
            <li className="num">17</li>
            <li className="num">21</li>
            <li className="num">24</li>
        </DdsDiv>

        <DdsDiv id="blank-grid-section" />
        <DdsDiv id="blank-grid-section" />


        <DdsDiv className="game-info">
            Concurso: <br />
            440 - 24/11/2021
        </DdsDiv>

        <DdsDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</DdsDiv>

    </DdsDiv>
    )
}

export default DiaDeSortePage