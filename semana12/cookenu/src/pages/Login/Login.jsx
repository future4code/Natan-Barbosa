import React from "react";
import { ScreenContainer } from "./styled";
import { LogoImage, SignUpButtonContainer } from "./styled";
import CookenuLogo from "../../assets/CookenuLogo.jpg";
import Button from "@material-ui/core/Button";
import { FormularioLogin } from "./FormularioLogin";
import { irParaCadastro } from "../../router/Coordinator";
import { useHistory } from "react-router";

export const Login = () => { // import com chaves no router

    const history = useHistory()

    return (
        <ScreenContainer>
            <br />
            <LogoImage src={CookenuLogo} />
            <FormularioLogin />
            <SignUpButtonContainer>
                <Button
                    onClick={() => irParaCadastro(history)}
                    fullWidth
                    variant={"outlined"}
                    color={"primary"}
                    margin={"normal"}
                > Cadastre-se </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}