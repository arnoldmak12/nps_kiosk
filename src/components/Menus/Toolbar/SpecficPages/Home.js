import React from 'react';

const homeStyleHeader = {
    position: 'fixed',
    zIndex: '10',
    top: '20%',
    left: '30%',
    fontSize: '170px',
    color: 'white',
    fontFamily: '"Rockwell Extra Bold", "Rockwell Bold", monospace',
    fontStyle: 'italic',
    fontWeight: '70'
  }

  const homeStyleSubHeader = {
    position: 'fixed',
    zIndex: '10',
    top: '50%',
    left: '29%',
    fontSize: '60px',
    color: 'white',
    fontFamily: '"Rockwell Extra Bold", "Rockwell Bold", monospace',
    fontStyle: 'italic',
    fontWeight: '70'
  }

const SearchsSpecificToolbar = props => {
    return (
        <div className="home-page">

            <h1 style={homeStyleHeader}>Welcome!</h1>
            <h2 style={homeStyleSubHeader}>Made By: Arnold Makarov</h2>

        </div>
    )


}

export default SearchsSpecificToolbar;