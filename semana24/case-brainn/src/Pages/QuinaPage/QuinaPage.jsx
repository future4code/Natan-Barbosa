import React from "react";
import "./stylesheet.css";
import { QuiDiv } from "./styled";

const QuinaPage = () => {
    return (
        <QuiDiv className="preencher">

            <QuiDiv id="blank-grid-section" />
            <QuiDiv id="blank-grid-section" />

            <QuiDiv className="game">
                QUINA
            </QuiDiv>

            <QuiDiv className="numbers">
                <li className="num">17</li>
                <li className="num">32</li>
                <li className="num">41</li>
                <li className="num">58</li>
                <li className="num">69</li>
            </QuiDiv>

            <QuiDiv id="blank-grid-section" />
            <QuiDiv id="blank-grid-section" />


            <QuiDiv className="game-info">
                Concurso: <br />
                5534 - 27/11/2021
            </QuiDiv>

            <QuiDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</QuiDiv>

        </QuiDiv>
    )
}

export default QuinaPage