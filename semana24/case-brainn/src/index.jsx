import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainHeader from "./Components/MainHeader";

ReactDOM.render(
  <React.StrictMode>
    <MainHeader/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);