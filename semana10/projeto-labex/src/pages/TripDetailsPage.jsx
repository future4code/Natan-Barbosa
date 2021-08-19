import React from 'react';
import { useHistory } from 'react-router';
import { createGlobalStyle } from 'styled-components';

const Pattern = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export const TripDetailsPage = () => {

    const history = useHistory()

    const goToPreviousPage = () => {
        history.goBack()
    }

    return (
        <><Pattern />

            <div>
                Trip Details Page
            </div>

            <button onClick={goToPreviousPage}>
                Voltar
            </button>

        </>
    )
}