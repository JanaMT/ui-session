import styles from './PopularCategories.module.css';
import CategoryItem from './CategoryItem';
import haircutIcon from '../assets/icons/category-haircut.svg';
import makeupIcon from '../assets/icons/category-makeup.svg';
import shavingIcon from '../assets/icons/category-shaving.svg';
import coloringIcon from '../assets/icons/category-coloring.svg';
import stylingIcon from '../assets/icons/category-styling.svg';

function PopularCategories() {
  const categories = [
    { icon: haircutIcon, label: 'Haircut' },
    { icon: makeupIcon, label: 'Make Up' },
    { icon: shavingIcon, label: 'Shaving' },
    { icon: coloringIcon, label: 'Coloring' },
    { icon: stylingIcon, label: 'Styling' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popular Categories</h2>
        <a href="#" className={styles.seeAll}>
          See All
        </a>
      </div>
      <div className={styles.scrollContainer}>
        {categories.map((category, index) => (
          <CategoryItem key={index} icon={category.icon} label={category.label} />
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
