import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Businesslist from './components/BusinessList/BusinessList';
import Yelp from '../src/util/Yelp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Best restaurant around!</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <Businesslist businesses={this.state.businesses} />
      </div>
    );
  }
}



export default App;