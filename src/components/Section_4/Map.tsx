import styles from "./Map.module.scss";
import mapImage from "../../assets/map.jpg";
import girlAndDoors from "../../assets/buildAJob_girl.jpg";

function Map() {
  return (
    <section className={styles.map}>

      <div className={styles.map__top}>
        <h2 className={styles.map__title}>
          Филиалы имеют собственную розницу,<br />
          склады с товарным запасом,<br />
          логистику и сервис для клиентов
        </h2>


        <div className={styles.map__imageWrapper}>
          <img className={styles.map__image} src={mapImage} alt="Карта филиалов" />
        </div>
      </div>


      <div
        className={styles.map__banner}
        style={{ backgroundImage: `url(${girlAndDoors})` }}
      >
        <p className={styles.map__bannerText}>
          Мы точно знаем,<br />
          как работать<br />
          эффективно!
        </p>
      </div>

    </section>
  );
}

export default Map;