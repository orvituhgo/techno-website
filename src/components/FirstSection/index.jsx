import Banner from './styled';
import amico from '../../assets/amico-top.svg';

export default function FirstSection() {
  return (
    <Banner>
      <div className="home">
        <h1>Testando AMICO.</h1>
        <p>
          um dolor sit amet consectetur, adipisicing elit. Molestiae, repellat
          aut aliquam non nam veritatis impedit consectetur! Odit illum qavés
          de uma consultoria de software que supere suas expectativas.
        </p>
      </div>
      <div>
        <img src={amico} alt="Person coding" />
      </div>
    </Banner>
  );
}
