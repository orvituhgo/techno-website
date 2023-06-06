import styled, { css } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../configs/colors';

const nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  ul {
    color: #fff;
    background-color: transparent;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
  };

 ${(props) => props.$active && css`
  ul {
    color: ${primaryDarkColor};
    background-color: ${primaryColor};
  }
 `}

  a, p {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }
  `;

export default nav;
