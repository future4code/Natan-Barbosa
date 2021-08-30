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

                    <Route exact path={"/"} >
                        <HomePage />
                    </Route>

                    <Route exact path={"/admin-home"} >
                        <AdminHomePage />
                    </Route>

                    <Route exact path={"/application-form"} >
                        <ApplicationFormPage />
                    </Route>

                    <Route exact path={"/create-trip"} >
                        <CreateTripPage />
                    </Route>

                    <Route exact path={"/list-trips"} >
                        <ListTripsPage />
                    </Route>

                    <Route exact path={"/login"} >
                        <LoginPage />
                    </Route>

                    <Route exact path={"/trip-details"} >
                        <TripDetailsPage />
                    </Route>

                </Switch>
            </BrowserRouter>
        </>
    );

}
