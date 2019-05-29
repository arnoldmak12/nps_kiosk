import React from 'react';
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Park from './Park';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {

    let component = <Park />

    return (
      <div className="search-page">

        <form class="search-form">

          <input className="search-input" type="text" ref="search" placeholder="Search" />

          <button className="search-submit" type="submit" onClick={this.handleClick.bind(this)}>
            <FontAwesomeIcon size="5x" icon={faSearch} />
          </button>
          {this.state.clicked && component}
        </form>



      </div>
    )
  }
}

export default Search;