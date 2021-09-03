import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import useForm from '../../hooks/useForm'
import { InputsContainer } from './styled';
import { AddRecipeFormContainer } from './styled';

import { criarReceita } from '../../services/Recipe';



export const AddRecipeForm = () => {
    
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

  
    const onSubmitForm = (event) => {
        event.preventDefault()
        criarReceita(form, clear)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>

                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        variant={"outlined"}
                        fullWidth
                        required
                        margin={"normal"}
                    />

                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"Foto"}
                        variant={"outlined"}
                        fullWidth
                        required
                        margin={"normal"}
                    />

                </InputsContainer>
                <Button
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >Adicionar receita
                </Button>
            </AddRecipeFormContainer>
        </form>
    )

}