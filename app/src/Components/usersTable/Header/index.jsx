import styles from "../styles.module.css";

const Header = ({ headings, handleSort }) => {
  return headings.map((el) => (
    <th
      key={el.id}
      className={styles.tableTh}
      onClick={(e) => handleSort(el.title)}
    >
      {el.title}
    </th>
  ));
};

export default Header
