import { useContext } from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import Container from './styled';

function Media({ type }) {
  const { colors } = useContext(ThemeContext);
  if (type === 'small') {
    return (
      <Container>
        <li>
          <a href=""><FaWhatsapp size={20} color={colors.text} /></a>
        </li>
        <li>
          <a href=""><FaTelegramPlane size={20} color={colors.text} /></a>
        </li>
      </Container>
    );
  }
}

Media.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Media;
