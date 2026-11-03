import projects from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import "./Projects.css"

function Projects() {
    return (
        <section id="projetos" className="section">
            <SectionTitle>projetos</SectionTitle>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;