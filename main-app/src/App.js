import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React 15 Portal</h1>
                </header>
                <div className="App-content">
                    <div className="Menu">
                        <NavLink className="Menu-Item" exact to="/" activeClassName="Menu-Item--Selected">Main App</NavLink>
                        <NavLink className="Menu-Item" exact to="/react" activeClassName="Menu-Item--Selected">React App</NavLink>
                        <NavLink className="Menu-Item" exact to="/angular" activeClassName="Menu-Item--Selected">Angular App</NavLink>  
                    </div>
                    <div className="App-container">
                        <div id="react-app"/>
                        <div id="angular-app"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
