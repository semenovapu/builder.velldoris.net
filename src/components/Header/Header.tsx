import styles from "./Header.module.scss";
import logo from "../../assets/logoHeader.svg";

function Header() {
  return (
    <header className={styles.header}>
     
      <nav className={styles.header__nav}>
        <img className={styles.header__logoImg} src={logo} alt="VellDoris" />
        <a href="#about">О КОМПАНИИ</a>
        <a href="#projects">НАШИ ПРОЕКТЫ</a>
        <a href="#contacts">КОНТАКТЫ</a>
        <a href="tel:+7XXXXXXXXXX" className={styles.header__phone}>
        +7-XXX-XXX-XX-XX</a>
      </nav>
    </header>
  );
}

export default Header;