import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import "../assets/styles.css"

const Pattern = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const HomePage = () => {
    return (
        <><Pattern />

            <div className="testeRouter">
                Home Page
            </div>

            <button> 
                Botão 
            </button>

        </>
    )
}

export default HomePage