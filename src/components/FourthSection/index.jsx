/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import {
  Container, Title, Form, Input,
} from './styled';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [assunto, setAssunto] = useState('');

  return (
    <Container className="contato">
      <div className="content">
        <figure>
          <img src="src/images/Email campaign-bro.svg" alt="" />
        </figure>
        <Form>
          <Title>
            <h1>CONTATO</h1>
          </Title>
          <label htmlFor="name">name</label>
          <Input
            type="text"
            className="input"
            placeholder="Fulano de Tal"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">e-mail</label>
          <Input
            type="text"
            className="input"
            placeholder="contato@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="celular">celular</label>
          <Input
            type="text"
            className="input"
            placeholder="+55 (99) 9 9999-9999 "
            onChange={(e) => setCelular(e.target.value)}
            value={celular}
          />
          <label htmlFor="assunto">assunto</label>
          <Input
            type="text"
            className="input"
            placeholder="Preciso mostrar minha empresa pro mundo"
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
          />
          <div>
            <button type="button">ENVIAR</button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
