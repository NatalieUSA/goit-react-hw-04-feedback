import PropTypes from 'prop-types';
import Btn from './Button.styled';

const Button = ({ children, onClick, type, text }) => {
  // console.log(children);
  return (
    <Btn onClick={onClick} type={type} text={text}>
      {children}
    </Btn>
  );
};

export default Button;

// Button.protoTypes = {
//   onClick: PropTypes.func,
//   type: PropTypes.oneOf(['submit', 'button', 'reset']),
//   children: PropTypes.node.isRequired,
// };
