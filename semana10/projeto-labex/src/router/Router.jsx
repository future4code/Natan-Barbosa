import React from 'react';

import HomePage from '../pages/HomePage';

import { AdminHomePage } from '../pages/AdminHomePage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { CreateTripPage } from '../pages/CreateTripPage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route>
                        <HomePage exact path={"/"} />
                    </Route>

                    <Route>
                        <AdminHomePage exact path={"/admin"} />
                    </Route>

                    <Route>
                        <ApplicationFormPage exact path={"/"} />
                    </Route>

                    <Route>
                        <CreateTripPage exact path={"/"} />
                    </Route>

                    <Route>
                        <ListTripsPage exact path={"/"} />
                    </Route>

                    <Route>
                        <LoginPage exact path={"/"} />
                    </Route>

                    <Route>
                        <TripDetailsPage exact path={"/"} />
                    </Route>

                </Switch>
            </BrowserRouter>
        </>
    );

}
