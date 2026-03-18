import styles from "./Quantity.module.scss";
import showroom from "../../assets/showroom.jpg";


function Quantity() {
  return (
    <section className={styles.quantity}>

    <div className={styles.quantity__stats}> 

        <div className={styles.quantity__statsLeft}>
            <div className={styles.quantity__statItem}>
                <span className={styles.quantity__statNumber}>50+&nbsp;</span>
                <span className={styles.quantity__statLabel}>розничных</span>
                <span className={styles.quantity__statLabel}>салонов</span>
            </div>
            <div className={styles.quantity__statItem}>
                <span className={styles.quantity__statNumber}>1000+&nbsp;</span>
                <span className={styles.quantity__statLabel}>сотрудников</span>
                <span className={styles.quantity__statLabel}>в команде</span>
            </div>
        </div>


    {/* середина с фото */}
    <img className={styles.quantity__statsImage} src={showroom} alt="Шоурум" />


        <div className={styles.quantity__statsRight}>  {/* аналогично Left */}
            <div className={styles.quantity__statItem}>
                <span className={styles.quantity__statNumber}>2</span>
                <span className={styles.quantity__statLabel}>производственные</span>
                <span className={styles.quantity__statLabel}>площадки</span>
            </div>
            <div className={styles.quantity__statItem}>
                <span className={styles.quantity__statNumber}>7</span>
                <span className={styles.quantity__statLabel}>собственных</span>
                <span className={styles.quantity__statLabel}>складов по РФ</span>
            </div>
        </div>
    </div>


    </section>
  );
}

export default Quantity;
