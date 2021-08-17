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

export const ListTripsPage = () => {
    return (
        <><Pattern />

            <div className="testeRouter">
                List Trips Page
            </div>

            <button>
                Botão
            </button>

        </>
    )
}