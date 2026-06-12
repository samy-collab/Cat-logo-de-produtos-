import Img from "../Img/Img";
import styles from "./Card.module.css";

export default function Card({ produto }) {
  return (
    <div className={styles.card}>
      <Img src={produto.image} alt={produto.title} />

      <h2>{produto.title}</h2>

      <p>R$ {produto.price}</p>
    </div>
  );
}