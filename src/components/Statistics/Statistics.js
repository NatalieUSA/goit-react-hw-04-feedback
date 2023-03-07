import PropTypes from 'prop-types';
import Wrap from './Statistics.styled';
const Statistics = ({ good, neutral, bad, positivePersent }) => {
  return (
    <Wrap>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Positive feedback: {positivePersent}%</p>
    </Wrap>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePersent: PropTypes.string.isRequired,
};
