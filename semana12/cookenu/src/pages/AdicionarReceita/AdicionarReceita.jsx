import { Typography } from "@material-ui/core";
import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { AddRecipeForm } from "./FormularioAdicionar";
import { RecipeContainer, ScreenContainer } from "./styled";

const AdicionarReceita = () => {
    useProtectedPage()
    return (
        <ScreenContainer>
            <RecipeContainer>
                <Typography
                    gutterBottom
                    variant={"h4"}
                    align={"center"}
                    color={"textPrimary"}
                >Adicionar uma nova receita:</Typography>
                <AddRecipeForm />
            </RecipeContainer>
        </ScreenContainer>
    )
}

export default AdicionarReceita // import sem chaves no router