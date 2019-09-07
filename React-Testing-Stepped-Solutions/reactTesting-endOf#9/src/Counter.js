import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div className="hello">
        <button data-testid="counter-button">
          {count}
        </button>
      </div>
    );
  }
}
