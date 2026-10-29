import { useState, useEffect } from "react";
import { House, UserRound, CodeXml, Mail, Moon, Folder, Sun, } from "lucide-react";
import "./Sidebar.css";

const links = [
    { href: "#inicio", label: "Início", Icon: House },
    { href: "#projetos", label: "Projetos", Icon: Folder },
    { href: "#sobre", label: "Sobre", Icon: UserRound },
    { href: "#habilidades", label: "Habilidades", Icon: CodeXml },
    { href: "#contato", label: "Contato", Icon: Mail },
];

function Sidebar() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const isDark = theme === "dark"

  return (
    <aside className="sidebar">
      <a href="#inicio" className="sidebar-logo">
        <span className="sidebar-logo-badge">RA</span>
        <span className="sidebar-logo-text">ranyanna</span>
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

      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        {isDark ? (
          <Sun size={20} aria-hidden="true" />
        ) : (
          <Moon size={20} aria-hidden="true" />
        )}
        <span>{isDark ? "Tema claro" : "Tema escuro"}</span>
      </button>
    </aside>
    );
}

export default Sidebar;