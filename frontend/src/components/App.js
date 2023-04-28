import React, { Component } from 'react';
import { render } from 'react-dom';
import Cards from './Cards';

export default function App() {
    
        return (
                <Cards/>
            
        );
    
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);