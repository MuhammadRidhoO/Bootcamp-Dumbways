import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function ModalRegister() {
  const [regis, setRegis] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setRegis({
      ...regis,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(regis);
    localStorage.setItem("Key", JSON.stringify(regis));
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header className="titlelogin">
          <Modal.Title className="titlelogin2">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bloder">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                value={regis.fullname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bloder">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={regis.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bloder">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={regis.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bloder" type="number">
                Phone
              </Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={regis.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bloder">Address</Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                value={regis.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer className="buttonlogin">
              <Button
                type="submit"
                variant="primary"
                className="buttonloginacc"
              >
                Register
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default ModalRegister;
