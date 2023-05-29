import { useEffect, useState } from "react";
import Section from 'components/Section'; 
import Statistics from 'components/Statistics';
import FeedbackOption from 'components/FeedbackOptions';
import PropTypes from 'prop-types';


const CounterFeedback = ({goodProp, neutralProp, badProp, totalProp, positivePercentageProp}) => {
const [good, setGood] = useState(goodProp);
const [neutral, setNeutral] = useState(neutralProp);
const [bad, setBad] = useState(badProp);
const [total, SetTotal] = useState(totalProp);
const [positivePercentage, setPositivePercentage] = useState(positivePercentageProp);

useEffect(() => {
  //  countTotalFeedback()
  //  countPositiveFeedbackPercentage()
    SetTotal( good + neutral + bad)
    setPositivePercentage(Number(((100 / (good + neutral + bad)) * good).toFixed(2)))

}, [good, neutral, bad])

const houndleCount = (optionState) => {
switch (optionState) {
  case "good":
    setGood(good + 1)
    break;
    case "neutral":
      setNeutral(neutral + 1)
    break;
    case "bad":
      setBad(bad + 1)
    break;
  default:
    break;
}}

// const countTotalFeedback = () => {
//   SetTotal( good + neutral + bad)
// }
// const countPositiveFeedbackPercentage = () => {
//   setPositivePercentage(Number(((100 / (good + neutral + bad)) * good).toFixed(2)))
// }

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
            onLeaveFeedback={houndleCount}
            options={['good', 'neutral', 'bad']}
          ></FeedbackOption>
        </Section>
      </>
    );

}

 export default CounterFeedback;

CounterFeedback.propTypes = {
  goodProp: PropTypes.number.isRequired,
  neutralProp: PropTypes.number.isRequired,
  badProp: PropTypes.number.isRequired,
  totalProp: PropTypes.number.isRequired,
  positivePercentageProp: PropTypes.number.isRequired,
};
