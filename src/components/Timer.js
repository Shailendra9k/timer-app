import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.ticker, 1000);
  }
  ticker() {
    this.setState({ clock: new Date() - this.props.start });
  }

  render() {
    let clock = Math.round(this.state.clock / 1000);
    return (
      <div>
        <h2>You have been on this site since: </h2> <br />
        <span>{clock}</span>
        <h2>Seconds.</h2>
      </div>
    );
  }
}

export default Timer;
