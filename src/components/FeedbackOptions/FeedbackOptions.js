import propTypes from 'prop-types';
import Button from 'components/shared/Button/Button';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            name={option}
            type="button"
            key={option}
            onClick={() => onClick(option)}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: propTypes.array.isRequired,
//   onClick: propTypes.func.isRequired,
// };
