import styles from "./Production.module.scss";
import schedule from "../../assets/schedule.jpg";
import whiteDoor from "../../assets/whiteDoor.jpg";
import velldorisLogoV from "../../assets/velldorisLogoV.png";

function Production() {
  return (
    <section className={styles.production}>

      <div className={styles.production__header}>
        <h2 className={styles.production__mainTitle}>
          Более 100 000 дверных блоков в месяц
          <br />
          производит фабрика VELLDORIS
        </h2>
      </div>

      <div className={styles.production__content}>
        <p className={styles.production__contTitle}>
          Входим в ТОП-5 ведущих дверных фабрик России
        </p>
      </div>

      <div className={styles.production__columns}>

        <div className={styles.production__left}>
          <p className={styles.production__subTitle}>
            С 2017 по 2022 год продажи межкомнатных
            дверей выросли на 27,4% - это почти 10 млн
            дверей в год.
          </p>
          <p className={styles.production__subTitle}>
            Компания VellDoris постоянно наращивает
            производственные мощности и предлагает
            современные решения.
          </p>
        </div>

        <div className={styles.production__right}>
          <p className={styles.production__chartTitle}>
            Ввод в действие жилых домов
            в расчете на 1000 человек населения м.кв. общей площади
            в городской и сельской местности
          </p>
          <img className={styles.production__chartImage} src={schedule} alt="График" />
        </div>

      </div>

      <img className={styles.production__banner} src={whiteDoor} alt="Фон" />
      <img className={styles.production__bgLogoV} src={velldorisLogoV}/>

    </section>
  );
}

export default Production;