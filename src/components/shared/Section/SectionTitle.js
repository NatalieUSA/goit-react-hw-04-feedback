import propTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: propTypes.string.isRequired,
};
