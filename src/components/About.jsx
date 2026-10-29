import { Sprout, CodeXml, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import "./About.css";

const highlights = [
  {
    number: "01",
    title: "Aprendizado contínuo",
    text: "Busco entender o porquê de cada solução, sem pular etapas.",
    Icon: Sprout,
  },
  {
    number: "02",
    title: "Na prática",
    text: "Transformo o que estudo em projetos práticos.",
    Icon: CodeXml,
  },
  {
    number: "03",
    title: "Meu próximo passo",
    text: "Minha primeira oportunidade de estágio, de preferência remoto, para aprender em equipe e contribuir com dedicação.",
    Icon: Users,
  },
];

function About() {
  return (
    <section id="sobre" className="section">
      <SectionTitle>sobre</SectionTitle>

      <div className="about-layout">
        <div className="about-text">
          <h3 className="about-heading">
            Construindo meu caminho na{" "}
            <span className="about-highlight">tecnologia</span>.
          </h3>

          <p>
            Sou estudante de Engenharia de Software, com foco em
            desenvolvimento Front-End. Tenho base em estudos consistentes e
            projetos práticos utilizando <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong> e{" "}
            <strong>React</strong>.
          </p>

          <p>
            Gosto de me dedicar de verdade ao que faço. Valorizo
            responsabilidade, organização e comprometimento, principalmente nas
            atividades que assumo.
          </p>
        </div>

        <ul className="about-cards">
          {highlights.map(({ number, title, text, Icon }) => (
            <li key={number} className="about-card">
              <div className="about-card-icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <div>
                <span className="about-card-number">{number}</span>
                <h4 className="about-card-title">{title}</h4>
                <p className="about-card-text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;