import propTypes from 'prop-types';
import Message from './Notification.styled';

const Notification = ({ message }) => <Message>{message}</Message>;

export default Notification;

// Notification.propTypes = {
//   message: propTypes.string.isRequired,
// };
