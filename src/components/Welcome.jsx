import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary" className="mt-4 text-center mx-5">
        <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
        <p>
          Siamo entusiasti di averti qui ad avventurarti tra i nostri titoli più
          interessanti!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-primary">
            Chiudi
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button className="m-4" onClick={() => setShow(true)}>
          Mostra pop up!
        </Button>
      )}
    </>
  );
}

export default Welcome;
