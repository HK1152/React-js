import styles from "./header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>My Website</h1>
      <button className={styles.button}>login</button>
    </nav>
  );
}
