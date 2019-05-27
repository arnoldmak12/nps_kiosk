import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage'

import BackgroundSlideShow from 'react-background-slideshow';

import grassField from './slideShowPics/grassField.jpg';
import regMoun from './slideShowPics/regMoun.jpg';
import snowMoun from './slideShowPics/snowMoun.jpg';
import waterfall from './slideShowPics/waterfall.jpg';

function App() {
  return (
    <Router>
      <div>
        {/* <div className="background">
          <BackgroundSlideShow images={[grassField, regMoun, snowMoun, waterfall]} />
        </div> */}

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