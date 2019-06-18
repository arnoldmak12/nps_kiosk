import React from 'react';
import "./Results.css"
import ReactLoading from 'react-loading';

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
    if(props.refresh){
      console.log('refresh')
      this.setState({
        total: null,
      })
      this.render();
      this.componentDidMount();
    }
  }

  render() {
    let temp =[];
    for(var i = 0; i < 3; i++){
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
         
          {temp.map((current,index) => {
              return(
              <li>

              <h2 className="result-header">{this.state.data[index][1].name} Park Code: {this.state.data[index][1].parkCode}</h2>
            
              <p>{this.state.data[index][1].description}</p>

              </li>
              );
            }
          )}

          
            
          

        </div>
      )
    }



  }
}

export default Results;