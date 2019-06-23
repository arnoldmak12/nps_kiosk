import React from 'react';
import ReactDOM from 'react-dom';
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
import night from './slideShowPics/night2.jpg';
import night2 from './slideShowPics/night3.jpg';
import sand from './slideShowPics/sand.jpg';
import { relative } from "path";

const backgroundStyle = {
  position: relative,
  zIndex: '-10',
  marginTop: '-8px',
}

ReactDOM.render(
  <div>
    <div style={backgroundStyle}>
      <BackgroundSlider
        images={[sand, night, desert2, snowMoun, night2, grassField, regMoun,  lake,  desert, flowers, moun2]}
        duration={12} transition={4} />
    </div>

    <HomePage />
  </div>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
