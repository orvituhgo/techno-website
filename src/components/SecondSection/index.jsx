import React, { useContext } from 'react';
import {
  FaPencilAlt, FaWhatsapp, FaTelegramPlane, FaCube, FaWrench,
} from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Card, Description } from './styled';

export default function Cards() {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Card className="solucoes">
      <div>
        <div className="icon">
          <FaCube size={40} />
        </div>
        <Description>
          <h2>SOFTWARE DEVELOPMENT</h2>
          <p>On any platform: mobile, web and database structure</p>
          <ul>
            <li>
              <a href=""><FaWhatsapp size={20} color={colors.text} /></a>
            </li>
            <li>
              <a href=""><FaTelegramPlane size={20} color={colors.text} /></a>
            </li>
          </ul>
        </Description>
      </div>
      <div>
        <div className="icon">
          <FaPencilAlt size={40} />
        </div>
        <Description>
          <h2>SOFTWARE UPDATE</h2>
          <p>Retrofit or implement features in a existing software</p>
          <ul>
            <li>
              <a href=""><FaWhatsapp size={20} color={colors.text} /></a>
            </li>
            <li>
              <a href=""><FaTelegramPlane size={20} color={colors.text} /></a>
            </li>
          </ul>
        </Description>
      </div>
      <div>
        <div className="icon">
          <FaWrench size={40} />
        </div>
        <Description>
          <h2>MAINTENANCE</h2>
          <p>Fix issues in the application</p>
          <ul>
            <li>
              <a href=""><FaWhatsapp size={20} color={colors.text} /></a>
            </li>
            <li>
              <a href=""><FaTelegramPlane size={20} color={colors.text} /></a>
            </li>
          </ul>
        </Description>
      </div>
    </Card>
  );
}
