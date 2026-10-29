import "./Footer.css"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Ranyanna Ayala</p>
    </footer>
  );
}

export default Footer;
