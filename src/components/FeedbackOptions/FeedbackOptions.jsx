import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((key) => (
        <Button
          key={key}
          className="{key}"
          type="button"
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </Button>
      ))}
    </>
  );
};

// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
//   return (
//     <div>
//       <GoodButton type="button" onClick={onGood}>
//         Good
//       </GoodButton>
//       <NeutralButton type="button" onClick={onNeutral}>
//         Neutral
//       </NeutralButton>
//       <BadButton type="button" onClick={onBad}>
//         Bad
//       </BadButton>
//     </div>
//   );
// };
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
