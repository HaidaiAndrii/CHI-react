import styles from "../styles.module.css";

const Header = ({ headings, handleSort, users, sorted, sortedField }) => {
  return headings.map((el) => (
    <th
      key={el.id}
      className={styles.tableTh}
      onClick={(e) => handleSort(el.title, users)}
    >
{sortedField === el.title && 
      <div
      className={
        sorted
        ? `${styles.filterArrow} ${styles.downArrow}`
        : `${styles.filterArrow} ${styles.upArrow}`
      }
      ></div>
    }
      {el.title}
    </th>
  ));
};

export default Header;
