import propTypes from 'prop-types';

import Wrap from './Container.styled';

const Container = ({ children }) => <Wrap>{children}</Wrap>;

export default Container;

Container.propTypes = {
  children: propTypes.node.isRequired,
};
