import React from 'react';
import "./Results.css"
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API = 'https://developer.nps.gov/api/v1/';
const KEY = '&api_key=AI3Sb31dnYFgJ5i9j7ukjZfNv8P3aQXEGUI2LUVP';

const LOADING = (
  <ReactLoading type={'spinningBubbles'} color={'white'} height={170} width={170} />
);

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      entryClick: false,
      viewIndex: 0,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(API + this.props.type + '?stateCode=' + this.props.state + '&limit=3&q=' + this.props.search + KEY);
      const json = await response.json();
      this.setState({
        total: json.total, data: Object.entries(json.data), entryClick: false,
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  handleClick(index) {
    this.setState({
      entryClick: true,
      viewIndex: index,
    });
  }

  render() {

    if (this.state.total === "0") {
      return (
        <div className="park-page">

          <li className="result-entry" >

            <h1 className="result-name">No Results Found</h1>

          </li>
        </div>
      );
    }
    else {
      let temp = [];
      // Will needparse int to convert string to int OR limit 10ish
      for (var i = 0; i < 3; i++) {
        temp[i] = i;
      }

      if (this.state.entryClick) {

        console.log(this.state.data[this.state.viewIndex][1])///////////////////////////////////////////////////////////

        switch (this.props.type) {
          default: break;
          case 'Campgrounds':
            var total = 0;
            let center;
            if (this.state.data[this.state.viewIndex][1].latLong !== "") {
              let latLong = this.state.data[this.state.viewIndex][1].latLong;
              let lat = latLong.substring(latLong.indexOf("lat:") + 4, latLong.indexOf(","))
              let lng = latLong.substring(latLong.indexOf("lng:") + 4, latLong.length - 1)

              center = {
                lat: parseInt(lat),
                lng: parseInt(lng)
              }
            }

            return (
              <div className="park-page">

                <li className="result-entry" >

                  <h1 className="result-name">{this.state.data[this.state.viewIndex][1].name}</h1>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">Description:</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].description}</p>

                </li>
                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.data[this.state.viewIndex][1].directionsoverview !== "" ? "Directions Overview:" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].directionsoverview}</p>

                </li>

                <li className="result-entry-map" >

                  {/* <h2 className="result-subheader">Location:</h2> */}

                  <div style={{ height: '70vh', width: '80%' , marginLeft: "150px"}}>
                    {(this.state.data[this.state.viewIndex][1].latLong !== "") ?
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyB03lfQ96hLcGvlKDbj1hmBglDP3sog2Tc" }}
                        defaultCenter={center}
                        defaultZoom={11}
                      >
                        <AnyReactComponent
                          lat={center.lat}
                          lng={center.lng}
                          text={this.state.data[this.state.viewIndex][1].name}
                        />
                      </GoogleMapReact>
                      : "Map Unavailable"}
                  </div>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.data[this.state.viewIndex][1].regulationsoverview !== "" ?
                    "Regulations Overview" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].regulationsoverview}</p>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.data[this.state.viewIndex][1].weatheroverview !== "" ? "Weather Overview:" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].weatheroverview}</p>

                </li>

                <li className="result-entry" >
                  <h2 className="result-subheader">Accessibility:</h2>

                  {
                    (Object.entries(this.state.data[this.state.viewIndex][1].accessibility)).map((current, index) => {

                      let subHeader = "";

                      switch (current[0]) {
                        default: break;

                        case "wheelchairaccess":
                          subHeader = "Wheelchair Access"
                          break;

                        case "cellphoneinfo":
                          subHeader = "Cellphone Info"
                          break;

                        case "firestovepolicy":
                          subHeader = "Fire Stove Policy"
                          break;

                        case "additionalinfo":
                          subHeader = "Additional Info"
                          break;

                        case "adainfo":
                          subHeader = "ADA Info"
                          break;

                        case "rvinfo":
                          subHeader = "RV Info"
                          break;

                        case "accessroads":
                          subHeader = "Access Roads"
                          break;

                        case "classifications":
                          subHeader = "Classifications"
                          break;
                      }
                      //Keeps track of the amount of details used
                      if (current[1] !== "" && (isNaN(current[1])) ? subHeader : null) {
                        total++;
                      }

                      return (
                        <div>

                          <h2 className="result-header">{current[1] !== "" && (isNaN(current[1]) ? subHeader : null)}</h2>

                          <p className="result-description">{current[1] !== "" && (isNaN(current[1]) ? current[1] : null)}</p>

                          <p className="result-description">{(subHeader === "Classifications" && total === 0) ? "No Info Availible" : null}</p>

                        </div>
                      );
                    })}
                </li>
              </div>
            );
        }

      }
      else {
        if (!this.state.total) {
          return (<div className="park-page-loading">{LOADING}</div>)
        }
        else {
          return (
            <div className="park-page">

              {'LOOKUP LINK: ' + API + this.props.type + '?stateCode=' + this.props.state + '&limit=3&q=' + this.props.search + KEY}

              <h1>------------------------------------------------BELOW ME------------------------------------------------</h1>

              {temp.map((current, index) => {
                  return (


                    <li className="result-entry" >

                      <button onClick={() => this.handleClick(index)}>

                        <h2 className="result-header">{this.state.data[index][1].name ? this.state.data[index][1].name : this.state.data[index][1].title}</h2>

                        <p className="result-description">{this.state.data[index][1].description}</p>

                      </button>

                    </li>
                  );})
              }
            </div>
          )
        }
      }
    }

  }
}

export default withRouter(Results);