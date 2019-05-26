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

    if (this.props.title == "Collapse"){
      chevR = {
        marginLeft: '10px'
      };
    }


    return (
      <div>
        <button className="toggle-button" onClick={this.handleClick.bind(this)}>
          {!this.props.isMini ? (
            <p className="toggle-button-text">
              <FontAwesomeIcon icon={this.props.icon} />
              <p>{this.props.title}</p>
            </p>
          ) : (
            <p className="toggle-button-text">
              <FontAwesomeIcon icon={this.props.icon} style={chevR}/>
            </p>
          )}
        </button>
        {this.props.isMini ? (
           <div style={{ marginLeft: "75px" }}>{component}</div>
        ) : (
          <div style={{ marginLeft: "235px" }}>{component}</div>

        )}
       
      </div>
    );
  }
}

export default ToolbarButton;
