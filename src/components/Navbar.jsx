import "../css/components/navbar.css";

import { useState, useEffect } from "react";

function Navbar() {
  const [isPill, setIsPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPill(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar${isPill ? " navbar--pill" : ""}`}>
      <nav className="navbar__inner">
        <a href="#" className="navbar__logo">Sequence</a>
        <div className="navbar__links">
          <a href="#">Docs</a>
          <a href="#">Blog</a>
          <a href="#">Changelog</a>
        </div>
        <a href="#" className="navbar__action">Sign in →</a>
      </nav>
    </header>
  );
}

export default Navbar;