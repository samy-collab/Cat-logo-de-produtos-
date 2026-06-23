import Button from "../Button/Button";
import styles from "./Modal.module.css";

export default function Modal({ onConfirmar, onCancelar }) {
  return (
    <div className={styles.fundo}>
      <div className={styles.modal}>
        <p>Deseja realmente cadastrar este produto?</p>

        <div className={styles.botoes}>
          <Button type="button" onClick={onConfirmar}>
            Confirmar
          </Button>

          <Button type="button" onClick={onCancelar}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}