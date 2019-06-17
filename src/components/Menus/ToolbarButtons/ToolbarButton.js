import React from "react";
import "./ToolbarButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ToolbarButton extends React.Component {
  handleClick() {
    this.props.onClick();
  }

  render() {
    let component = this.props.sidebarComponent;
    let chevR;

    if (!this.props.showSidebar) {
      component = null;
    }

    if (this.props.title === "Collapse"){
      chevR = {
        marginLeft: '10px'
      };
    }


    return (
      <div>
        <button className="toggle-button" onClick={this.handleClick.bind(this)}>
          {!this.props.isMini ? (
            <p className="toggle-button-text">
              <FontAwesomeIcon icon={this.props.icon} size="xs"/>
              <p className="title">{this.props.title}</p>
            </p>
          ) : (
            <p className="toggle-button-text">
              <FontAwesomeIcon icon={this.props.icon} style={chevR} size="xs"/>
            </p>
          )}
        </button>
        {/* {this.props.isMini ? (
           <div style={{ marginLeft: "90px" }}>{component}</div>
        ) : (
          <div style={{ marginLeft: "410px" }}>{component}</div>

        )} */}

        {component}
       
      </div>
    );
  }
}

export default ToolbarButton;
