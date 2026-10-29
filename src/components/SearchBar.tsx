import styles from './SearchBar.module.css';
import searchIcon from '../assets/icons/search.svg';
import filterIcon from '../assets/icons/filter.svg';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInput}>
        <img src={searchIcon} alt="" className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Salon, Specialist"
          className={styles.input}
          aria-label="Search salons and specialists"
        />
      </div>
      <button className={styles.filterButton} aria-label="Filter search results">
        <img src={filterIcon} alt="" className={styles.filterIcon} />
      </button>
    </div>
  );
}

export default SearchBar;
