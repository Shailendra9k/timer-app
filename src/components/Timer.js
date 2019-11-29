import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
  }

  render() {
    return (
      <div>
        <p>You have been on this site since: </p> <br />
        <span>{this.state.clock}</span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
