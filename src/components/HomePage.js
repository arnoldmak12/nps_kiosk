import React from "react";
import Toolbar from "./Menus/Toolbar/Toolbar";
import BackgroundSlider from 'react-background-slider'
import grassField from '../slideShowPics/grassField.jpg';
import regMoun from '../slideShowPics/regMoun.jpg';
import snowMoun from '../slideShowPics/snowMoun.jpg';
import desert from '../slideShowPics/desert.jpg';
import desert2 from '../slideShowPics/desert2.jpg';
import flowers from '../slideShowPics/flowers.jpg';
import lake from '../slideShowPics/lake.jpg';
import moun2 from '../slideShowPics/moun2.jpg';
import { relative } from "path";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from './Menus/Toolbar/SpecficPages/Results';

class HomePage extends React.Component {
  render() {
    const homePageStyle = {
      background: 'transparent',
      position: 'absolute',
      zIndex: '10'
    }

    const backgroundStyle = {
      // width: '100%',
      // height: '100%',
      position: relative,
      zIndex: '-10',
      marginTop: '-8px',
    }

    return (
      <div>

        <Router>
          <div>
            <div style={backgroundStyle}>
              <BackgroundSlider
                images={[grassField, regMoun, snowMoun, lake, desert, flowers, moun2, desert2]}
                duration={12} transition={4} />
            </div>

            <div style={homePageStyle}>
              <Toolbar />
            </div>

            <Switch>
              <Route exact path="/results" component={Results} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default HomePage;
