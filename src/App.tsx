import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';

function App() {
    return (
        <>
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
            <ClassComponent data="a watch" num={20} />
            <ClassComponent data="an apple" num={10} />
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
        </>
    );
}

export default App;
