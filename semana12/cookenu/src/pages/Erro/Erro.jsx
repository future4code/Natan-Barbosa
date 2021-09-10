import React from "react";
import { ErrorGif, ErrorPageContainer } from "./styled";
import ErrorPageGif from "../../assets/ErrorPageGif.gif"
import { Typography } from "@material-ui/core";

export const Erro = () => { // import com chaves no router
    return (
        <ErrorPageContainer>

            <Typography
                color={'primary'}
                variant={'h6'}
                align={'center'}
            >
                <h2>ERROR 404</h2>
                Deu ruim irmão.<br />Essa página não existe. <br />Você deve ter digitado essa url errado aí.
            </Typography>

            <ErrorGif src={ErrorPageGif} />

        </ErrorPageContainer>
    )
}

