import React from 'react';
import "./Results.css"
import ReactLoading from 'react-loading';
import { Link, withRouter} from 'react-router-dom';

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
    };
  }

  async componentDidMount() {
    const response = await fetch(API + this.props.type + '?stateCode=' + this.props.state + '&limit=3&q=' + this.props.search + KEY);
    const json = await response.json();
    this.setState({
      total: json.total, data: Object.entries(json.data)
    });
  }

  componentWillReceiveProps(props) {
    if (props.refresh) {
      this.componentDidMount();
      this.setState(this.state);
    }
  }

  render() {
    let temp = [];
    for (var i = 0; i < 3; i++) {
      temp[i] = i;
    }

    if (!this.state.total) {
      return <div className="park-page-loading">{LOADING}</div>
    }
    else {
      return (
        <div className="park-page">

          {'LOOKUP LINK: ' + API + this.props.type + '?stateCode=' + this.props.state + '&limit=3&q=' + this.props.search + KEY}


          {/* {console.log(this.state.data[0][1].addresses)} */}

          <h1>------------------------------------------------BELOW ME------------------------------------------------</h1>

          {(this.props.type === 'Parks' || this.props.type === 'Campgrounds' || this.props.type === 'VisitorCenters') ?
            temp.map((current, index) => {
              return (
                <li className="result-entry">

                  <Link
                    to={{
                      pathname: "/" + this.props.type + "/" + this.state.data[index][1].name,
                      state: { data: this.state.data[index][1].name }
                    }}>

                    <h2 className="result-header">{this.state.data[index][1].name}</h2>

                    <p className="result-description">{this.state.data[index][1].description}</p>
                  </Link>

                </li>
              );
            }
            )
            :
            temp.map((current, index) => {
              return (
                <li className="result-entry">

                  <h2 className="result-header">{this.state.data[index][1].title}</h2>

                  <p className="result-description">{this.state.data[index][1].description}</p>

                </li>
              );
            }
            )
          }

        </div>
      )
    }
  }
}

export default withRouter(Results);