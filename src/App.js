import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Collect all the blood group data 

import APositive from './components/Entry Form/APositive';
import ANegative from './components/Entry Form/ANegative';
import BPositive from './components/Entry Form/BPositive';
import BNegative from './components/Entry Form/BNegative';
import OPositive from './components/Entry Form/OPositive';
import ONegative from './components/Entry Form/ONegative';
import ABPositive from './components/Entry Form/ABPositive';
import ABNegative from './components/Entry Form/ABNegative';

// Show all the blood group data 

import APositiveData from './components/Show Data/APositiveData';
import ANegativeData from './components/Show Data/ANegativeData';
import BPositiveData from './components/Show Data/BPositiveData';
import BNegativeData from './components/Show Data/BNegativeData';
import OPositiveData from './components/Show Data/OPositiveData';
import ABPositiveData from './components/Show Data/ABPositiveData';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* POST Data to Database  */}

          <Route path="/aPositive"> <APositive /> </Route>
          <Route path="/aNegative"> <ANegative /> </Route>
          <Route path="/bPositive"> <BPositive /> </Route>
          <Route path="/bNegative"> <BNegative /> </Route>
          <Route path="/oPositive"> <OPositive /> </Route>
          <Route path="/oNegative"> <ONegative /> </Route>
          <Route path="/abPositive"> <ABPositive /> </Route>
          <Route path="/abNegative"> <ABNegative /> </Route>

          {/* GET Data from Database  */}

          <Route path="/getAPositive"> <APositiveData /> </Route>
          <Route path="/getANegative"> <ANegativeData /> </Route>
          <Route path="/getBPositive"> <BPositiveData /> </Route>
          <Route path="/getBNegative"> <BNegativeData /> </Route>
          <Route path="/getOPositive"> <OPositiveData /> </Route>
          <Route path="/getABPositive"> <ABPositiveData /> </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
