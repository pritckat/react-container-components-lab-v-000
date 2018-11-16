import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []

    handleSearchChange = e => this.setState({ term: e.target.value });

    handleSubmit = e => {
      e.preventDefault();

      fetch(URL.concat(this.state.term))
      .then(res => res.json())
      .then(res => this.setState({reviews: res.results}))
    }

    render() {
      return(
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleSearchChange} />
          <button type="submit">Submit</button>
          </form>
      )
    }
  }
}

export default SearchableMovieReviewsContainer
