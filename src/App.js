import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import APositive from './components/Entry Form/APositive';
import ANegative from './components/Entry Form/ANegative';
import BPositive from './components/Entry Form/BPositive';
import BNegative from './components/Entry Form/BNegative';
import OPositive from './components/Entry Form/OPositive';
import ONegative from './components/Entry Form/ONegative';
import ABPositive from './components/Entry Form/ABPositive';
import ABNegative from './components/Entry Form/ABNegative';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aPositive"> <APositive /> </Route>
          <Route path="/aNegative"> <ANegative /> </Route>
          <Route path="/bPositive"> <BPositive /> </Route>
          <Route path="/bNegative"> <BNegative /> </Route>
          <Route path="/oPositive"> <OPositive /> </Route>
          <Route path="/oNegative"> <ONegative /> </Route>
          <Route path="/abPositive"> <ABPositive /> </Route>
          <Route path="/abNegative"> <ABNegative /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
