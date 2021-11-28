import React from "react";
import "./stylesheet.css";
import { MsDiv } from "./styled";

const MegaSenaPage = () => {
    return (
        <MsDiv className="preencher">

            <MsDiv id="blank-grid-section" />
            <MsDiv id="blank-grid-section" />

            <MsDiv className="game">
                MEGA-SENA
            </MsDiv>

            <MsDiv className="numbers">
                <li className="num">31</li>
                <li className="num">32</li>
                <li className="num">39</li>
                <li className="num">42</li>
                <li className="num">43</li>
                <li className="num">51</li>
            </MsDiv>

            <MsDiv id="blank-grid-section" />
            <MsDiv id="blank-grid-section" />


            <MsDiv className="game-info">
                Concurso: <br />
                2359 - 25/11/2021
            </MsDiv>

            <MsDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</MsDiv>

        </MsDiv>
    )
}

export default MegaSenaPage