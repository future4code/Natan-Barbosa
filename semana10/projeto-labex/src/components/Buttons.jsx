import React from 'react';
import styled from 'styled-components';

export const DefaultButton = styled.button`
& {
    background-color: #0b0433;
    color: white;
    border: 1px solid #0b0433;
    border-radius: 50px;
    padding: 5px 10px;
    font-weight: bold;
    margin: 5px;
    width: 150px;
}
:hover {
    background-color: purple;
    border: 1px solid purple;
}
:active {
    background-color: grey;
    border: 1px solid grey;
}`

export const HomePageButton = styled.button`
& {
    background-color: #0b0433;
    color: white;
    border: 1px solid #0b0433;  
    padding: 5px 10px;
    margin: 5px;
    font-size: 50px;
    width: 300px
}
:hover {
    background-color: purple;
    border: 1px solid purple;
}
:active {
    background-color: grey;
    border: 1px solid grey;
    
}`





