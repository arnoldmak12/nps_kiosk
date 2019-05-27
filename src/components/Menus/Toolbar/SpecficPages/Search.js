import React from 'react';
import "./Search.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends React.Component{
    handleSignIn(e) {
    // e.preventDefault()
    // let username = this.refs.username.value
    // let password = this.refs.password.value
    // this.props.onSignIn(username, password)
  }
  render(){

    return (
        <div className="search-page">

            <form class="search-form" type="Login" onSubmit={this.handleSignIn.bind(this)}>

                <input className="search-input" type="text" ref="search" placeholder="Search"/>
                
                <button className="search-submit" type="submit">
                <FontAwesomeIcon size="5x" icon={faSearch} />
                </button>

            </form>

        </div>
    )
  }


}




export default Search;