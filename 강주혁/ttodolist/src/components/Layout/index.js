import Kreact from "../../core/Kreact";
import Header from "./Header";
import styles from "./index.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
};