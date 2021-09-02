import React from "react";
import CookenuLogo from "../../assets/CookenuLogo.jpg";
import { LogoImage, ScreenContainer } from "./styled";
import { FormularioCadastro } from "./FormularioCadastro";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const Cadastro = () => { // import com chaves no router

    useUnprotectedPage()

    return (
        <ScreenContainer>
            <br />
            <LogoImage src={CookenuLogo} />
            <FormularioCadastro />
        </ScreenContainer>
    )
}