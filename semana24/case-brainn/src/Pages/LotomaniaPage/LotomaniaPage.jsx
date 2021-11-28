import React from "react";
import "./stylesheet.css";
import { LmDiv } from "./styled";

const LotomaniaPage = () => {
    return (
        <LmDiv className="preencher">

            <LmDiv id="blank-grid-section" />
            <LmDiv id="blank-grid-section" />

            <LmDiv className="game">
                LOTOMANIA
            </LmDiv>

            <LmDiv className="numbers">
                <li className="num">02</li>
                <li className="num">07</li>
                <li className="num">18</li>
                <li className="num">26</li>
                <li className="num">27</li>
                <li className="num">37</li>
                <li className="num">38</li>
                <li className="num">39</li>
                <li className="num">43</li>
                <li className="num">47</li>
                <li className="num">51</li>
                <li className="num">54</li>
                <li className="num">57</li>
                <li className="num">61</li>
                <li className="num">67</li>
                <li className="num">71</li>
                <li className="num">77</li>
                <li className="num">82</li>
                <li className="num">88</li>
                <li className="num">99</li>
            </LmDiv>

            <LmDiv id="blank-grid-section" />
            <LmDiv id="blank-grid-section" />


            <LmDiv className="game-info">
                Concurso: <br />
                2167 - 27/11/2021
            </LmDiv>

            <LmDiv className="game-notice">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a Caixa Econômica Federal.</LmDiv>

        </LmDiv>
    )
}

export default LotomaniaPage