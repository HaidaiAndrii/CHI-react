import styles from "../styles.module.css";

const Header = ({ headings, handleSort, users }) => {
  return headings.map((el) => (
    <th
      key={el.id}
      className={styles.tableTh}
      onClick={(e) => handleSort(el.title, users)}
    >
      {el.title}
    </th>
  ));
};

export default Header
