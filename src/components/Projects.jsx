import projects from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="porjetos" className="section">
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