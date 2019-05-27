import React from "react";
import ToolbarButton from "../ToolbarButtons/ToolbarButton";

import Search from "./SpecficPages/Search";
import Home from "./SpecficPages/Home";
import {
  faSearch,
  faBuilding,
  faFolder,
  faHome,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import largeLogo from "./Icons/largeLogo.png";
import smallLogo from "./Icons/smallLogo.png";
import "./Toolbar.css";

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isMini: true,
      activeSidebar: ""
    };
  }

  render() {
    const props = this.props;
    if (!props.show) {
      return (
        <header className={this.state.isMini ? "mini_toolbar" : "toolbar"}>
          <nav className="toolbar__navigation">
            <div className="spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <div className="toolbar__icon">
                  <img
                    src={this.state.isMini ? smallLogo : largeLogo}
                    alt="Logo"
                    // style={ {marginLeft: "15px"}}
                    style={ {marginLeft: "15px"}}
                    style= {{width: "400px"}}

                  />
                </div>

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Collapse"}
                      isMini={this.state.isMini}
                      icon={this.state.isMini ? faChevronRight : faChevronLeft}
                      showSidebar={false}
                      onClick={() => {
                        this.setState({
                          isMini: !this.state.isMini
                        });
                      }}
                    />
                  </div>
                </li>

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Home"}
                      icon={faHome}
                      isMini={this.state.isMini}
                      sidebarComponent={<Home />}
                      showSidebar={this.state.activeSidebar === "Home"}
                      onClick={() => {
                        this.setState({
                          activeSidebar:
                            this.state.activeSidebar !== "Home" ? "Home" : ""
                        });
                      }}
                    />
                  </div>
                </li>

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Search"}
                      icon={faSearch}
                      isMini={this.state.isMini}
                      sidebarComponent={<Search />}
                      showSidebar={this.state.activeSidebar === "Search"}
                      onClick={() => {
                        this.setState({
                          activeSidebar:
                            this.state.activeSidebar !== "Search" ? "Search" : ""
                        });
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      );
    } else {
      return <div />;
    }
  }
}

export default Toolbar;
