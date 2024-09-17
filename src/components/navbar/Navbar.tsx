import { FC, useState, useEffect, useRef, useCallback, useMemo } from "react";
import Language from "../../utils/language/Language";
import SocialLinks from "../social/SocialLinks";
import styles from "./navbar.module.css";
import NavbarLogo from "./NavbarLogo";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // State to track active link
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const memoizedLanguage = useMemo(() => <Language />, []);
  const memoizedSocialLinks = useMemo(() => <SocialLinks />, []);

  return (
    <div
      className={`${styles.navbar_container} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <NavbarLogo />

      {/* Navbar Links for Desktop */}
      <div className={styles.navbar_links}>
        <a
          href="#home"
          className={activeLink === "#home" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeLink === "#about" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a
          href="#portfolio"
          className={activeLink === "#portfolio" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#portfolio")}
        >
          Portfolio
        </a>
        <a
          href="#services"
          className={activeLink === "#services" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#services")}
        >
          Services
        </a>
        <a
          href="#contact"
          className={activeLink === "#contact" ? styles.activeLink : ""}
          onClick={() => handleLinkClick("#contact")}
        >
          Contact
        </a>
      </div>

      {/* Language and Social Links */}
      <div className={styles.navbar_last_items}>
        {memoizedLanguage}
        {memoizedSocialLinks}
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className={styles.menu_container}>
        <img
          src="/images/menu.png"
          alt="menu"
          onClick={toggleMenu}
          className={styles.menu_icon}
        />
      </div>

      {/* Responsive Menu for Mobile */}
      {isMenuOpen && (
        <div className={styles.responsive_menu} ref={menuRef}>
          <div className={styles.responsive_nav_links}>
            <a
              href="#home"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#home");
              }}
              className={activeLink === "#home" ? styles.activeLink : ""}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#about");
              }}
              className={activeLink === "#about" ? styles.activeLink : ""}
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#portfolio");
              }}
              className={activeLink === "#portfolio" ? styles.activeLink : ""}
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#services");
              }}
              className={activeLink === "#services" ? styles.activeLink : ""}
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#contact");
              }}
              className={activeLink === "#contact" ? styles.activeLink : ""}
            >
              Contact
            </a>
          </div>
          <div className={styles.responsive_menu_bottom}>
            {memoizedLanguage}
            {memoizedSocialLinks}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
