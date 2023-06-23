import styled from 'styled-components';
import banner from '../../assets/banner-bg.svg';

const Trapezio = styled.div`
  background-image: url(${banner});
  background-repeat: repeat-x;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  gap: 200px;
  z-index: 999;

  div > p {
    margin-top: 20px;
  }

  div {
    padding-top: 230px;
    height: 400px;
    width: 400px;
  }
`;

export default Trapezio;
