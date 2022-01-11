import React, { Component } from "react";
import "./App.css";

import CounterFeedback from "./components/CounterFeedback";
import Statistics from "./components/StatisticsFeedback";

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
    return initialTotal + good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) + "%" : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
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
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </div>
    );
  }
}

export default App;
// TitleFeedback;
// titleStatistics;
// className = 'App';
