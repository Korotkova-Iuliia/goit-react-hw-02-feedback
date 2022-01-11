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
  };

  clickOnGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  clickOnNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  clickOnBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const { initialTotal } = this.props;
    const total = initialTotal + good + neutral + bad;
    return total;
  };
  // countPositiveFeedbackPercentage()
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

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
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
        </ul>
      </div>
    );
  }
}

export default App;
// TitleFeedback;
// titleStatistics;
// className = 'App';
