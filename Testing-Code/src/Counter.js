import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button data-testid="counter-button">{count}</button>
      </div>
    )
  }
}

export default Counter
