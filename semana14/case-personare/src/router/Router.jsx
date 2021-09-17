import React from "react";
import GamePage from "../pages/GamePage/GamePage";
import MainPage from "../pages/MainPage/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>

            <Switch>
                
                <Route exact path={"/"}>
                    <MainPage />
                </Route>

                <Route exact path={"/GamePage"}>
                    <GamePage />
                </Route>

            </Switch>
            
        </BrowserRouter>

    )
}

export default Router