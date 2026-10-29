import SectionTitle from "./SectionTitle";
import TerminalWindow from "./TerminalWindow";

function About() {
  return (
    <section id="sobre" className="section">
      <SectionTitle>sobre</SectionTitle>
      <div className="about-layout">
        <div className="about-text">
          <p>
            Sou estudante de Engenharia de Software, com foco em desenvolvimento
            Front-End. Tenho construído minha base com estudos consistentes e
            projetos práticos utilizando HTML, CSS, JavaScript e React.
          </p>
          <p>
            Gosto de me dedicar de verdade ao que faço, buscando entender bem
            cada etapa e evoluir com qualidade, sem pular processos.
            Valorizoresponsabilidade, organização e comprometimento,
            principalmente nas atividades que assumo
          </p>
          <p>
            Estou em busca da minha primeira oportunidade de estágio, onde eu
            possa continuar aprendendo, ganhar experiência e contribuir com a
            equipe de forma dedicada.
          </p>
        </div>
        <TerminalWindow />
      </div>
    </section>
  );
}

export default About;
