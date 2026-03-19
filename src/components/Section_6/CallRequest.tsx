import styles from "./CallRequest.module.scss";
import PartnerForm_bg from "../../assets/PartnerForm_bg.jpg";
import velldorisLogoV from "../../assets/velldorisLogoV.png";
import FormBitrix from "../FormBitrix/FormBitrix";



function CallRequest() {
  return (
    <section className={styles.callRequest}>

      <img className={styles.callRequest__bgLogoV} src={velldorisLogoV}/>

      <div className={styles.callRequest__header}>
        <h2 className={styles.callRequest__title}>
          VELLDORIS - надежный партнер,<br />
          с нами выгодно и надежно!
        </h2>
      </div>

      <div
        className={styles.callRequest__formSection}
        style={{ backgroundImage: `url(${PartnerForm_bg})` }} >
        

        <div id="offer" className={styles.callRequest__formTitle}>
          <p>
            Мы готовы сделать<br />
            выгодное предложение
          </p>
          <FormBitrix />
        </div>
      </div>


      <p className={styles.callRequest__disclaimer}>
        Нажимая кнопку, Вы соглашаетесь с Политикой<br />
        конфиденциальности
      </p>

    </section>
  );
}

export default CallRequest;