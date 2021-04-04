import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Stepper from "./infoStepper/stepperEditView";

// export default function Example(props) {
export default function Example({ name = "Editar" }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const typeoff = (
    type // type >> tyof es una props
  ) =>
    type === "Editar" ? (
      <a href="#" onClick={handleShow}>
        <FaPlusCircle />
      </a>
    ) : (
      <Button variant="outline-secondary" onClick={handleShow}>
        {name}
      </Button>
    );

  return (
    <>
      {
        typeoff(
          name
        ) /* va a decidir si mostrar el boton con el texto'prosp name o el link con el font awosome */
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stepper />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
