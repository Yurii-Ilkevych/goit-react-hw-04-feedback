import { WrapperButton, Btn } from './FeedbackOptions.styled.js';
import PropTypes from 'prop-types';

const FeedbackOption = ({ onLeaveFeedback, options }) => {
  return (
    <WrapperButton>
      {options.map(elBtn => {
        return (
          <Btn
            evtType={elBtn}
            key={elBtn}
            onClick={() => {
              onLeaveFeedback(elBtn);
            }}
            type="button"
          >
            {elBtn}
          </Btn>
        );
      })}
    </WrapperButton>
  );
};
export default FeedbackOption;

FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  Btn: PropTypes.arrayOf(PropTypes.string.isRequired),
};
