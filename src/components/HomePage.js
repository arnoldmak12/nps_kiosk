import React from "react";
import Toolbar from "./Menus/Toolbar/Toolbar";
import BackgroundSlideShow from 'react-background-slideshow';

import grassField from '../slideShowPics/grassField.jpg';
import regMoun from '../slideShowPics/regMoun.jpg';
import snowMoun from '../slideShowPics/snowMoun.jpg';
import waterfall from '../slideShowPics/waterfall.jpg';
import { relative } from "path";

class HomePage extends React.Component {
  render() {
    const homePageStyle = {
      margin: '0',
      padding: '0',
      width: '100%',
      height: '100%',
      background: 'transparent',
      position: 'absolute',
      zIndex: '10'
    }

    const backgroundStyle = {
      // width: '100%',
      // height: '100%',
      position: relative,
      zIndex: '-10'
    }

    return (
      <div>

        <div style={backgroundStyle}>
          <BackgroundSlideShow images={[grassField, regMoun, snowMoun, waterfall]} />
        </div>

        <div style={homePageStyle}>
          <Toolbar />
        </div>

      </div>
    );
  }
}

export default HomePage;
