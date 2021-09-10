import React from "react"
import AdicionarReceita from '../pages/AdicionarReceita/AdicionarReceita' // import sem chaves por causa do export default
import { Cadastro } from '../pages/Cadastro/Cadastro'
import { DetalhesReceita } from '../pages/DetalhesReceita/DetalhesReceita'
import { ListaReceitas } from '../pages/ListaReceitas/ListaReceitas'
import { Login } from '../pages/Login/Login'
import { Erro } from '../pages/Erro/Erro'
import { Switch, Route } from "react-router-dom"

export const Router = ({setRightButton}) => {
    return (

        <Switch> {/*ordena as paginas e renderiza so a primeira Route*/}

            <Route exact path={"/"}>
                <ListaReceitas />
            </Route>

            <Route exact path={"/Login"}> {/*abraça a pagina para o Switch fazer a troca*/}
                <Login setRightButton={setRightButton} />
            </Route>

            <Route exact path={"/Cadastro"}>
                <Cadastro setRightButton={setRightButton} />
            </Route>

            <Route exact path={"/AdicionarReceita"}>
                <AdicionarReceita />
            </Route>

            <Route exact path={"/DetalhesReceita/:id"}>
                <DetalhesReceita />
            </Route>

            <Route>
                <Erro /> {/*última página por ser o caso default*/}
            </Route>

        </Switch>

    )
}
