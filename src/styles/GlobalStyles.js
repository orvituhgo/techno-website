import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { warnColor, errorColor, successColor } from '../configs/colors';
// import NowBold from '../fonts/Now-Bold/Now Bold.woff';
// import NowBold2 from '../fonts/Now-Bold/Now Bold.woff2';
// import NowBoldTTF from '../fonts/Now-Bold/Now Bold.ttf';
import NowRegular from '../fonts/Now-Regular/Now-Regular.woff';
import NowRegular2 from '../fonts/Now-Regular/Now-Regular.woff2';
import NowRegularTTF from '../fonts/Now-Regular/Now-Regular.ttf';

export const GlobalStyles = createGlobalStyle`

    @font-face {
      font-family: 'Now';
      src: url(${NowRegular2}) format('woff2'),
          url(${NowRegular}) format('woff'),
          url(${NowRegularTTF}) format('truetype');

    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        font-family: 'Now';
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }

    html, body, #root {
        height: 100%;
    }

    button {
      cursor: pointer;
      height: fit-content;
      width: fit-content;
      padding: 20px;
      font-weight: bold;
      border-radius: 30px;
      color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.secondary};
      font-family: 'Now';
      font-size: 1rem;
      transition: background-color color 200ms linear;
    }

    button:hover{
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.background};
      box-shadow: inset 0px 0px 8px rgba(0,0,0,0.1);
    }

    input {
      color: ${(props) => props.theme.colors.secondary}
    }

    input::placeholder {
      font-family: 'Now';
      letter-spacing: 1px;
      color: ${(props) => props.theme.colors.secondary};
    }

    a {
        text-decoration: none;;
    }

    ul {
        list-style: none;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background-color: ${successColor};
        color: #fff;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background-color: ${errorColor};
        color: #fff;
    }
    body .Toastify .Toastify__toast-container .Toastify__toast--warn {
        background-color: ${warnColor};
        color: #fff;
    }

    .init-hidden {
      opacity: 0;
    }

    .init-hidden-off {
      transition: all 1s linear;
      opacity: 1;
    }
`;

export const Container = styled.section`
`;
