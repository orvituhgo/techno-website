import styled from 'styled-components';

const Container = styled.footer`
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  color: #ccc;
  background-color: #130F5B;
  height: 100%;

  div{
    flex: 1 0 220px;
    padding: 20px;
  }
  .AboutUs{
    flex: 2 0 330px;
  }
  h3{
    margin-bottom: 20px;
  }
  h4 {
    text-align: right;
    font-size: 14px;
    letter-spacing: 3px;
    margin-top: 50px;
  }
`;

export { Container };
