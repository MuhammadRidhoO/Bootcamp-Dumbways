import { Card, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminTourTrips() {
  return (
    <div className="semuaharga11">
      <div>
        <div className="grouptour1">
          <h1 className="grouptour3">Income Trip</h1>
         <Link to="/addtripAdmin"><button className="grouptour4">Add Trip</button></Link> 
        </div>
        <div className="semuaharga">
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar1.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>6D/4N Fun Tassie Vacation ...</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 12,398,000</p>
                <p>Australia</p>
              </Card.Body>
            </Card>
          </div>
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar2.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>6D/4N Exciting Summer in ...</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 10,288,000</p>
                <p>South Korea</p>
              </Card.Body>
            </Card>
          </div>
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar3.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>8D/6N Wonderful Autum ...</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 28,999,000</p>
                <p>Japan</p>
              </Card.Body>
            </Card>
          </div>
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar4.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>4D/3N Overland Jakarta B...</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 3,188,000</p>
                <p>Indonesia</p>
              </Card.Body>
            </Card>
          </div>
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar5.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>4D/3N Labuan Bajo Delight</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 10,488,000</p>
                <p>Indonesia</p>
              </Card.Body>
            </Card>
          </div>
          <div className="barlistharga">
            <Card style={{ width: "18rem" }}>
              <Nav.Link>
                <Card.Img variant="top" src="img/Gambar6.svg" />
              </Nav.Link>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>5D/4N Magic Tokyo Fun</ListGroup.Item>
              </ListGroup>
              <Card.Body className="listharga">
                <p>IDR. 11,188,000</p>
                <p>Japan</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div
        className="bg-warning"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved</p>
      </div>
    </div>
  );
}
export default AdminTourTrips;
