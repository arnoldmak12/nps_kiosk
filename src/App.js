import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'

import BackgroundSlideShow from 'react-background-slideshow';

function App() {
  return (
    <Router>
      <div>

        <HomePage />

        {/* <Switch>
          <Route path="/test/" Component={UsersSpecificToolbar} />
          <Route path="/test2/" Component={CompaniesSpecificToolbar} />
        </Switch> */}

      </div>
    </Router>

  );
}

export default App;