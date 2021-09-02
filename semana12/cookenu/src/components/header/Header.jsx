import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { irParaLogin, irParaLista } from '../../router/Coordinator';
import { useHistory } from 'react-router';

export const Header = ({rightButtonText, setRightButton}) => {
    
    const token = localStorage.getItem("token")

    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButton("Login")
            irParaLogin(history)
        } else {
            irParaLogin(history)
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => irParaLista(history)} color="inherit">Cookenu</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}
