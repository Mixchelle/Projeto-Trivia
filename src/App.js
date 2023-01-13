import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
        <Switch>
          <Route path="/" component={ Login } exact />
          <Route exact path="/game" component={ Game } />
          <Route exact path="/settings" component={ Settings } />
          <Route exact path="/feedback" component={ Feedback } />
          <Route exact path="/ranking" component={ Ranking } />
        </Switch>
      </header>
    </div>
  );
}
