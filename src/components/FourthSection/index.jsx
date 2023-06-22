/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';
import {
  Container, Title, Form, Input,
} from './styled';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [assunto, setAssunto] = useState('');

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !celular || !assunto) {
      toast('Preencha os campos faltos');
      console.log('preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      email,
      celular,
      assunto,
    };

    emailjs.send('service_tbyur3v', 'template_gh7u65u', templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log(`STATUS: ${response.status} - ${response.text}`);
        setName('');
        setEmail('');
        setCelular('');
        setAssunto('');
      }, (error) => {
        console.log(`ERROR: ${error}`);
      });
  };

  return (
    <Container className="contato">
      <div className="content">
        <figure>
          <img src="src/assets/Email campaign-bro.svg" alt="" />
        </figure>
        <Form onSubmit={sendEmail}>
          <Title>
            <h1>CONTATO</h1>
          </Title>
          <label htmlFor="name">name*</label>
          <Input
            type="text"
            className="input"
            placeholder="Fulano de Tal"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">e-mail*</label>
          <Input
            type="text"
            className="input"
            placeholder="contato@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="celular">celular*</label>
          <Input
            type="text"
            className="input"
            placeholder="+55 (99) 9 9999-9999 "
            onChange={(e) => setCelular(e.target.value)}
            value={celular}
          />
          <label htmlFor="assunto">assunto*</label>
          <Input
            type="text"
            className="input"
            placeholder="Preciso mostrar minha empresa pro mundo"
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
          />
          <div>
            <button
              type="submit"
            >
              ENVIAR
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
