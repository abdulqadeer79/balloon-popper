import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function GameOverModal(props) {
  const [show, setShow] = useState(true);

  function handleRestart() {
    setShow(false);
    props.resetScore();
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleRestart}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Gameover!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Pop the balloon in time, avoid Popping the BOMB! --- Your score:{" "}
          <b>{props.score}</b>
        </Modal.Body>
        <div className="text-center m-2">
          <Button variant="secondary" onClick={handleRestart}>
            Play Again
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default GameOverModal;
