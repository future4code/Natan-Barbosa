import React from 'react';
import HomePage from './pages/HomePage';
import { AdminHomePage }  from './pages/AdminHomePage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { TripDetailsPage } from './pages/TripDetailsPage';

function App() {
  return (

    <div>

      <h1>App</h1>

      <ul>

        <li> <AdminHomePage /> </li>
        <li> <ApplicationFormPage /> </li>
        <li> <CreateTripPage /> </li>
        <li> <HomePage /> </li>
        <li> <ListTripsPage /> </li>
        <li> <LoginPage /> </li>
        <li> <TripDetailsPage /> </li>

      </ul>

    </div>

  );

}

export default App;
