import { Button } from "react-bootstrap";
import styles from "./ModalConfirmDelete.module.css";

export default function ModalConfirmDelete({
  show = false,
  handleConfirmDelete,
  handleCloseDeleteModal,
}: any) {
  return (
    <>
      {show && (
        <div className={styles.container}>
          <h2>Tem certeza?</h2>

          <div>
            <Button variant="warning" onClick={handleCloseDeleteModal}>
              Cancelar
            </Button>

            <Button variant="danger" onClick={handleConfirmDelete}>
              Deletar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
