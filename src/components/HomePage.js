import React from "react";
import Toolbar from "./Menus/Toolbar/Toolbar";

class HomePage extends React.Component {
  render() {
    const homePageStyle = {
      background: 'transparent',
      position: 'absolute',
      zIndex: '10'
    }

    return (
      <div>

            <div style={homePageStyle}>
              <Toolbar />
            </div>

      </div>
    );
  }
}

export default HomePage;
