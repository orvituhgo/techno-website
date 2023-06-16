import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Now Bold';
  h1 {
    height: fit-content;
    width: fit-content;
    padding: 20px;
    border-radius: 0 30px 0 30px;
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
  }
  button {
    background-color: transparent;
  }

`;

const Container = styled.section`
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 40px;
  padding-bottom: 50px;
  .content {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }
  figure{
    width: 60%;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 50%;
  padding: 40px 20px 40px 20px;
  border: 2px dashed ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  label {
    color: ${(props) => props.theme.colors.secondary};
    margin: 20px 0px 0px 4px;
    letter-spacing: 5px;
  }
  div {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 15px;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export {
  Title, Container, Form, Input,
};
