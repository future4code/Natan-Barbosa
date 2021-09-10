import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

import useForm from '../../hooks/useForm'
import { InputsContainer } from './styled';
import { AddRecipeFormContainer } from './styled';

import { criarReceita } from '../../services/Recipe';
import { useState } from 'react';

import { CircularProgress } from "@material-ui/core";

export const AddRecipeForm = () => {
    
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })

    const [isLoading, setIsLoading] = useState(false)

  
    const onSubmitForm = (event) => {
        event.preventDefault()
        criarReceita(form, clear, setIsLoading)
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
                >{isLoading? <CircularProgress color={"inherit"} size={24}/> : <>Adicionar</>}
                </Button>
            </AddRecipeFormContainer>
        </form>
    )

}