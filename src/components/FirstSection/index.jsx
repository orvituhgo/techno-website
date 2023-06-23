import Banner from './styled';
import amico from '../../assets/amico-top.svg';

export default function FirstSection() {
  return (
    <Banner>
      <div className="home">
        <h1>Testando AMICO.</h1>
        <p>
          Sdsadsadsdasdasico! Nós queremos te entregar resultados consistentes
          aumentando a produtividade do seu negócio através de uma consultoria
          de software que supere suas expectativas.
        </p>
      </div>
      <div>
        <img src={amico} alt="Person coding" />
      </div>
    </Banner>
  );
}
