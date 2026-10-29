import skills from "../data/skills";
import SectionTitle from "./SectionTitle";
import "./Skills.css";

function Skills() {
  return (
    <section id="habilidades" className="section">
      <SectionTitle>habilidades</SectionTitle>

      <ul className="skills-grid">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-card">
            <i className={`${skill.icon} skill-icon`} aria-hidden="true"></i>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;