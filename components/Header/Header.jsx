import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Loja</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}