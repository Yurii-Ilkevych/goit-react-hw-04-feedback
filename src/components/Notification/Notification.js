import { Message } from './Notification.styled.js';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <Message>{message}</Message>;
};
export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
