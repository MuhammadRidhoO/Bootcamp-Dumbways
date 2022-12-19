import { Card, ListGroup} from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards(props) {
  function Koma (r){
    r = r.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(r))
    r=r.replace(pattern, "$1,$2")
    return r;
  }
  return (
    <div className="stylemenu">
      <div className="nemucard">
        <Card style={{ width: "18rem", marginTop: 60 }}>
          <Card.Img
            variant="top"
            src="img/Iconcard.svg"
            className="imgcard d-flex mx-auto"
          />
          <Card.Body>
            <p className="pketerangan1">Best Price Guarantee</p>
            <p className="pketerangan">
              A small river named Duren flows by their place and supplies
            </p>
          </Card.Body>
        </Card>
        {/* End Card Menu */}
        {/* Lanjutan Card Menu */}
        <Card style={{ width: "18rem", marginTop: 60 }}>
          <Card.Img
            variant="top"
            src="img/Iconlove.svg"
            className="imgcard d-flex mx-auto"
          />
          <Card.Body>
            <p className="pketerangan1">Travellers Love Us</p>
            <p className="pketerangan">
              A small river named Duren flows by their place and supplies
            </p>
          </Card.Body>
        </Card>
        {/* End Card Menu */}
        {/* Lanjutan Card Menu */}
        <Card style={{ width: "18rem", marginTop: 60 }}>
          <Card.Img
            variant="top"
            src="img/Iconhuman.svg"
            className="imgcard d-flex mx-auto"
          />
          <Card.Body>
            <p className="pketerangan1">Best Travel Agent</p>
            <p className="pketerangan">
              A small river named Duren flows by their place and supplies
            </p>
          </Card.Body>
        </Card>
        {/* End Card Menu */}
        {/* Lanjutan Card Menu */}
        <Card style={{ width: "18rem", marginTop: 60 }}>
          <Card.Img
            variant="top"
            src="img/Icontax.svg"
            className="imgcard d-flex mx-auto"
          />
          <Card.Body>
            <p className="pketerangan1">Our Dedicated Support</p>
            <p className="pketerangan">
              A small river named Duren flows by their place and supplies
            </p>
          </Card.Body>
        </Card>
      </div>
      {/* Toolbar Bawah */}
      <div className="grouptour">
        <h1 className="grouptour2">Group Tour</h1>
      </div>
      <div className="semuaharga">
        {props.place?.map((a, b) => {
          return (
            <div className="barlistharga">
              <Card style={{ width: "18rem" }} className="placetour">
                <Link to={"/detail/" + b}>
                  <Card.Img variant="top" src={a.viewPlace} />
                </Link>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="placetour">
                    {a.namePlace} ...
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="listharga">
                  <p>IDR. {Koma(a.pricePlace)}</p>
                  <p>{a.country}</p>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        {/* <div className="barlistharga">
          <Card style={{ width: "18rem" }}>
            <Link to={"/detail"}>
              <Card.Img variant="top" src="img/Gambar2.svg" />
            </Link>
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
        </div> */}
      </div>
      {/* End Toolbar Bawah */}
      <div
        className="bg-warning"
        style={{
          marginBotton: -50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved</p>
      </div>
    </div>
  );
}

export default Cards;
