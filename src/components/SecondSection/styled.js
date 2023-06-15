import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  height: 100%;
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-family: 'Now Bold';
  h1 {
    height: fit-content;
    width: fit-content;
    padding: 20px;
    border-radius: 0 30px 0 30px;
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

const HorizontalCard = styled.div`
  height: 150px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;

  h2, p {
    text-align: center;
  }

  div {
    gap: 20px;
    height: 150px;
    width: 400px;
    border-radius: 30px;
    /* background-color: tomato; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {

    height: fit-content;
    width: fit-content;
    padding: 15px;
    border: medium solid ${(props) => props.theme.colors.text};
  }
  .social {
    gap: 10px;
    display: flex;
    flex-direction: row;
  }
`;

const Container = styled.section`
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 50px;
`;

export {
  Card, Description, Title, Container, HorizontalCard,
};
