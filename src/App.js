import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Feedbacks from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } exact />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/game" component={ Game } />
      <Route exact path="/feedback" component={ Feedbacks } />
    </Switch>
  );
}
