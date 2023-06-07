import styled, { css } from 'styled-components';

const nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  ${(props) => !props.$active && css`
    padding-top: 0px;
  `}

  ul {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;
  };

  a, li {
    color: ${(props) => props.theme.colors.secondary};
    background-color: transparent
  }



 ${(props) => props.$active && css`
  ul {
    color: ${props.theme.colors.primary};
    background-color: ${props.theme.colors.secondary};
  }
  a, li {
    color: ${props.theme.colors.primary};
    background-color: transparent
  }
 `}

  `;

export default nav;
