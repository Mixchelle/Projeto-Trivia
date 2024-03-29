import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/Projeto-Trivia/" component={ Login } exact />
        <Route exact path="/Projeto-Trivia/game" component={ Game } />
        <Route exact path="/Projeto-Trivia/settings" component={ Settings } />
        <Route exact path="/Projeto-Trivia/feedback" component={ Feedback } />
        <Route exact path="/Projeto-Trivia/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}
