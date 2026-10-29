import styles from './HighestRatedSalons.module.css';
import SalonCard from './SalonCard';
import salonImage from '../assets/images/salon-01.jpg';
import favoriteIcon from '../assets/icons/favorite.svg';
import starIcon from '../assets/icons/rating-star.svg';
import arrowIcon from '../assets/icons/salon-arrow.svg';

function HighestRatedSalons() {
  const salons = [
    { image: salonImage, name: 'Timeless Cuts', rating: 3.5 },
    { image: salonImage, name: 'Timeless Cuts', rating: 3.5 },
    { image: salonImage, name: 'Timeless Cuts', rating: 3.5 },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Highest Rated Salons</h2>
        <a href="#" className={styles.seeAll}>
          See All
        </a>
      </div>
      <div className={styles.scrollContainer}>
        {salons.map((salon, index) => (
          <SalonCard
            key={index}
            image={salon.image}
            name={salon.name}
            rating={salon.rating}
            favoriteIcon={favoriteIcon}
            starIcon={starIcon}
            arrowIcon={arrowIcon}
          />
        ))}
      </div>
    </section>
  );
}

export default HighestRatedSalons;
