import PropTypes from 'prop-types';
import { GoodButton, NeutralButton, BadButton } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <GoodButton type="button" onClick={onGood}>
        Good
      </GoodButton>
      <NeutralButton type="button" onClick={onNeutral}>
        Neutral
      </NeutralButton>
      <BadButton type="button" onClick={onBad}>
        Bad
      </BadButton>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
