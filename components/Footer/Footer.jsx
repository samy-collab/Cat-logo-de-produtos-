import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Catálogo de Produtos</p>
      <p>Projeto desenvolvido em Next.js</p>
    </footer>
  );
}