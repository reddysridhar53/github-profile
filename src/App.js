import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users/:userName' component={UserDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
