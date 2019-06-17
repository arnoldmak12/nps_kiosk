import React from 'react';
import "./Results.css"

const API = 'https://developer.nps.gov/api/v1/';
const KEY = '&api_key=AI3Sb31dnYFgJ5i9j7ukjZfNv8P3aQXEGUI2LUVP';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      lookup: [],
    };
  }

  componentDidMount() {
    fetch(API + this.props.type + '?stateCode=' + this.props.state + '&limit=50&q=' + this.props.search + KEY)
      .then(response => response.text())
      .then(lookup => this.setState({ lookup }));
  }

  handleChange(event) {
    event.preventDefault()
    
  }
  render() {

    return (
      <div className="park-page">

      {/* <h1>TEST</h1> */}

      {/* <script async defer
      src="https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=AI3Sb31dnYFgJ5i9j7ukjZfNv8P3aQXEGUI2LUVP">
        </script> */}
        {this.state.lookup}
        <h1>TEST</h1>


      </div>
    )
  }
}

export default Results;