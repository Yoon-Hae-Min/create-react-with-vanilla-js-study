import Kreact from "../../../core/Kreact"
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>또두리스트</h1>
    </div>
  )
}