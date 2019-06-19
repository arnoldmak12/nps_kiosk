import React from 'react';
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Results from './Results';
import Select from '../../../../components/Select';

class Search extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, search: '', state: '', type: '', refresh: false };
  }

  handleSearchChange = (event) => {
    const search = event.target.value
    this.setState({ search: search })
  }

  handleClick(evt) {
    evt.preventDefault();

    if (this.state.clicked) {
      this.setState({
        refresh: true,
      });
      console.log('click');
    }

    this.setState({
      clicked: true,
    });

  }

  render() {

    return (
      <div className="search-page">

        <div >
          <Select
            className="type-select"
            value={this.state.type}
            onChange={value => {
              if (value === 'Lesson Plans') {
                this.setState({ type: 'LessonPlans' });
              }
              else if (value === 'News Releases') {
                this.setState({ type: 'NewsReleases' });
              }
              else if (value === 'Visitor Centers') {
                this.setState({ type: 'VisitorCenters' });
              }
              else {
                this.setState({ type: value });
              }
              if (this.state.clicked) {
                this.setState({
                  refresh: true,
                })
              }
            }
            }
            options={[
              'Alerts',
              'Articles',
              'Campgrounds',
              'Events',
              'Lesson Plans',
              'News Releases',
              'Parks',
              'Persons',
              'Places',
              'Visitor Centers'
            ]}
          />
        </div>

        <div className="state-select">
          <Select
            value={this.state.state}
            onChange={value => {
              if (value === 'ALL') {
                this.setState({ state: '' });
              }
              else {
                this.setState({ state: value });
              }
              this.handleClick.bind(this)
            }}
            options={[
              'ALL', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IN', 'IA', 'KS', 'KY', 'LA', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
              'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
            ]}
          />
        </div>

        <form className="search-form">



          <input className="search-input" placeholder={"Search"} onChange={this.handleSearchChange} />


          <button className="search-submit" type="submit" onClick={this.handleClick.bind(this)}>
            <FontAwesomeIcon size="5x" icon={faSearch} />
          </button>

          {this.state.clicked && <Results search={this.state.search} type={this.state.type} state={this.state.state} refresh={this.state.refresh} />}

        </form>

      </div>
    )
  }
}

export default Search;