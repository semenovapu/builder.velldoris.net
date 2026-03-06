import styles from "./footer.module.scss";
import logo from "../../assets/logoHeader.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <a href="/">
          <img
            className={styles.footer__top_logo}
            src={logo}
            alt="VellDoris"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;