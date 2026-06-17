import Link from "next/link";
import Img from "../Img/Img";
import Button from "../Button/Button";
import styles from "./Card.module.css";

export default function Card({ id, title, price, image }) {
  return (
    <div className={styles.card}>
      <Img src={image} alt={title} />

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.price}>R$ {price}</p>

      <Link href={`/produto/${id}`}>
        <Button>Ver detalhes</Button>
      </Link>
    </div>
  );
}