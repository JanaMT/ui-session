import styles from './Home.module.css';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ExclusiveDeals from '../../components/ExclusiveDeals';
import PopularCategories from '../../components/PopularCategories';
import HighestRatedSalons from '../../components/HighestRatedSalons';
import BottomNav from '../../components/BottomNav';

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <SearchBar />
      <main className={styles.main}>
        <ExclusiveDeals />
        <PopularCategories />
        <HighestRatedSalons />
      </main>
      <BottomNav />
    </div>
  );
}

export default Home;
