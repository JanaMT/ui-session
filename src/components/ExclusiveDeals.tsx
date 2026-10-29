import styles from './ExclusiveDeals.module.css';
import bannerImage from '../assets/images/promo-banner.jpg';

function ExclusiveDeals() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Exclusive Deals</h2>
        <a href="#" className={styles.seeAll}>
          See All
        </a>
      </div>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h3 className={styles.bannerTitle}>
            Get Special Discounts
            <br />
            Up to 50%
          </h3>
          <button className={styles.bookButton}>Book Now</button>
        </div>
        <div className={styles.imageWrapper}>
          <img src={bannerImage} alt="Salon interior" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default ExclusiveDeals;
