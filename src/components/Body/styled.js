import styled from 'styled-components';
import { bgColor } from '../../configs/colors';

const Div = styled.div`
  div {
  height: 800px;
  background-color: ${bgColor};
  };
`;

const Trapezio = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    border-top: 700px solid transparent;
    border-left: 70px solid ${bgColor};
    border-right: 70px solid ${bgColor};
  }
`;

export { Div, Trapezio };
