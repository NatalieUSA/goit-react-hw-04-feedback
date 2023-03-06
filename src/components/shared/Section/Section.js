import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};
