import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputsContainer, SignUpFormContainer } from "./styled";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/User";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";


export const FormularioCadastro = ({setRightButton}) => { // import com chaves no router

    const history = useHistory()

    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        
        event.preventDefault()
        signUp(form, clear, history, setRightButton, setIsLoading)
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>

                <SignUpFormContainer>

                    <InputsContainer>

                        <TextField
                            value={form.name}
                            name={"name"}
                            onChange={onChange}
                            label={"Nome"}
                            variant={"outlined"}
                            fullWidth
                            required
                            autoFocus
                            margin={"normal"}
                        />

                        <TextField
                            value={form.email}
                            name={"email"}
                            onChange={onChange}
                            label={"Email"}
                            variant={"outlined"}
                            type={"email"}
                            fullWidth
                            required
                            margin={"normal"}
                        />

                        <TextField
                            value={form.password}
                            name={"password"}
                            onChange={onChange}
                            label={"Senha"}
                            variant={"outlined"}
                            type={"password"}
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
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar</>} 
                    </Button>

                </SignUpFormContainer>

            </form>

        </>
    )
}