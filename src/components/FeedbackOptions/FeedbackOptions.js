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

          // <Button
          //   name={option}
          //   type="button"
          //   key={option}
          //   onClick={() => onClick(option)}
          // >
          //   {option}
          // </Button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
