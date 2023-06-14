import styled, { css } from 'styled-components';

const nav = styled.nav`
  transition: all 200ms linear 200ms;
  margin-bottom: -117px;
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => !props.$active && css`
    padding-top: 0px;
  `}
  ul {
    border-radius: 0 0 16px 16px;
    padding: 10px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: fit-content
  };
  .logo {
    height: 70px;
    width: 77px;
    margin-right: 300px;
  }
  img, li {
    height: 100%
  }

 ${(props) => props.$active && css`
  ul {
    background-color: ${props.theme.colors.primary};
  }
  .logo {
    height: 50px;
    margin-right: 80px;
    padding-left: 15px;
  }
 `}
  `;

export default nav;
