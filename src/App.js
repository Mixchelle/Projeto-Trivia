import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } exact />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}
