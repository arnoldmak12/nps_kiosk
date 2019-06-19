import React from 'react';
import './Campgrounds.css';
import { withRouter } from 'react-router-dom';

class Campgrounds extends React.Component {

    componentDidMount () {
        
    console.log(this.props.location.state);
      }

    render() {

        

        return (

            <div className="campground-page">

                <h1>YYYYYYYYYYEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</h1>
                {/* <h2>{this.props.location.state.data}</h2> */}

            </div>
        );
    }
}

export default withRouter(Campgrounds);