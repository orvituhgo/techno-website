import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  div {
    height: 400px;
    width: 300px;
    background-color: ${(props) => props.theme.colors.secondary};
    /* background-color: tomato; */
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };
  .icon {
    height: fit-content;
    width: fit-content;
    margin-top: 50px;
    padding: 15px;
    border: medium solid ${(props) => props.theme.colors.text};
  }
`;

const Description = styled.div`
    gap: 10px;
    justify-self: flex-end;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin-top: 20px;
  h2, p {
    text-align: center;
    margin-bottom: 10px;
  }
  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 7px;
  }
`;

export { Card, Description };
