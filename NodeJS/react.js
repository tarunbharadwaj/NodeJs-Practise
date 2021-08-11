//In in react js we have src and public folder where src has index.js and public has index.html

//In index.js

//ES6 syntax
import React from 'react';
import { ReactDOM } from 'react-dom';

const App = () => {
    return(
        <React.Fragment>
            <h1>Welcome to react</h1>
        </React.Fragment>
    )
}

//ES5 Syntax
var React = require('react');
var ReactDOM = require('react-dom');

function App(){
    return(
        <React.Fragment>
            <h1>Welcome to react</h1>
        </React.Fragment>
    )
}



                //function name and to be as render
ReactDOM.render(<App/>,document.getElementById('root'))