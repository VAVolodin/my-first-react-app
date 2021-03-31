import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
// import ClassComponent from './ClassComponent';

function App() {
    return (
        <>
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
            <ClassComponent title="a watch" cost={20} max={20} />
            <ClassComponent title="an apple" cost={10} max={50} />
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
        </>
    );
}

export default App;
