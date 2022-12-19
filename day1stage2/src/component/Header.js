import { Button, InputGroup, Form } from "react-bootstrap";

function Headers() {
  return (
    <div className="next">
      <h1 className="font">Explore</h1>
      <h1 className="font2">your amazing city together</h1>
      {/* Lanjutan Pencarian */}
      <p style={{ marginTop: 50 }}>Find great places to holliday</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button id="basic-addon2" className="iconns">
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default Headers;