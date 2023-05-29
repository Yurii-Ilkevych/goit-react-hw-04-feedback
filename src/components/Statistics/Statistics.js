import {
  WrapperStatistics,
  GoodStat,
  NeutralStat,
  BadStat,
  TotalStat,
  PositivePercentage,
} from './Statistics.styled';
import Notifications from 'components/Notification';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <WrapperStatistics>
          <GoodStat>Good: {good}</GoodStat>
          <NeutralStat>Neutral: {neutral}</NeutralStat>
          <BadStat>Bad: {bad}</BadStat>
          <TotalStat>Total: {total}</TotalStat>
          <PositivePercentage>
            Positive feedback: {positivePercentage}%
          </PositivePercentage>
        </WrapperStatistics>
      ) : (
        <Notifications message="There is no feedback" />
      )}
    </>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
