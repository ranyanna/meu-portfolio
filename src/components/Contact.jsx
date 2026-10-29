import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import "./Contact.css"

const contacts = [
    {
        name: "Whatsapp",
        detail: "Mensagem direta",
        href: "https://wa.me/5567998255884",
        icon: <MessageCircle size={22} aria-hidden="true" />,
    },
    {
        name: "Email",
        detail: "ranyannayala@gmail.com",
        href: "mailto:ranyannayala@gmail.com",
        icon: <Mail size={22} aria-hidden="true" />,
    },
    {
        name: "LinkedIn",
        detail: "Vamos nos conectar",
        href: "https://www.linkedin.com/in/ranyanna-ayala-34a609437",
        icon: <i className="devicon-linkedin-plain"></i>
    },
    {
        name: "GitHub",
        detail: "Veja meu código",
        href: "https://github.com/ranyanna",
        icon: <i className="devicon-github-original"></i>
    },
];

function Contact() {
    return (
        <section id="contato" className="section">
            <SectionTitle>contato</SectionTitle>

            <div className="contact-layout">
                <div className="contact-text">
                    <h3 className="contact-heading">
                        Vamos criar algo
                        <br />
                        <span className="contact-highlight">incrível juntos.</span>
                    </h3>
                    <p>
                        Estou aberta a oportunidade de estágio e colaborações. Pode me chamar, vou adorr conhecer sua ideia.
                    </p>
                </div>

                <ul className="contact-list">
                    {contacts.map(({ name, detail, href, icon }) => (
                        <li key={name}>
                            <a 
                            href={href}
                            className="contact-card"
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            >
                                <span className="contact-card-icon">{icon}</span>
                                <span className="contact-card-info">
                                    <span className="contact-card-name">{name}</span>
                                    <span className="contact-card-detail">{detail}</span>
                                </span>
                                <ArrowUpRight
                                className="contact-card-arrow"
                                size={20}
                                aria-hidden="true"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Contact;