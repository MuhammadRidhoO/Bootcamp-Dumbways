import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalLogins() {
  const move = useNavigate();

  const [login, setLogin] = useState(false);

  const handleClose = () => setLogin(false);
  const handleLogin = () => setLogin(true);

  const [register, setRegister] = useState(false);

  const handleCloseRegister = () => setRegister(false);
  const handleRegister = () => setRegister(true);

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
    localStorage.setItem("KeyRegister", JSON.stringify(regis));
  };

  const [loginn, setLoginn] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (e) => {
    console.log(loginn);
    setLoginn({
      ...loginn,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginn);

    const saved = JSON.parse(localStorage.getItem("KeyRegister"));
    if (saved.email === loginn.email && saved.password === loginn.password) {
      move("/user");
      alert("You are success to login");
    } else {
      alert("Email or Password is wrong!! ");
    }
    localStorage.setItem("KeyLogin", JSON.stringify(loginn));
  };

  const handletoregister = (e) => {
    e.preventDefault();
    setLogin(false);
    setRegister(true);
  };

  // console.log(regis);

  return (
    <div>
      <Navbar className="BG1">
        <Container className="d-flex justify-content-around">
          <Navbar.Brand href="/">
            <img src="/img/Icon.png" alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <div>
              
              <Button className="tombol" show={login} onClick={handleLogin}>
                Login
              </Button>
              <Modal show={login} onHide={handleClose}>
                <Modal.Header className="titlelogin">
                  <Modal.Title className="titlelogin2">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmitLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bloder">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={loginn.email}
                        onChange={handleChangeLogin}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bloder">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={loginn.password}
                        onChange={handleChangeLogin}
                      />
                    </Form.Group>
                    <Modal.Footer className="buttonlogin">
                      <Button
                        type="submit"
                        variant="primary"
                        className="buttonloginacc"
                        // onChan={getStorageValue}
                      >
                        Login
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal.Body>

                <div className="noticeregister">
                  <p className="noticeme">
                    Don't have an account?
                    <button
                      className="buttonmoveregister"
                      show={handletoregister}
                      onClick={handleRegister}
                    >
                      Register Here
                    </button>
                  </p>
                </div>
              </Modal>

              <Button
                className="bg-warning border-warning"
                show={register}
                onClick={handleRegister}
              >
                Register
              </Button>
            </div>
            <Modal show={register} onHide={handleCloseRegister}>
              <Modal.Header className="titlelogin">
                <Modal.Title className="titlelogin2">Register</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bloder">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      name="fullname"
                      value={regis.fullname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bloder">Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={regis.email}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bloder">Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={handleChange}
                      name="password"
                      value={regis.password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bloder" type="number">
                      Phone
                    </Form.Label>
                    <Form.Control
                      type="number"
                      onChange={handleChange}
                      name="phone"
                      value={regis.phone}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bloder">Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={handleChange}
                      name="address"
                      value={regis.address}
                    />
                  </Form.Group>
                  <Modal.Footer className="buttonlogin">
                    <Button
                      type="submit"
                      variant="primary"
                      className="buttonloginacc"
                      onClick = {handleCloseRegister}
                    >
                      Register
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* End Navbar Bawah */}
    </div>
  );
}
export default ModalLogins;
