import styles from "./Hero.module.scss";
import heroBg from "../../assets/hero-bg.jpg";

function Hero() {
  return (
    <section className={styles.hero}>

      {/* фото с текстом */}
      <div className={styles.hero__image}
        style={{ backgroundImage: `url(${heroBg})` }}>

        <div className={styles.hero__imageContent}>
          <h1 className={styles.hero__title}>
            ДВЕРИ
            <br />
            ДЛЯ СТРОИТЕЛЬНЫХ
            <br />
            ОБЪЕКТОВ
          </h1>

          <p className={styles.hero__subtitle}>
            Собственные производственные
            <br />
            мощности и сеть складов
            <br />
            по всей России и странам СНГ.
          </p>
        </div>

        {/* Этот div создаёт белое скругление в правом нижнем углу */}
        <div className={styles.hero__cornerOverlay}></div>
      </div>

      {/*кнопка + текст */}
      <div className={styles.hero__bottom}>
        <button className={styles.hero__button}>
          <a href="#offer">
            Получить предложение
          </a>
          
        </button>

        <p className={styles.hero__offer}>
          Подберем двери под требования
          <br />
          вашего объекта и сделаем расчет.
        </p>
      </div>

    </section>
  );
}

export default Hero;