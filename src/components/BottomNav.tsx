import { useState } from 'react';
import styles from './BottomNav.module.css';
import homeIcon from '../assets/icons/nav-home.svg';
import bookingIcon from '../assets/icons/nav-booking.svg';
import favoriteIcon from '../assets/icons/favorite.svg';
import profileIcon from '../assets/icons/nav-profile.svg';

type NavItem = 'home' | 'booking' | 'favorite' | 'profile';

function BottomNav() {
  const [activeItem, setActiveItem] = useState<NavItem>('home');
  return (
    <nav className={styles.bottomNav}>
      <button
        className={`${styles.navItem} ${activeItem === 'home' ? styles.active : ''}`}
        onClick={() => setActiveItem('home')}
        aria-label="Home"
      >
        <img src={homeIcon} alt="" className={styles.icon} />
        <span className={styles.label}>Home</span>
      </button>
      <button
        className={`${styles.navItem} ${activeItem === 'booking' ? styles.active : ''}`}
        onClick={() => setActiveItem('booking')}
        aria-label="Booking"
      >
        <img src={bookingIcon} alt="" className={styles.icon} />
        <span className={styles.label}>Booking</span>
      </button>
      <button
        className={`${styles.navItem} ${activeItem === 'favorite' ? styles.active : ''}`}
        onClick={() => setActiveItem('favorite')}
        aria-label="Favorite"
      >
        <img src={favoriteIcon} alt="" className={styles.icon} />
        <span className={styles.label}>Favorite</span>
      </button>
      <button
        className={`${styles.navItem} ${activeItem === 'profile' ? styles.active : ''}`}
        onClick={() => setActiveItem('profile')}
        aria-label="Profile"
      >
        <img src={profileIcon} alt="" className={styles.icon} />
        <span className={styles.label}>Profile</span>
      </button>
    </nav>
  );
}

export default BottomNav;
