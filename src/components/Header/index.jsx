import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link as ScrollLink } from 'react-scroll';

import Nav from './styled';

export default function NavBar({ toggleTheme }) {
  const [navBar, setNavBar] = useState(false);
  const { title } = useContext(ThemeContext);

  const changeNavbar = () => {
    if (window.scrollY > 10) {
      setNavBar('$active');
    } else {
      setNavBar('');
    }
  };

  // {
  //   behavior: 'smooth',
  //   block: 'nearest',
  //   inline: 'center'
  // }
  document.addEventListener('scroll', changeNavbar);

  return (
    <Nav $active={navBar}>
      <ul>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={50}
          handleDiameter={20}
          offColor={shade(0.15, '#C3073F')}
          onColor={title === 'dark' ? '#38383f' : '#850028'}
        />
        <li>
          <ScrollLink
            spy
            smooth
            hashSpy
            offset={-74}
            duration={500}
            to="home"
          >
            Home

          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            spy
            smooth
            hashSpy
            offset={-74}
            duration={500}
            to="galeria"
          >
            Galeria

          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            spy
            smooth
            hashSpy
            offset={-74}
            duration={500}
            to="contato"
          >
            Contato

          </ScrollLink>
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

NavBar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
