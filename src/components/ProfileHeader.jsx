import avatar from "../assets/avatar.jpeg";
import "./ProfileHeader.css";
import projects from "../data/projects";

function ProfileHeader() {
    return (
        <section id="inicio" className="profile">
            <img 
            src={avatar} 
            alt="Foto de Ranyanna Ayala"
            className="profile-avatar" 
            />

            <div className="profile-info">
                <h1 className="profile-name">Ranyanna Ayala</h1>
                <p className="profile-handle">@ranyanna</p>
                <p className="profile-role">Dev em formação</p>

                <div className="profile-stats">
                    <span>
                        <strong>{projects.length}</strong> projetos
                    </span>
                    <span>
                        <strong>7</strong> techs
                    </span>
                    <span className="profile-status">
                        <span className="profile-status-dot" aria-hidden="true"></span>
                        buscando estágio
                    </span>
                </div>

                <div className="profile-actions">
                    <a href="#contato" className="btn btn-primary">
                        Entrar em contato
                    </a>
                    <a 
                    href="https://github.com/ranyanna"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    >
                    github ↗
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ProfileHeader;