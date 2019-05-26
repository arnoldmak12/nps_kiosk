import React from "react";
import Toolbar from "./Menus/Toolbar/Toolbar";

class HomePage extends React.Component {
  render() {
    const homeStyle = {
      margin: '0',
    padding: '0',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, #bdbdbd6e 0%, rgba(134,134,134,1) 300%)',
    position: 'absolute'
    }

    return (
      <div style={homeStyle}>
        <Toolbar />
        {/* <main style={{ marginLeft: "300px" }}>
          <h1>This is the page content!</h1>
        </main> */}
      </div>
    );
  }
}

export default HomePage;
