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
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        color: ${(props) => props.theme.colors.text};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
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

`;

export const Container = styled.section`
`;
