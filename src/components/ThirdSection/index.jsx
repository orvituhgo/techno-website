import React from 'react';

import {
  Container, Title, Display, Item,
} from './styled';

export default function Portfolio() {
  return (
    <Container className="init-hidden">
      <Title><h1>PORTFOLIO</h1></Title>
      <Display>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Display>
    </Container>
  );
}
