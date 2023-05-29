import { Wrapper, Tittle } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ tittle, children }) => {
  return (
    <Wrapper>
      <Tittle>{tittle}</Tittle>
      {children}
    </Wrapper>
  );
};
export default Section;

Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
