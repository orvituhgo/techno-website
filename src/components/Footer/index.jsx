/* eslint-disable max-len */
import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

import { Container } from './styled';

export default function Footer() {
  return (
    <Container>
      <div className="AboutUs">
        <h3>Mais sobre a Techno</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellat aut aliquam non nam veritatis impedit consectetur! Odit illum quasi consequuntur asperiores architecto est, neque quaerat accusantium ut magni totam.</p>
      </div>
      <div>
        <h3>Contatos</h3>
        <ul><li><FaWhatsapp size={24} /></li></ul>
        <ul><li><FaTelegramPlane size={24} /></li></ul>
        <ul><li><FaInstagram size={24} /></li></ul>
      </div>
      <div>
        <h3>Localizacao</h3>
        <p>Sao Paulo, SP/ Brasilia, DF</p>
        <h4>Powered by Techno</h4>
      </div>
    </Container>

  );
}
