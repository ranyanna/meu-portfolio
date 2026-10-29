import skills from "../data/skills";
import SectionTitle from "./SectionTitle";

function Skills() {
    return (
        <section id="habilidades" className="section">
            <SectionTitle>habilidades</SectionTitle>

            <ul className="skills-gris">
                {skills.map((skill) => (
                    <li key={skill.name} className="skill-card">
                        <span className="skill-badge" aria-hidden="true">
                            {skill.badge}
                        </span>
                        <div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;