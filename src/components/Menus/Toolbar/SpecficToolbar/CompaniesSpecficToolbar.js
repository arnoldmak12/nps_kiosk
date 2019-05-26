import React from "react";
import "../Toolbar.css";

const CompaniesSpecificToolbar = props => {
  return (
    <div className="specificToolbar">
      <header className="specific_toolbar" onClick={props.click}>
        <nav className="toolbar__navigation">
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <p>- View Companies</p>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default CompaniesSpecificToolbar;
