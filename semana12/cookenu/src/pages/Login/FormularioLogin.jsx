import React from "react";
import { InputsContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm"
import { login } from "../../services/User";
import { useHistory } from "react-router-dom";


export const FormularioLogin = ({setRightButton}) => { // import com chaves no router
    const history = useHistory()

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        login(form, clear, history, setRightButton)
        event.preventDefault()
    }

    return (
        <>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label="Senha"
                        variant="outlined"
                        fullWidth
                        required
                        type={"password"}
                    />
                    <br /><br />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    > Entrar </Button>
                </form>
            </InputsContainer>
        </>
    )
}