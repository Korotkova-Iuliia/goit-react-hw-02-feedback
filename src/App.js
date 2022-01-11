import React, { Component } from "react";
import "./App.css";

import CounterFeedback from "./components/CounterFeedback";
// import StatisticsFeedback from './components/StatisticsFeedback';

class App extends Component {
  static defaultProps = { initialTotal: 0 };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: this.props.initialTotal,
  };

  clickOnGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
      };
    });
  };
  clickOnNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
      };
    });
  };
  clickOnBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const total = this.initialTotal;
    console.log(total);
    console.log(this.state.good);
    const totalGood = this.state.good;
    console.log(totalGood);

    this.setState((prevState) => {
      return {
        total: prevState.bad,
      };
    });
  };

  // countPositiveFeedbackPercentage()
  render() {
    return (
      <div>
        <h1>Feedback</h1>
        <h2>Please leave feedback</h2>
        <CounterFeedback
          onGood={this.clickOnGood}
          onNeutral={this.clickOnNeutral}
          onBad={this.clickOnBad}
        />
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
        </ul>
      </div>
    );
  }
}

export default App;
// TitleFeedback;
// titleStatistics;
// className = 'App';
