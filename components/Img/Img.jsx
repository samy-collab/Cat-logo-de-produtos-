import styles from "./Img.module.css";

export default function Img({ src, alt }) {
  return <img className={styles.img} src={src} alt={alt} />;
}