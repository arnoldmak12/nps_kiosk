import React from "react";
import ToolbarButton from "../ToolbarButtons/ToolbarButton";

import CompaniesSpecificToolbar from "./SpecficToolbar/CompaniesSpecficToolbar";
import ContactsSpecificToolbar from "./SpecficToolbar/ContactsSpecficToolbar";
import ProjectsSpecificToolbar from "./SpecficToolbar/ProjectsSpecficToolbar";
import SearchSpecificToolbar from "./SpecficToolbar/SearchSpecficToolbar";
import {
  faSearch,
  faBuilding,
  faFolder,
  faAddressBook,
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
                    // style= {{width: "20px"}}

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
                      title={"Search"}
                      icon={faSearch}
                      isMini={this.state.isMini}
                      sidebarComponent={<SearchSpecificToolbar />}
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

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Companies"}
                      icon={faBuilding}
                      isMini={this.state.isMini}
                      sidebarComponent={<CompaniesSpecificToolbar />}
                      showSidebar={this.state.activeSidebar === "Companies"}
                      onClick={() => {
                        this.setState({
                          activeSidebar:
                            this.state.activeSidebar !== "Companies"
                              ? "Companies"
                              : ""
                        });
                      }}
                    />
                  </div>
                </li>

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Projects"}
                      icon={faFolder}
                      isMini={this.state.isMini}
                      sidebarComponent={<ProjectsSpecificToolbar />}
                      showSidebar={this.state.activeSidebar === "Projects"}
                      onClick={() => {
                        this.setState({
                          activeSidebar:
                            this.state.activeSidebar !== "Projects"
                              ? "Projects"
                              : ""
                        });
                      }}
                    />
                  </div>
                </li>

                <li>
                  <div className="toolbar__icon">
                    <ToolbarButton
                      title={"Contacts"}
                      icon={faAddressBook}
                      isMini={this.state.isMini}
                      sidebarComponent={<ContactsSpecificToolbar />}
                      showSidebar={this.state.activeSidebar === "Contacts"}
                      onClick={() => {
                        this.setState({
                          activeSidebar:
                            this.state.activeSidebar !== "Contacts"
                              ? "Contacts"
                              : ""
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
