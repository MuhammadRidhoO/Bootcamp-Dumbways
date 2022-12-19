import { Button, Modal, Form } from "react-bootstrap";

function ModalLogins() {
  return (
    <div
    className="modal show"
    style={{ display: "block", position: "initial"}}
    >
      <Modal.Dialog>
        <Modal.Header className="titlelogin">
          <Modal.Title className="titlelogin2">Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="fw-bloder">Email</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fw-bloder">Password</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
    </Form>
        </Modal.Body>

        <Modal.Footer className="buttonlogin">
          <Button variant="primary" className="buttonloginacc">Login</Button>
        </Modal.Footer>
        <div className="noticeregister">
            <p className="noticeme">Don't have an account? ? Klik Here</p>
        </div>
      </Modal.Dialog>
    </div>
  );
}
export default ModalLogins;
