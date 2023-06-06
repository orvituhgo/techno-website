import React from 'react';

import Header from './components/Header/index';
import Body from './components/Body/index';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <GlobalStyles />
    </>
  );
}
