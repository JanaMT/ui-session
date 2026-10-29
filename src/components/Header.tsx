import styles from './Header.module.css';
import logoIcon from '../assets/icons/logo.svg';
import notificationIcon from '../assets/icons/notification.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logoIcon} alt="StyleHub" className={styles.logoIcon} />
      <button className={styles.notificationButton} aria-label="Notifications">
        <img src={notificationIcon} alt="" className={styles.notificationIcon} />
      </button>
    </header>
  );
}

export default Header;
