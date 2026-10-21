import { House, UserRound, CodeXml, Mail, Moon, Icon } from "lucide-react";

const links = [
    { href: "#inicio", label: "Início", Icon: House },
    { href: "#sobre", label: "Sobre", Icon: UserRound },
    { href: "#habilidades", label: "Habilidades", Icon: CodeXml },
    { href: "#contato", label: "Contato", Icon: Mail },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="#inicio" className="sidebar-logo">
        <span className="sidebar-logo-badge">RA</span>
        <span className="sidebar-logo-text">ranyanna.dev</span>
      </a>

      <nav aria-label="Navegação principal">
        <ul className="sidebar-links">
            {links.map(({ href, label, Icon }) => (
                <li key={href}>
                    <a href={href} className="sidebar-link">
                        <Icon size={20} aria-hidden="true" />
                        <span>{label}</span>
                    </a>
                </li>
            ))}
        </ul>
      </nav>

      <button type="button" className="theme-toggle">
        <Moon size={20} aria-hidden="true" />
        <span>Tema escuro</span>
      </button>
    </aside>
    );
}

export default Sidebar;