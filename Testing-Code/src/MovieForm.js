import React, { Component } from 'react'

class MovieForm extends Component {
  render() {
    return (
      <form data-testid="movie-form">
        <input type="text" />
        <button>Submit</button>
      </form>
    )
  }
}

export default MovieForm
