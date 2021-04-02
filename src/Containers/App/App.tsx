import React from 'react';
import logo from '../../assets/style/image/logo.svg';
import './App.css';
import Counter from '../Counter';
// import ClassComponent from './ClassComponent';

function App() {
    return (
        <>
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
            <Counter title="a watch" cost={20} max={20} />
            <Counter title="an apple" cost={10} max={50} />
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="App-logo" />
                <img src={logo} alt="logo" className="App-logo" />
            </div>
        </>
    );
}

export default App;
