import React, { useState } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

import Nav from './styled';

export default function NavBar() {
  const [navBar, setNavBar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
      setNavBar('$active');
    } else {
      setNavBar('');
    }
  };

  document.addEventListener('scroll', changeNavbar);

  return (
    <Nav $active={navBar}>
      <ul>
        <li>
          Home
        </li>
        <li>
          Galeria
        </li>
        <li>
          <FaWhatsapp size={30} />
        </li>
        <li>
          <FaTelegramPlane size={30} />
        </li>
        <li>
          <FaInstagram size={30} />
        </li>
      </ul>
    </Nav>
  );
}
