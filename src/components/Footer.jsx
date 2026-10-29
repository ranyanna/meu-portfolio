function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-badge">RA</span>
        <span>ranyanna</span>
      </div>
      <p>© {year} Ranyanna Ayala</p>
    </footer>
  );
}

export default Footer;
