import React, { Component } from "react";
import "./App.css";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/StatisticsFeedback";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnGood = () => {
    this.setState(({ good }) => {
      return {
        good: good + 1,
      };
    });
  };
  clickOnNeutral = () => {
    this.setState(({ neutral }) => {
      return {
        neutral: neutral + 1,
      };
    });
  };
  clickOnBad = () => {
    this.setState(({ bad }) => {
      return {
        bad: bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
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
      <>
        <h1>Feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.clickOnGood}
            onNeutral={this.clickOnNeutral}
            onBad={this.clickOnBad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
