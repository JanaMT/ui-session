import styles from './SalonCard.module.css';

interface SalonCardProps {
  image: string;
  name: string;
  rating: number;
  favoriteIcon: string;
  starIcon: string;
  arrowIcon: string;
}

function SalonCard({ image, name, rating, favoriteIcon, starIcon, arrowIcon }: SalonCardProps) {
  return (
    <div className={styles.salonCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
        <button className={styles.favoriteButton} aria-label="Add to favorites">
          <img src={favoriteIcon} alt="" className={styles.favoriteIcon} />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.rating}>
            <img src={starIcon} alt="" className={styles.starIcon} />
            <span className={styles.ratingText}>{rating}</span>
          </div>
        </div>
        <button className={styles.arrowButton} aria-label="View salon details">
          <img src={arrowIcon} alt="" className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
}

export default SalonCard;
