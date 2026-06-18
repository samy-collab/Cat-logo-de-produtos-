import Button from "../Button/Button";
import styles from "./Modal.module.css";

export default function Modal({ onConfirmar, onCancelar }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>Deseja realmente cadastrar este produto?</p>

        <div className={styles.actions}>
          <Button onClick={onConfirmar}>Confirmar</Button>
          <Button onClick={onCancelar}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}