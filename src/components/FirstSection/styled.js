import styled from 'styled-components';

const Trapezio = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    border-top: 700px solid ${(props) => props.theme.colors.primary};
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
  }
`;

export { Trapezio };
