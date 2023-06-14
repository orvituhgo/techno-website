import Banner from './styled';

export default function FirstSection() {
  return (
    <Banner>
      <div className="home">
        <h1>Tenha um software eficiente e escalável.</h1>
        <p>
          Sem blah blah blah técnico! Nós queremos te entregar resultados consistentes aumentando a produtividade do seu negócio através de uma consultoria de software que supere suas expectativas.
        </p>
      </div>
      <div>
        <img src="src/images/amico-top.svg" alt="" />
      </div>
    </Banner>
  );
}
