import React, { Component } from 'react'

class MovieForm extends Component {
  state = {
    text: '',
  }

  render() {
    const { submitForm } = this.props
    const { text } = this.state

    return (
      <form data-testid="movie-form" onSubmit={() => submitForm({ text })}>
        <input type="text" />
        <button>Submit</button>
      </form>
    )
  }
}

export default MovieForm
