import Section from 'components/Section';
import React, { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOption from 'components/FeedbackOptions';
import PropTypes from 'prop-types';

class CounterFeedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,
  };

  houndleCount = optionState => {
    console.log(optionState);
    this.setState(praveState => {
      return { [optionState]: praveState[optionState] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ total, good, neutral, bad }) => {
      return {
        total: (total = good + neutral + bad),
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(({ positivePercentage, good, neutral, bad }) => {
      return {
        positivePercentage: Number(
          (positivePercentage = ((100 / (good + neutral + bad)) * good).toFixed(
            2
          ))
        ),
      };
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>
        <Section tittle="Please leave feedback">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
        <Section tittle="Statistics">
          <FeedbackOption
            onLeaveFeedback={this.houndleCount}
            options={['good', 'neutral', 'bad']}
          ></FeedbackOption>
        </Section>
      </>
    );
  }
}
export default CounterFeedback;

CounterFeedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
