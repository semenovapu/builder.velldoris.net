import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>

      {/* оранжевый заголовок */}
      <div className={styles.about__header}>
        <h2 className={styles.about__mainTitle}>
          Компания VELLDORIS -
          <br />
          современный производственный холдинг
        </h2>
      </div>

      {/* ===== НИЖНЯЯ ЧАСТЬ — две колонки ===== */}
      <div className={styles.about__content}>

        {/* --- Левая колонка --- */}
        <div className={styles.about__left}>
          <h3 className={styles.about__subtitle}>О КОМПАНИИ</h3>
          <ul className={styles.about__list}>
            <li>Постоянное развитие технической базы</li>
            <li>Поиск новых идей</li>
            <li>Глубокая модернизация оборудования</li>
            <li>Открытие новых производственных цехов</li>
            <li>Формирование логистических комплексов</li>
            <li>Качественное пополнение кадровых ресурсов</li>
          </ul>
        </div>

        {/* --- Правая колонка — таймлайн --- */}
        <div className={styles.about__timeline}>

          {/* Каждый элемент таймлайна — это item с точкой и текстом */}
          <div className={styles.about__timelineItem}>
            <div className={styles.about__timelineDot}></div>
            <p>
              Наша история началась в 2001 году с<br />
              небольшого производства дверей по<br />
              индивидуальным заказам.
            </p>
          </div>

          <div className={styles.about__timelineItem}>
            <div className={styles.about__timelineDot}></div>
            <p>
              С 2013 года мы начали стремительно<br />
              наращивать обороты и увеличивать<br />
              масштабы деятельности.
            </p>
          </div>

          <div className={styles.about__timelineItem}>
            <div className={styles.about__timelineDot}></div>
            <p>
              Сейчас продукция VELLDORIS представлена<br />
              во всех регионах России и странах ближнего<br />
              зарубежья.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;