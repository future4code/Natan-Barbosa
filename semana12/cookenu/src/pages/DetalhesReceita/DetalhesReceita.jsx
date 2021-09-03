import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from '../../hooks/useRequestData';
import { BaseUrl } from '../../constants/Urls';
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled";
import { Typography } from "@material-ui/core";
import { Loading } from "../../components/Loading/Loading";

export const DetalhesReceita = () => { // import com chaves no router
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BaseUrl}/recipe/${params.id}`)[0]
    console.log(recipe)

    return (
        <ScreenContainer>
            {recipe ? <RecipeContainer>
                <RecipeImage src={recipe.image} />
                <Typography
                    gutterBottom
                    align={"center"}
                    variant={"h5"}
                    color={"primary"}
                >{recipe.title}</Typography>
                <Typography
                    align={"justify"}
                    variant={"h6"}
                >{recipe.description}</Typography>
            </RecipeContainer> : <Loading />}
        </ScreenContainer>
    )
}