import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { useRequestData } from "../../hooks/useRequestData";
import { BaseUrl } from "../../constants/Urls";
import { RecipeListContainer } from "./styled";
import { AddRecipeButton } from "./styled";
import { Add } from "@material-ui/icons";
import { irParaAdicionarReceita, irParaDetalhes } from "../../router/Coordinator";
import { useHistory } from "react-router";

export const ListaReceitas = () => { // import com chaves no router
    useProtectedPage()
    const recipes = useRequestData([], `${BaseUrl}/recipe/feed`)
    const history = useHistory()

    const onClickCard = (id) => {
        irParaDetalhes(history, id)
    }

    const recipesCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipesCards}
            <AddRecipeButton
                color={"primary"}
            >
                <Add onClick={() => irParaAdicionarReceita(history)} />
            </AddRecipeButton>
        </RecipeListContainer>
    )
}