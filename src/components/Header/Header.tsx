import styles from "./Header.module.scss";
import logo from "../../assets/logoHeader.svg";
import { useState, useEffect, useRef } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import NavLinks from "../NavLinks/NavLinks";


interface HeaderProps {
  handleClickMarketing?: () => void;
  handleClickWhatWillIget?: () => void;
}

function Header({
  handleClickMarketing,
  handleClickWhatWillIget,
}: HeaderProps) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);


  return (
    <header className={styles.header}>
     
        <nav className={styles.header__nav}>
        <img className={styles.header__logoImg} src={logo} alt="VellDoris" />
        <ul className={styles.header__nav_links}>
          <NavLinks
            handleClickMarketing={handleClickMarketing}
            handleClickWhatWillIget={handleClickWhatWillIget}
          />
        </ul>
        <a className={styles.header__phone} href="tel:+7XXXXXXX">
          +7-XXX-XX-XX-XX
        </a>
      </nav>

     {windowWidth < 1360 && (
        <button
          ref={btnRef}
          type="button"
          aria-label="бургер меню"
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      )}

      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
      >
        <ul>
          <NavLinks
            handleClickMarketing={handleClickMarketing}
            handleClickWhatWillIget={handleClickWhatWillIget}
          />
          <li>
            <a className={styles.header__phone} href="tel:+XXXXXXX">
              +7-XXX-XX-XX-XX
            </a>
          </li>
        </ul>
      </nav>

      
    </header>
  );
}

export default Header;