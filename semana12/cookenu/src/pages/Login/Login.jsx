import React from "react";
import { ScreenContainer } from "./styled";
import { LogoImage, SignUpButtonContainer } from "./styled";
import CookenuLogo from "../../assets/CookenuLogo.jpg";
import Button from "@material-ui/core/Button";
import { FormularioLogin } from "./FormularioLogin";
import { irParaCadastro } from "../../router/Coordinator";
import { useHistory } from "react-router";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const Login = ({setRightButton}) => { // import com chaves no router

    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <br />
            <LogoImage src={CookenuLogo} />
            <FormularioLogin setRightButton={setRightButton} />
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