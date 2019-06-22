import React from 'react';
import "./Results.css"
import ReactLoading from 'react-loading';
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
      const response = await fetch(API + this.props.type + '?stateCode=' + this.props.state + '&limit=6&q=' + this.props.search + KEY);
      const json = await response.json();
      this.setState({
        total: json.total, data: Object.entries(json.data), entryClick: false,
        needAlerts: true, needEvents: true, needArticles: true, needNews: true, needLessons: true,
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  async fetchAlerts(parkCode) {
    if (this.state.needAlerts) {
      try {
        this.setState({ needAlerts: false })
        const alert_response = await fetch(API + 'Alerts?parkCode=' + parkCode + KEY);
        const alert_json = await alert_response.json();
        this.setState({
          alert_total: alert_json.total, alert_data: Object.entries(alert_json.data),
        });
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  async fetchArticles(parkCode) {
    if (this.state.needArticles) {
      try {
        this.setState({ needArticles: false })
        const article_response = await fetch(API + 'Articles?parkCode=' + parkCode + KEY);
        const article_json = await article_response.json();
        this.setState({
          article_total: article_json.total, article_data: Object.entries(article_json.data),
        });
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  async fetchEvents(parkCode) {
    if (this.state.needEvents) {
      try {
        this.setState({ needEvents: false })
        const event_response = await fetch(API + 'Events?parkCode=' + parkCode + KEY);
        const event_json = await event_response.json();
        this.setState({
          event_total: event_json.total, event_data: Object.entries(event_json.data),
        });
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  async fetchLessons(parkCode) {
    if (this.state.needLessons) {
      try {
        this.setState({ needLessons: false })
        const lessons_response = await fetch(API + 'Lessonplans?parkCode=' + parkCode + KEY);
        const lessons_json = await lessons_response.json();
        this.setState({
          lessons_total: lessons_json.total, lessons_data: Object.entries(lessons_json.data),
        });
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  async fetchNews(parkCode) {
    if (this.state.needNews) {
      try {
        this.setState({ needNews: false })
        const news_response = await fetch(API + 'NewsReleases?parkCode=' + parkCode + KEY);
        const news_json = await news_response.json();
        this.setState({
          news_total: news_json.total, news_data: Object.entries(news_json.data),
        });
      }
      catch (error) {
        console.log(error)
      }
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
      let length = parseInt(this.state.total);
      length = (length ? (length > 6 ? 6 : length) : 1);
      console.log(length);
      // Will needparse int to convert string to int OR limit 10ish
      for (var i = 0; i < length; i++) {
        temp[i] = i;
      }

      if (this.state.entryClick) {
        this.fetchAlerts(this.state.data[this.state.viewIndex][1].parkCode);
        this.fetchArticles(this.state.data[this.state.viewIndex][1].parkCode);
        this.fetchEvents(this.state.data[this.state.viewIndex][1].parkCode);
        this.fetchLessons(this.state.data[this.state.viewIndex][1].parkCode);
        this.fetchNews(this.state.data[this.state.viewIndex][1].parkCode);

        // console.log(this.state.article_data)///////////////////////////////////////////////
        switch (this.props.type) {
          default: break;
          case 'Campgrounds':
          case 'Parks':
          case 'VisitorCenters':

            console.log(this.state.data[this.state.viewIndex][1].parkCode)

            var total = 0;
            let center;
            if (this.props.type === "Campgrounds" || this.props.type === "VisitorCenters") {
              if (this.state.data[this.state.viewIndex][1].latLong !== "") {
                let latLong = this.state.data[this.state.viewIndex][1].latLong;
                let lat = latLong.substring(latLong.indexOf("lat:") + 4, latLong.indexOf(","))
                let lng = latLong.substring(latLong.indexOf("lng:") + 4, latLong.length - 1)

                center = {
                  lat: parseInt(lat),
                  lng: parseInt(lng)
                }
              }
            } else {
              if (this.state.data[this.state.viewIndex][1].latLong !== "") {
                let latLong = this.state.data[this.state.viewIndex][1].latLong;
                let lat = latLong.substring(latLong.indexOf("lat:") + 4, latLong.indexOf(","))
                let lng = latLong.substring(latLong.indexOf("long:") + 5, latLong.length - 1)

                center = {
                  lat: parseInt(lat),
                  lng: parseInt(lng)
                }
              }
            }

            return (
              <div className="park-page">

                <li className="result-entry" >

                  <h1 className="result-name">{(this.state.data[this.state.viewIndex][1].fullName) ?
                    this.state.data[this.state.viewIndex][1].fullName
                    : this.state.data[this.state.viewIndex][1].name}</h1>

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

                  <div style={{ height: '70vh', width: '80%', marginLeft: "150px" }}>
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
                {/* Alerts ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >
                  <h2 className="result-subheader">{this.state.alert_total && this.state.alert_total > 0 ? "Alerts:" : null}</h2>

                  {this.state.alert_total ?
                    (Object.entries(this.state.alert_data)).map((current, index) => {
                      // console.log(current[1][1].title)
                      return (
                        <div>

                          <h2 className="result-header">{current[1][1].title}</h2>

                          <p className="result-description">{current[1][1].description}</p>

                        </div>
                      )
                    })
                    : null}
                </li>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* Events ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >
                  <h2 className="result-subheader">{this.state.event_total && this.state.event_total > 0 ? "Events:" : null}</h2>
                  {console.log(this.state.event_total)}
                  {this.state.event_total ?
                    (Object.entries(this.state.event_data)).map((current, index) => {

                      return (
                        <div>

                          <h2 className="result-header">{current[1][1].title}</h2>

                          {/* <p className="result-description">{current[1][1].description.substring(3, current[1][1].description.length - 4)}</p> */}
                          <p className="result-description">{current[1][1].description.replace(/<[^>]+>/g, '')}</p>

                          <p className="result-description-time-date">

                            <span className="result-description-time-date-bold">Location: </span>
                            {current[1][1].location ? current[1][1].location : "N/A"}
                            <br></br>

                            <span className="result-description-time-date-bold">Dates: </span>
                            {current[1][1].datestart ? current[1][1].datestart : "N/A"}
                            - {current[1][1].dateend ? current[1][1].dateend : "N/A"}

                            <br></br>
                            <span className="result-description-time-date-bold">Time: </span>
                            {current[1][1].times[0].timestart ? current[1][1].times[0].timestart : "N/A"}
                            - {current[1][1].times[0].timeend ? current[1][1].times[0].timeend : "N/A"}
                            

                          </p>


                        </div>
                      )
                    })
                    : null}
                </li>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >

                  <h2 className="result-subheader">{(this.state.data[this.state.viewIndex][1].regulationsoverview !== ""
                    && this.state.data[this.state.viewIndex][1].regulationsoverview) ?
                    "Regulations Overview:" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].regulationsoverview}</p>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">{(this.state.data[this.state.viewIndex][1].weatheroverview !== ""
                    && this.state.data[this.state.viewIndex][1].weatheroverview) ?
                    "Weather Overview:" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].weatheroverview}</p>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">{(this.state.data[this.state.viewIndex][1].weatherInfo !== ""
                    && this.state.data[this.state.viewIndex][1].weatherInfo) ?
                    "Weather Info:" : null}</h2>

                  <p className="result-description">{this.state.data[this.state.viewIndex][1].weatherInfo}</p>

                </li>

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.data[this.state.viewIndex][1].accessibility ? "Accessibility:" : null}</h2>

                  {(this.state.data[this.state.viewIndex][1].accessibility) ?
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
                    })
                    : null
                  }
                </li>

                {/* Articles ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.article_total && this.state.article_total > 0 ? "Articles:" : null}</h2>

                  {this.state.article_total ?
                    (Object.entries(this.state.article_data)).map((current, index) => {
                      // console.log(current[1][1].title)
                      return (
                        <div>
                          <a href={current[1][1].url}>
                            <p className="result-description">{current[1][1].title}</p>
                          </a>
                        </div>
                      )
                    })
                    : null}
                </li>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {/* News Releases ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.news_total && this.state.news_total > 0 ? "News Releases:" : null}</h2>

                  {this.state.news_total ?
                    (Object.entries(this.state.news_data)).map((current, index) => {
                      // console.log(current[1][1].title)
                      return (
                        <div>
                          <a href={current[1][1].url}>
                            <p className="result-description">{current[1][1].title}</p>
                          </a>
                        </div>
                      )
                    })
                    : null}
                </li>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* Lesson Plans ////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <li className="result-entry" >

                  <h2 className="result-subheader">{this.state.lessons_total && this.state.lessons_total > 0 ? "Lesson Plans:" : null}</h2>

                  {this.state.lessons_total ?
                    (Object.entries(this.state.lessons_data)).map((current, index) => {
                      // console.log(current[1][1].title)
                      return (
                        <div>
                          <a href={current[1][1].url}>
                            <h2 className="result-subheader">{current[1][1].title ? current[1][1].title : null}</h2>

                            <p className="result-description">{current[1][1].questionobjective ? current[1][1].questionobjective : null}</p>
                          </a>
                        </div>
                      )
                    })
                    : null}
                </li>

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              </div>
            );
          case "People":
          case "Places":
            return (
              <div className="park-page">

                <li className="result-entry" >

                  <a href={this.state.data[this.state.viewIndex][1].url} >
                    <h1 className="result-name-people">

                      {this.state.data[this.state.viewIndex][1].title ? this.state.data[this.state.viewIndex][1].title : null}

                    </h1>
                  </a>

                  <a href={this.state.data[this.state.viewIndex][1].url} >
                    <p className="result-description">{(this.state.data[this.state.viewIndex][1].listingdescription)}
                      <img src={this.state.data[this.state.viewIndex][1].listingimage.url} alt={this.state.data[this.state.viewIndex][1].listingimage.altText} />
                    </p>
                  </a>
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

              {/* {'LOOKUP LINK: ' + API + this.props.type + '?stateCode=' + this.props.state + '&limit=3&q=' + this.props.search + KEY}

              <h1>------------------------------------------------BELOW ME------------------------------------------------</h1> */}

              {temp.map((current, index) => {
                return (
                  <li className="result-entry" >

                    <button onClick={() => this.handleClick(index)}>

                      <h2 className="result-header">{this.state.data[index][1].fullName ?
                        this.state.data[index][1].fullName : (this.state.data[index][1].title ?
                          this.state.data[index][1].title : this.state.data[index][1].name)}</h2>

                      <p className="result-description">{this.state.data[index][1].description}</p>

                    </button>

                  </li>
                );
              })
              }
            </div>
          )
        }
      }
    }

  }
}

export default Results;