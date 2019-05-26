import React from 'react';
import '../Toolbar.css';

const UsersSpecificToolbar = props => {
    return (
        <div className="specificToolbar">

            <header className="specific_toolbar">

                <nav className="toolbar__navigation">

                    <div className="toolbar_navigation-items">
                        <ul>

                            <li>
                                <p>- View Users</p>
                            </li>


                        </ul>
                    </div>
                </nav>


            </header>
        </div>
    )


}

export default UsersSpecificToolbar;