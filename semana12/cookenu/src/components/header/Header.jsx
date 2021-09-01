import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { irParaLogin, irParaLista } from '../../router/Coordinator';
import { useHistory } from 'react-router';

export const Header = () => {

    const history = useHistory()

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => irParaLista(history)} color="inherit">Cookenu</Button>
                <Button onClick={() => irParaLogin(history)} color="inherit">Login</Button>
            </StyledToolbar>
        </AppBar>
    );
}
