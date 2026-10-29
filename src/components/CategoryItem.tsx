import styles from './CategoryItem.module.css';

interface CategoryItemProps {
  icon: string;
  label: string;
}

function CategoryItem({ icon, label }: CategoryItemProps) {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={label} className={styles.icon} />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default CategoryItem;
