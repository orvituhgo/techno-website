import React from 'react';
import {
  FaPencilAlt, FaCube, FaWrench,
} from 'react-icons/fa';

import {
  Card, Description, Title, Container, HorizontalCard,
} from './styled';
import Media from '../atoms/media';

export default function Cards() {
  return (
    <Container className="init-hidden">
      <Title>
        <h1>SOLUCOES</h1>
      </Title>
      <Card className="solucoes">
        <div>
          <div className="icon">
            <FaCube size={40} />
          </div>
          <Description>
            <h2>SOFTWARE DEVELOPMENT</h2>
            <p>On any platform: mobile, web and database structure.</p>
            <Media type="small" />
          </Description>
        </div>
        <div>
          <div className="icon">
            <FaPencilAlt size={40} />
          </div>
          <Description>
            <h2>SOFTWARE UPDATE</h2>
            <p>Retrofit or implement features in a existing software.</p>
            <Media type="small" />
          </Description>
        </div>
        <div>
          <div className="icon">
            <FaWrench size={40} />
          </div>
          <Description>
            <h2>MAINTENANCE</h2>
            <p>Fix issues in the application.</p>
            <Media type="small" />
          </Description>
        </div>
      </Card>
      <HorizontalCard>
        <div className="icon">
          <FaWrench size={40} />
        </div>
        <div>
          <h2>CUSTOM</h2>
          <p>We&apos;ll customize our services to attend your necessities.</p>
          <Media type="small" />
        </div>
      </HorizontalCard>
    </Container>
  );
}
