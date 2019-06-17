import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { ConnectedRouter } from 'connected-react-router';

// import configureStore, { history } from './store';
import './index.css';
import HomePage from './components/HomePage'
import Results from "./components/Menus/Toolbar/SpecficPages/Results";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            {/* <ConnectedRouter history={history}> */}

            <HomePage />

            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/results" component={Results} /> */}
            </Switch>
            {/* </ConnectedRouter> */}
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
