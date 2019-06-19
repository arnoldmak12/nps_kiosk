import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { ConnectedRouter } from 'connected-react-router';
import Campgrounds from './components/Menus/Toolbar/SpecficPages/ResultPages/Campgrounds';
// import configureStore, { history } from './store';
import './index.css';
import HomePage from './components/HomePage'
import * as serviceWorker from './serviceWorker';
import BackgroundSlider from 'react-background-slider'
import grassField from './slideShowPics/grassField.jpg';
import regMoun from './slideShowPics/regMoun.jpg';
import snowMoun from './slideShowPics/snowMoun.jpg';
import desert from './slideShowPics/desert.jpg';
import desert2 from './slideShowPics/desert2.jpg';
import flowers from './slideShowPics/flowers.jpg';
import lake from './slideShowPics/lake.jpg';
import moun2 from './slideShowPics/moun2.jpg';
import { relative } from "path";

const backgroundStyle = {
    // width: '100%',
    // height: '100%',
    position: relative,
    zIndex: '-10',
    marginTop: '-8px',
  }

ReactDOM.render(
    
    <Router>

            <div style={backgroundStyle}>
              <BackgroundSlider
                images={[grassField, regMoun, snowMoun, lake, desert, flowers, moun2, desert2]}
                duration={12} transition={4} />
            </div>

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Campgrounds" component={Campgrounds} />
            </Switch>

    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
