import React from "react";
import "./stylesheet.css";
import { TmDiv } from "./styled";

const TimemaniaPage = () => {
    return (
        <TmDiv className="preencher">

            <TmDiv id="blank-grid-section" />
            <TmDiv id="blank-grid-section" />

            <TmDiv className="game">
                TIMEMANIA
            </TmDiv>

            <TmDiv className="numbers">
                <li className="num">15</li>
                <li className="num">25</li>
                <li className="num">33</li>
                <li className="num">38</li>
                <li className="num">48</li>
                <li className="num">63</li>
                <li className="num">74</li>
            </TmDiv>

            <TmDiv id="blank-grid-section" />
            <TmDiv id="blank-grid-section" />


            <TmDiv className="game-info">
                Concurso: <br />
                1622 - 25/11/2021
            </TmDiv>

            <TmDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</TmDiv>

        </TmDiv>
    )
}

export default TimemaniaPage