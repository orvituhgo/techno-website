import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 30px;
  h1 {
    height: fit-content;
    width: fit-content;
    padding: 20px;
    border-radius: 0 30px 0 30px;
    color: ${(props) => props.theme.colors.secondary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

const Container = styled.section`
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 50px;

  div::-webkit-scrollbar{

  }
`;

const Display = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  height: 80%;
  width: 70%;
  overflow-y: auto;
`;

const Item = styled.div`
  margin: 10px;
  background-image: url('/src/images/placeholder.svg');
  height: 200px;
  width: 400px;
`;

export {
  Title, Container, Display, Item,
};
