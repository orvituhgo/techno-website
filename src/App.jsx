import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/index';
import Body from './components/Body/index';
import { GlobalStyles, Container } from './styles/GlobalStyles';
import usePersistedState from './utils/PersistedState';
import light from './configs/light';
import dark from './configs/dark';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  // faltando adequar nomes e titulos dos objetos das cores
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Body />
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  );
}
