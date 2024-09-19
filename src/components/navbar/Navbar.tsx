import { FC, useState, useEffect, useRef, useCallback, useMemo } from "react";
import Language from "../../utils/language/Language";
import SocialLinks from "../social/SocialLinks";
import styles from "./navbar.module.css";
import NavbarLogo from "./NavbarLogo";
import { useTranslation } from "react-i18next";

const Navbar: FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const menuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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

  // Add IntersectionObserver to track scrolling and update active link
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Assumes each section has a corresponding tag

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Change this value based on when you want the active link to change
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

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
          className={activeSection === "#home" ? styles.activeLink : ""}
        >
          {t("navbar.home")}
        </a>
        <a
          href="#about"
          className={activeSection === "#about" ? styles.activeLink : ""}
        >
          {t("navbar.about")}
        </a>
        <a
          href="#portfolio"
          className={activeSection === "#portfolio" ? styles.activeLink : ""}
        >
          {t("navbar.portfolio")}
        </a>
        <a
          href="#services"
          className={activeSection === "#services" ? styles.activeLink : ""}
        >
          {t("navbar.services")}
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? styles.activeLink : ""}
        >
          {t("navbar.contact")}
        </a>
      </div>

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
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#about");
              }}
              className={activeLink === "#about" ? styles.activeLink : ""}
            >
              {t("navbar.about")}
            </a>
            <a
              href="#portfolio"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#portfolio");
              }}
              className={activeLink === "#portfolio" ? styles.activeLink : ""}
            >
              {t("navbar.portfolio")}
            </a>
            <a
              href="#services"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#services");
              }}
              className={activeLink === "#services" ? styles.activeLink : ""}
            >
              {t("navbar.services")}
            </a>
            <a
              href="#contact"
              onClick={() => {
                toggleMenu();
                handleLinkClick("#contact");
              }}
              className={activeLink === "#contact" ? styles.activeLink : ""}
            >
              {t("navbar.contact")}
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
