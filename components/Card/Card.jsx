import Link from "next/link";
import styles from "./Card.module.css";
import Img from "../Img/Img";

export default function Card({ id, title, price, image }) {
  return (
    <div className={styles.card}>
      <Img src={image} alt={title} className={styles.image} />

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.price}>R$ {price}</p>

      <Link href={`/produto/${id}`} className={styles.link}>
        Ver detalhes
      </Link>
    </div>
  );
}