import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddTripAdmins() {
  return (
    <div className="allformadmin">
      <Form className="alltripadmin">
        <div className="judulAddTrip">
          <h4>Add Trip</h4>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title Trip</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Country</Form.Label>
          <Form.Select placeholder="Places">
            <option>Choose Places</option>
            <option>Autralia</option>
            <option>South Korea</option>
            <option>Japan</option>
            <option>Indonesia</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Accommodation</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Transportation</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Eat</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <div className="datetime">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Day</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Night</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quota</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" as="textarea" />
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Image</Form.Label>
          <div className="uploadfotoimg">
            <Form.Control
              type="file"
              size="sm"
              className="uploadfotoimg"
            ></Form.Control>
            <img
              src="/img/iconuploadfoto.png"
              alt=""
              className="imguploadfile"
            />
          </div>
        </Form.Group>
        <div className="tombolsubmitaddadmin">
          <Button
            variant="primary"
            type="submit"
            className="tombolsubmitaddadmin1"
          >
            Add Trip
          </Button>
        </div>
      </Form>
        <div
          className="bg-warning"
          style={{
            marginTop: 130,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved
          </p>
        </div>
      </div>
  );
}

export default AddTripAdmins;
